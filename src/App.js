import React from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
// import Test from './abis/Test.json'
// import Web3 from 'web3'
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQs/FAQ';
import OurTeam from './components/OurTeam/OurTeam';
import Timeline from './components/Timeline/Timeline';


function App() {

  const [tokenURI,setTokenUri] = React.useState('')

  const mint = async (e) => {
    e.preventDefault()

    // const web3 = new Web3(window.ethereum)
    // const accounts = await web3.eth.getAccounts();
    // const networkId = await web3.eth.net.getId();
    // const networkData = Test.networks[networkId];

    // const contract = new web3.eth.Contract(Test.abi,networkData.address)
    
    // let id = await contract.methods
    // .createToken(tokenURI)
    // .send({from:accounts[0]})
    // .on('receipt',(receipt)=>{
    //   console.log(receipt)
    // })
    // console.log(id)
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
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Timeline/>
      <OurTeam/>
      <FAQ/>
      <Footer/>
      {/* <div className='container'>
        <div className='row row-margin-0'>
          <div className='col' >
            <button onClick={connectMetamask} type="button" className="btn btn-outline-success">Metamask Connect</button>
          </div>
        </div>
        <div className='row row-margin-0 mt-3 justify-content-md-center'>
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
      </div> */}
    </div>
  );
}

export default App;
