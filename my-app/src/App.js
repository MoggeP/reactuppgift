import React, { useState } from "react"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/Product';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

function App() {

  




  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Product />} />
      <Route path="/product" element={<Product />} />
     
    </Routes>
    <Footer />    
  </BrowserRouter>,
  </div>
  );
}

export default App;
