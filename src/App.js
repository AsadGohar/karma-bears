import React from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import Test from './abis/Test.json'
import Web3 from 'web3'
import './App.css'; 
function App() {

  const [tokenURI,setTokenUri] = React.useState('')

  const mint = async (e) => {
    e.preventDefault()

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = Test.networks[networkId];

    const contract = new web3.eth.Contract(Test.abi,networkData.address)
    
    let id = await contract.methods
    .createToken(tokenURI)
    .send({from:accounts[0]})
    .on('receipt',(receipt)=>{
      console.log(receipt)
    })
    console.log(id)
  }

  const connectMetamask = async (e) => {
    e.preventDefault()
    const provider = await detectEthereumProvider();
    if (provider) {
      const chainId = await provider.request({
        method: 'eth_requestAccounts'
      })
    } else {
      console.log('Please install MetaMask!');
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <div className='col' >
              <button onClick={connectMetamask} type="button" className="btn btn-outline-success">Metamask Connect</button>
            </div>
          </div>
          <div className='row mt-3 justify-content-md-center'>
            <div className='col-6' >
            <form>
              <div className="form-group">
                <label >Token URI</label>
                <input onChange={e=>{
                  setTokenUri(e.target.value)
                }}  type="text" className="form-control"  placeholder=""/>
              </div>
              <button onClick={mint} type="button" className="btn btn-outline-warning">Mint</button>
            </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
