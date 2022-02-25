import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Cart() {
  return (
    <div><p>Cart</p>
    
     <div className='checkout'>
    <button className='checkout_btn'><Link to="./Checkout"> {<BsBagCheckFill/>} Checkout</Link></button>
    </div>
    </div>
    
  )
}

export default Cart