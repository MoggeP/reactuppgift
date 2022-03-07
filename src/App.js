import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Products from './pages/Products'
import Cart from './components/Cart'
import Footer from './components/Footer';

//import Product from './pages/Product'
//import Data from './Data'
//import Checkout from './pages/Checkout'
// import Admin from './pages/Admin'





function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php');
      const data = await response.json();

      setProducts(data);
    } catch (error) {

    }
  };

  const handleProductDetails = (id) => {
    const oneProduct = products.find(x => x.id === id)
    setProduct(oneProduct);
  }
  const handleAddToCart = (product) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  const handleDecreaseQty = (product) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : x));
    }
  }
  const handleDeleteFromCart = (product) => {
    const newCartItems = cartItems.filter((x => x.id !== product.id))
    setCartItems(newCartItems);
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header cartItems={cartItems} />
        
    <Routes>

       
     

        <Route path="/products" element={<Products handleProductDetails={handleProductDetails} products={products} />}></Route>

          <Route path="/products/:id" element={<Products handleAddToCart={handleAddToCart} product={product} />}></Route>

          <Route path="/Cart" element={<Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecreaseQty={handleDecreaseQty} handleDeleteFromCart={handleDeleteFromCart} />}></Route>
          
        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
