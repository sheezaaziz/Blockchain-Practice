const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accts;
let inbox;

beforeEach(async () => {
  // get a list of all accts
  accts = await web3.eth.getAccounts();

  // use one of those accts to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accts[0], gas: '1000000' })
})

describe('Inbox', () => {
  it('deployed a contract', () => {
    console.log(inbox);
  });
})
