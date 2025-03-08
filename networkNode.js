const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const { v1: uuidv1 } = require('uuid');
const port = process.argv[2];
const request = require ('request');
const rp = require('request-promise');

const nodeAddress = uuidv1().split('-').join('');
const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
  const newTransaction = req.body;
  const blockIndex = bitcoin.addTransactionToPendingTransactions(newTransaction);
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.post('/transaction/broadcast', function(req, res) {
  const newTransaction = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  bitcoin.addTransactionToPendingTransactions(newTransaction);

  const requestPromises = bitcoin.networkNodes.map(networkNodeUrl => {
    const requestOptions = {
      url: `${networkNodeUrl}/transaction`,
      method: 'POST',
      body: newTransaction,
      json: true
    };
    return rp(requestOptions);
  });

  Promise.all(requestPromises).then(() => {
    res.json({ note: 'Transaction created and broadcast successfully.' });
  });
});

app.get('/mine', function(req, res) {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  const requestPromises = bitcoin.networkNodes.map(networkNodeUrl => {
    const requestOptions = {
      url: `${networkNodeUrl}/receive-new-block`,
      method: 'POST',
      body: { newBlock: newBlock },
      json: true
    };
    return rp(requestOptions);
  });

  Promise.all(requestPromises)
    .then(() => {
      const requestOptions = {
        url: `${bitcoin.currentNodeUrl}/transaction/broadcast`,
        method: 'POST',
        body: {
          amount: 12.5,
          sender: '00',
          recipient: nodeAddress
        },
        json: true
      };
      return rp(requestOptions);
    })
    .then(() => {
      res.json({
        note: 'New block mined & broadcast successfully',
        block: newBlock
      });
    });
});

app.get('/nodes', function(req, res) {
  res.json({ networkNodes: bitcoin.networkNodes });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});