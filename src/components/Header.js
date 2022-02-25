import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar'>
      <div className='nav-1'>
        <Link to="./Home">Home</Link> | <Link to="./Products">Products</Link> | <Link to="./About">About</Link>
     </div>
     <div className='nav-2'>
       <Link to="./Cart">Cart</Link> | <Link to="./Checkout">Checkout</Link>
     </div>
    </nav>
  )
}

export default Header;