var program = require('commander');
var fs = require('fs')
program
  .version('0.0.1')
  .parse(process.argv);
var address = program.args[0]
var send_nodes_count = program.args[1]
var env = program.args[2]
console.log(env)
const {Contract} = require('qweb3')
// The path to your local Qtum node via RPC
const rpcAddress = (env === 'testnet' ? 'http://test:test1234@127.0.0.1:13889' : 'http://test:test1234@127.0.0.1:3889')
const contractAddress =(env === 'testnet' ? '0x4b522ef3f01fafb6bd7ba7a8414f1461158cc31a' : '0xe2461c84df96878fa0983e497c97124c15f2b79d');

// contractAbi = The ABI of the contract
const contractAbi = [
 {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [
   {
    "name": "",
    "type": "string"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_spender",
    "type": "address"
   },
   {
    "name": "_value",
    "type": "uint256"
   }
  ],
  "name": "approve",
  "outputs": [
   {
    "name": "success",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [
   {
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_from",
    "type": "address"
   },
   {
    "name": "_to",
    "type": "address"
   },
   {
    "name": "_value",
    "type": "uint256"
   }
  ],
  "name": "transferFrom",
  "outputs": [
   {
    "name": "success",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [
   {
    "name": "",
    "type": "uint8"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "standard",
  "outputs": [
   {
    "name": "",
    "type": "string"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "name": "",
    "type": "address"
   }
  ],
  "name": "balanceOf",
  "outputs": [
   {
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [
   {
    "name": "",
    "type": "string"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_to",
    "type": "address"
   },
   {
    "name": "_value",
    "type": "uint256"
   }
  ],
  "name": "transfer",
  "outputs": [
   {
    "name": "success",
    "type": "bool"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "name": "",
    "type": "address"
   },
   {
    "name": "",
    "type": "address"
   }
  ],
  "name": "allowance",
  "outputs": [
   {
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "name": "_owner",
    "type": "address"
   }
  ],
  "name": "balance",
  "outputs": [
   {
    "name": "balances",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "name": "_from",
    "type": "address"
   },
   {
    "indexed": true,
    "name": "_to",
    "type": "address"
   },
   {
    "indexed": false,
    "name": "_value",
    "type": "uint256"
   }
  ],
  "name": "Transfer",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "name": "_owner",
    "type": "address"
   },
   {
    "indexed": true,
    "name": "_spender",
    "type": "address"
   },
   {
    "indexed": false,
    "name": "_value",
    "type": "uint256"
   }
  ],
  "name": "Approval",
  "type": "event"
 }
]
const contract = new Contract(rpcAddress, contractAddress, contractAbi)
const sender_address = (env === 'testnet' ? 'qLjv8pnuuccSHAmAHfB1s8uT5Ru7xNnK9x' : 'QV4PR5nre19w2NNVXZLCBPJYDosob92fhq')
contract.send('transfer', {
    methodArgs: [address, Number(send_nodes_count)*100000000],
    senderAddress: sender_address,
    gasLimit: 53000
  }).catch(function(error) {
    var log = '\r\n\r\n\r\nTime:' + Date().toString() + '\r\naddress:' + address + '\r\nerror:' + error
    fs.appendFile('log/node.log', log, function (err) {
      process.exit(1)
    });
});


