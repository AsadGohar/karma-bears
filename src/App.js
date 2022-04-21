import React from 'react';
// import Test from './abis/Test.json'
// import Web3 from 'web3'
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar'
import Admin from './components/Admin/Admin';
import Mint from './components/Mint/Mint';
import Gallery from './components/NFT Gallery/Gallery';

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

  return (
    <div >
      <Router>
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/admin" element={<Admin />} exact />
          <Route path="/mint" element={<Mint />} exact />
          <Route path="/gallery" element={<Gallery />} exact />
        </Routes>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
