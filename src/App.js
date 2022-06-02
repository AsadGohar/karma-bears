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
import Navbar from './components/Navbar/Navbar'
import Admin from './components/Admin/Admin';
import Mint from './components/Mint/Mint';
import './App.css'; 
import Loading from './components/Loading/Loading';
import Gallery from './components/NFT Gallery/Gallery';

function App() {

  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    setTimeout(() => setLoading(false), 4000)
  },[])

  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <div >
      <Router>
        <Navbar/> 
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Mint />} exact />
          <Route path="/admin" element={<Admin />} exact />
          <Route path="/gallery" element={<Gallery/>} exact />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
