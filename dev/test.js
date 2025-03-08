const Blockchain = require ('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1694376338154,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1694376373330,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1694376474377,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "690514a0501511ee872815a5b4288b28",
"transactionID": "7e09c990501511ee872815a5b4288b28"
},
{
"amount": 100,
"sender": "49ti495i424t4t9kg4",
"recepient": "50o305og5tbk96yuj43",
"transactionID": "9ce9fe20501511ee872815a5b4288b28"
},
{
"amount": 50,
"sender": "49ti495i424t4t9kg4",
"recepient": "50o305og5tbk96yuj43",
"transactionID": "a3472c70501511ee872815a5b4288b28"
},
{
"amount": 160,
"sender": "49ti495i424t4t9kg4",
"recepient": "50o305og5tbk96yuj43",
"transactionID": "a68b8200501511ee872815a5b4288b28"
}
],
"nonce": 1335,
"hash": "00009c9f2beb2bfe37002fa1432a3dfb988f00a81b5423cc6ed9b65e56d6ee22",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1694376540771,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "690514a0501511ee872815a5b4288b28",
"transactionID": "ba384810501511ee872815a5b4288b28"
},
{
"amount": 80,
"sender": "49ti495i424t4t9kg4",
"recepient": "50o305og5tbk96yuj43",
"transactionID": "d97e1c40501511ee872815a5b4288b28"
},
{
"amount": 200,
"sender": "49ti495i424t4t9kg4",
"recepient": "50o305og5tbk96yuj43",
"transactionID": "de478b30501511ee872815a5b4288b28"
}
],
"nonce": 72315,
"hash": "0000e374a646615663efe7f2ddc6bb362bdc3cd280ae7aa187adbb73606b7cb7",
"previousBlockHash": "00009c9f2beb2bfe37002fa1432a3dfb988f00a81b5423cc6ed9b65e56d6ee22"
},
{
"index": 5,
"timestamp": 1694376584193,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "690514a0501511ee872815a5b4288b28",
"transactionID": "e1cabe80501511ee872815a5b4288b28"
}
],
"nonce": 20170,
"hash": "0000dcd32230475a63ebc9a506f70a8e0f942cd7840f2204f400ebdd0de81976",
"previousBlockHash": "0000e374a646615663efe7f2ddc6bb362bdc3cd280ae7aa187adbb73606b7cb7"
},
{
"index": 6,
"timestamp": 1694376587528,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "690514a0501511ee872815a5b4288b28",
"transactionID": "fbac4350501511ee872815a5b4288b28"
}
],
"nonce": 101252,
"hash": "0000ca57e08219ed83a99ae6f2312d9dab59767aa82911d4fa22c487aa2ea2a5",
"previousBlockHash": "0000dcd32230475a63ebc9a506f70a8e0f942cd7840f2204f400ebdd0de81976"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "690514a0501511ee872815a5b4288b28",
"transactionID": "fda999f0501511ee872815a5b4288b28"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};


console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));
//console.log(bitcoin.chainIsValid(bc1.chain));
