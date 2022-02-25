import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Header from './components/Header'
import Products from './pages/Products'
import Cart from './components/Cart'


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
