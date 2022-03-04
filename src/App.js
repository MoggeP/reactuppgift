import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Products from './pages/Products'
import Cart from './components/Cart'
import Home from './pages/Home'
//import Product from './pages/Product'
//import Data from './Data'
//import Checkout from './pages/Checkout'
// import About from './pages/About'
// import Heart from './pages/Heart'
// import Admin from './pages/Admin'





function App() {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  
  const getProducts = async () => {
    const data = await fetch('/Data/product');
    const productsJSON = await data.json();
    setProducts(productsJSON.product);
    return productsJSON.product;
  };
  
  const handleProductCardDetails = (id) => {
  const oneItem = product.find(x => x.id === id)
  setProduct(oneItem);
};
  

const handleAddItems = (product) => {
  const existProd = cartItems.find(x => x.id === product.id);
  if(existProd) {
    setCartItems(cartItems.map(x => x.id === product.id ? { ...existProd, qty: existProd.qty + 1} : x)
    );
  } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
};

const handleDecreseItems = (product) => {
  const existProd = cartItems.find(x => x.id === product.id);
  if(existProd.qty === 1) {
    setCartItems(cartItems.filter(x => x.id !== product.id));
  } else {
    setCartItems(cartItems.map(x => x.id === product.id ? { ...existProd, qty: existProd.qty - 1} : x));
  }
};

 const handleDeleteItems = (product) => {
    const newCartItems = cartItems.filter((x => x.id !== product.id))
    setCartItems(newCartItems);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // const handleClick  = (products) => {
  //   addProduct(products)
  // }



  return (
        

    <div className='App'>
<BrowserRouter>
        <Header />
          <nav cartItems={cartItems} />
        <Routes>
  
  <Route path='/Home' element={<Home/>}/>
  
  <Route path="/Product"> <Products handleProductCardDetails={handleProductCardDetails} product={product}></Products></Route>
  
  <Route path="/Product/:id"> <Products handleAddItems={handleAddItems} products={products}></Products></Route>

  
  <Route path="/Cart"><Cart cartItems={cartItems} handleAddItems={handleAddItems} handleDecreaseItems={handleDecreseItems} handleDeleteItems={handleDeleteItems}></Cart></Route>

          {/* <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          {/* <Route path='/About' element={<About/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/Heart' element={<Heart/>}/>
          <Route path='/Cart/Checkout' element={<Checkout/>}/> */}
        </Routes>
      </BrowserRouter>
      </div>


)
    };

export default App;
