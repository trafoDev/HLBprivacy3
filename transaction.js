
//const web3 = require('web3');
//const Tx = require('ethereumjs-tx').Transaction;

//var myAddress = '0xf17f52151EbEF6C7334FAD080c5704D77216b732';
//var privateKey = Buffer.from('ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f', 'hex')
//var toAddress = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';
//var amount = web3.utils.toHex(1e16);


var eth = require('web3-eth');

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
//var eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');


// or using the web3 umbrella package

var web3 = require('web3');
//var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

// -> web3.eth

web3.eth.signTransaction({
    from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x3535353535353535353535353535353535353535',
    value: "1000000000000000000",
    data: ""
}).then(console.log);
/*
var rawTransaction = {"from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
			"to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
			"gas": "0x00",
			"gasPrice": "0x00",
			"value": "0x9184e72a",
			"chainId": "0x539",     
		// these are required!
			"v": "0x539", // chain id
    			"r": "0x00",
    			"s": "0x00"}
console.log(rawTransaction);
var transaction = new Tx(rawTransaction, 0x539);
            transaction.sign(privateKey);

console.log(transaction);
console.log('0x'+transaction.serialize().toString('hex'));

/*
//Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/YOUR_API_KEY"));

app.get('/sendtx',function(req,res){

        var myAddress = 'ADDRESS_THAT_SENDS_TRANSACTION';
        var privateKey = Buffer.from('YOUR_PRIVATE_KEY', 'hex')
        var toAddress = 'ADRESS_TO_SEND_TRANSACTION';

        //contract abi is the array that you can get from the ethereum wallet or etherscan
        var contractABI =YOUR_CONTRACT_ABI;
        var contractAddress ="YOUR_CONTRACT_ADDRESS";
        //creating contract object
        var contract = new web3js.eth.Contract(contractABI,contractAddress);

        var count;
        // get transaction count, later will used as nonce
        web3js.eth.getTransactionCount(myAddress).then(function(v){
            console.log("Count: "+v);
            count = v;
            var amount = web3js.utils.toHex(1e16);
            //creating raw tranaction
            var rawTransaction = {"from":myAddress, "gasPrice":web3js.utils.toHex(20* 1e9),"gasLimit":web3js.utils.toHex(210000),"to":contractAddress,"value":"0x0","data":contract.methods.transfer(toAddress, amount).encodeABI(),"nonce":web3js.utils.toHex(count)}
            console.log(rawTransaction);
            //creating tranaction via ethereumjs-tx
            var transaction = new Tx(rawTransaction);
            //signing transaction with private key
            transaction.sign(privateKey);
            //sending transacton via web3js module
            web3js.eth.sendSignedTransaction('0x'+transaction.serialize().toString('hex'))
            .on('transactionHash',console.log);
                
            contract.methods.balanceOf(myAddress).call()
            .then(function(balance){console.log(balance)});
        })
    });
app.listen(3000, () => console.log('Example app listening on port 3000!'))
view rawethereum-backend.js hosted with ? by GitHub
*/