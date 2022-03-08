import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css'
import { FaShoppingBag } from 'react-icons/fa'
import { MdFace } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { Home } from '@material-ui/icons';
import Cart from './Cart';


function Header({cartItems, setCartItems, countCartItems, summary, deleteCart}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
        <div className="navbar">
          <div className="main-navbar">
            <Link to="/" className='navbar_link'><p>Products</p></Link>
            </div>

            <div className="cart-sidebar"> 
              {countCartItems ? (
                <button className='countBtn'>{countCartItems}</button>
              ) : 
                ''
              }
              <button onClick={() => {setOpen(true)}}>< FaShoppingBag/></button>
              </div>
            
            <Cart
             cartItems={cartItems}
             setCartItems={setCartItems}
             open = {open}
             setOpen = {setOpen}
             summary={summary}
             deleteCart={deleteCart}
            />
          

        </div>

    </div>
  )
}

export default Header