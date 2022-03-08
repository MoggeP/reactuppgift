import React from "react"
import '../style/cart.css'
import { TiDelete } from 'react-icons/ti';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Link } from "react-router-dom";



const CartItem = ({item, deleteItem}) => {
  const handleDeleteSingleItem = () => {
      deleteItem(item.id);
      } 

     

  return (
    <div>
        
          <section className="cart" key={item.id}>
            <div className='cart-body'>
              <img className="cart-img" src={item.url} alt={item.title}></img>

              <div className='cart-items'>
                <h3>{item.title}</h3>
                <h4>{item.price} SEK</h4>
                <button className='plusBtn'>+</button>
                <button className='minusBtn'>-</button>
              </div>
               <button onClick={handleDeleteSingleItem} className='delete-singleitem'><RiDeleteBin2Fill /></button>  
            </div>
          </section>
        
    </div>
  )
}


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

      <div className={`cart-openSidebar ${open && 'open'}`}>
        <div className='cart-header'>
          <h3>Shopping Bag</h3>
          <div className='closeSidebar' onClick={() => setOpen(!open)}><TiDelete /></div>
        </div>
        <div>{cartItems.length === 0 && <p className='emptyShoppingBag'>Your shopping bag is empty.</p>}</div>
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

        <div className='cart-summary'>
          <h3>TOTAL: {summary} SEK</h3>
          <Link to="/checkout"><button className='cart-checkout'>Checkout</button></Link>
          
        </div>
        <button onClick={handleDeleteCart} className='deleteCart'>Remove all</button>
      </div>

    </>
  )
  
}

export default Cart