import React from 'react';
import {Link} from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'

function Header() {
  return (
    <nav className='navbar'>
      <div className='nav-1'>
        <Link to="./Home">Home</Link> | <Link to="./Products">Products</Link> | <Link to="./About">About</Link>
     </div>
     <div className='nav-2'>
       <Link to="./Checkout">{<RiAdminFill/>}</Link>
       <Link to="./Cart">{<BsFillCartFill/>}</Link>
       <Link to="./Checkout">{<BsFillBookmarkHeartFill/>}</Link>
     </div>
    </nav>
  )
}

export default Header;