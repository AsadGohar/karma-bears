import React from 'react';
// import Test from './abis/Test.json'
// import Web3 from 'web3'
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar'
import Admin from './components/Admin/Admin';
import Mint from './components/Mint/Mint';
import Gallery from './components/NFT Gallery/Gallery';
import './App.css'; 

function App() {

  return (
    <div >
      <Router>
        <Navbar/>
        <ToastContainer />
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
