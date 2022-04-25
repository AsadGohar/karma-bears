import Web3 from 'web3';
import KarmaBear from '../artifacts/KarmaBears.json'

export const web3Instance = new Web3(Web3.givenProvider || 
    'https://rinkeby.infura.io/v3/8f7bb415bf7b4dceb66c27ceea3bfb64','web3');

export const contract = new web3Instance.eth.Contract(KarmaBear.output.abi,
    '0x369153A761d19bCa87881cD01AabD480c2ED5018')  

export const isPaused = async () =>  { return contract.methods.paused().call()}


