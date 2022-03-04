import React from 'react';


export default function Cart ({cartItems, handleDecreseItems, handleAddItems, handleDeleteItems}) {

  return (
    <Cart className='cart'>
    
      
      
      <div className='cart_bag'>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        
        {cartItems.map(product => (
          <div key={product.id} className='cartDetails'> 
            <div>{product.title}</div>
            <div className='cart_btns'>
              <button onClick={()=> handleAddItems(product)}>+</button>
              <button onClick={()=> handleDecreseItems(product)}>-</button>
            <p className='cart_summary'>{product.qty} x {product.price}</p>
            </div>
            <button onClick={()=> handleDeleteItems(product)}>x</button>
          </div>
          ))};
        </Cart>
  )}
