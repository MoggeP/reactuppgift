import React from "react"
import '../style/cart.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from "react-router-dom";
import CartItem from "./CartItem.js";




function Cart({ cartItems, setCartItems, open, setOpen, summary, deleteCart }) {

  const deleteOne = (id) => {
    let inCart = cartItems.filter(item => item.id !== id)

    setCartItems(inCart)

  }

   
  const handleDeleteCart = () => {
    deleteCart()
   }


  return (
    <>

      <div className={`cart-container ${open && 'open'}`}>
        <div className='cart-header'>
          <h2>ORDER SUMMARY</h2>
          <div className='closeBtn' onClick={() => setOpen(!open)}><FaWindowClose /></div>
        </div>
        <div>{cartItems.length === 0 && <h3 className='empty'>Cart is empty</h3>}</div>
        <div className="product-cart-container">
          {
            cartItems.map((item) =>
              <CartItem
                key={item.id}
                cartItems={cartItems}
                item={item}
                deleteOne={deleteOne}

              />
            )
          }
        </div>

        <div className='cart-footer'>
          <h3>TOTAL: {summary} SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>
          
        </div>
        <button onClick={handleDeleteCart} className='cart-delete'>Remove all</button>
      </div>

    </>
  )

}

export default Cart