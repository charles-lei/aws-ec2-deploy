
const {Contract, Qweb3} = require('qweb3')

var program = require('commander');
program
  .version('0.0.1')
  .parse(process.argv);
var address = program.args[0]
var send_nodes_count = program.args[1]

// The path to your local Qtum node via RPC
const rpcAddress = 'http://test:test1234@127.0.0.1:13889'
const qClient = new Qweb3('http://test:test1234@127.0.0.1:13889')
// qClient.getBlockchainInfo().then(console.log)
// contractAddress = The address of your contract deployed on the blockchain
const contractAddress = '0x4b522ef3f01fafb6bd7ba7a8414f1461158cc31a';

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
contract.send('transfer', {
    methodArgs: ['qLfP2Sy3tcqMUEE7LrBrrhC5WBcMtJn3GA', Number(send_nodes_count)*100000000],
    senderAddress: program.address,
  }).then(console.log);


