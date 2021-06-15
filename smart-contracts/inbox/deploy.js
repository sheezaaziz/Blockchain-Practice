const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'today link illness spend resist output couple recycle snap absurd permit skill',
  'https://rinkeby.infura.io/v3/9ee1dc36b1c8472e99e23b27b89eb93e'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['hi there!'] })
    .send({ gas: '1000000', from: accounts[0] })
  console.log('contract deployed to', result.options.address);
}

deploy();
