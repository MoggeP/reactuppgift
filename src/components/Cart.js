import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import {Link} from 'react-router-dom'

function Cart({cartItems, handleAddToCart, handleDeleteFromCart, handleDecreseFromCart}) {

  return (
    
    <div className='cart_container'>
      {cartItems.map(product => (
         <div key={product.id} className='info'>
           <div className='img_cart'>
            <img src={product.url} alt={product.title}/>
           </div>
           <p className='title_cart'>{product.title}</p>

           <div buy_btn_container>
             <button onClick={() => handleAddToCart(product)} className='add_btn'>+</button>
             <button onClick={() => handleDecreseFromCart(product)} className='decrese_btn'>-</button>

             <button onClick={() => handleDeleteFromCart(product)} className='delete_btn'><Link to="../Cart"> {<RiDeleteBin2Fill/>} Buy now</Link></button>
             <p>Qty: {product.qty}st</p>
             <p>Price: {product.price} kr</p>


             <button className='cart_checkout_btn'><Link to="../Cart">Checkout</Link></button>
            </div>
          </div>
      ))}
  
  </div>
  )}


export default Cart;