import React from 'react';
import {Link} from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa'
import { MdFace } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'

function Header() {
  return (
    <nav className='navbar'>
      <div className='nav-1'>
        <Link to="./Home" style={{padding: '10px'}}>HOME</Link>
        <Link to="./Products" style={{padding: '10px'}}>PRODUCTS</Link>
        <Link to="./About" style={{padding: '10px'}}>ABOUT</Link>
     </div>
     <div className='nav-2'>
       <Link to="./Admin" style={{padding: '10px'}}>{<MdFace/>}</Link>

       <Link to="./Heart" style={{padding: '10px'}}>{<MdFavorite/>}</Link>

       <Link to="./Cart" style={{padding: '10px'}}>{<FaShoppingBag/>}</Link>
       
     </div>
    </nav>
  )
}

export default Header;