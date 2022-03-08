import React from 'react'
import { FaTrash } from 'react-icons/fa';

function CartItem({item, deleteItem}) {

    const handleDeleteAllFromCart = () => {
    
        deleteItem(item.id);
        console.log(handleDeleteAllFromCart);
    
      } 

     

  return (
    <div>
        
          <section className="cart-section" key={item.id}>
            <div className='cart-body'>
              <img className="cart-img" src={item.url} alt={item.title}></img>

              <div className='cart-items'>
                <h3>{item.title}</h3>
                <h4>{item.price} SEK</h4>
                <button className='plusBtn'>+</button>
                <button className='minusBtn'>-</button>
              </div>
               <button onClick={handleDeleteAllFromCart} className='cart-trash'><FaTrash /></button>  
            </div>
          </section>
        
    </div>
  )
}

export default CartItem