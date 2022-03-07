import React from 'react'



function Cart(handleDeleteItems, product) {

  return (
    <div className='cart'>
    
    
    <div className='cart_container'>
      <h2>Shopping bag</h2>
      {}
         <div className='info'>
           <div className='img_cart'>
            <div>image</div>
           </div>
           <p>product.title</p>

           <div className='buyBtn_container'>
             <input type="number" min="0" max="10" placeholder='0'></input>
             
             <button>Buy now</button>
             <p>Qty: st</p>
             <p>Price: kr</p>


             <button>Checkout</button>
            </div>
            <button onClick={()=> handleDeleteItems(product)}>x</button>
          </div>
        </div>
    </div>
  )}


export default Cart;
