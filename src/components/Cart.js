import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import {Link} from 'react-router-dom'

function Cart({cartItems, handleAddToCart, handleDeleteFromCart, handleDecreseFromCart}) {

  return (
    
    <div className='cart_container'>
      {cartItems.map(addedProduct => (
         <div key={addedProduct.id} className='info'>
           <div className='img_cart'>
            <img src={addedProduct.url} alt={addedProduct.title}/>
           </div>
           <p className='title_cart'>{addedProduct.title}</p>

           <div buy_btn_container>
             <button onClick={() => handleAddToCart(addedProduct)} className='add_btn'>+</button>
             <button onClick={() => handleDecreseFromCart(addedProduct)} className='decrese_btn'>-</button>
             {/* <input type="number" min="1" max="10" placeholder="quantity"></input> */}


             <button onClick={() => handleDeleteFromCart(addedProduct)} className='delete_btn'><Link to="../Cart"> {<RiDeleteBin2Fill/>} Buy now</Link></button>
             <p>Qty: {addedProduct.qty}st</p>
             <p>Price: {addedProduct.price} kr</p>


             <button className='cart_checkout_btn'><Link to="../Checkout">Checkout</Link></button>
            </div>
          </div>
      ))}
  
  </div>
  )}


export default Cart;