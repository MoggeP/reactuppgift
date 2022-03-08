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
          <div className='nav-1'><Link to="./" style={{padding: '10px'}}>{<Home/>}</Link></div>
          <div className="nav-2">
            <Link to="./" style={{padding: '10px'}}>PRODUCTS</Link>
            </div>

            <div className="cart-sidebar"> 
              {countCartItems ? (
                <button className='cart-summary'>{countCartItems}</button>
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