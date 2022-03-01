import React from 'react';
import productsData from '../Data';
import {Link} from 'react-router-dom'
import { MdLocalGroceryStore} from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { IoInformationCircleSharp } from 'react-icons/io5'



function Products() {

  return (
    <div className='products-container'>
      {productsData.products.map((product) => (
    <div className='productCard'>
        <img className='productcardImg' src={product.url} alt={product.title}/>

        <div className='productcardDetails'>
            <h3 className='productcardInfo'>{product.title}</h3>
            <p className='productcardPrice'>{product.price} kr</p>
            <p className='productcardDesc'>{product.description}</p>
        </div>
        <div className='btns'>
          <button className='heart_btn'>
               <Link to="../Heart"> {<MdFavorite/>}</Link>
               </button>
             <button className='details_btn'>
               <Link to="../Product"> {<IoInformationCircleSharp/>}</Link>
               </button>
             <button className='checkout_btn'>
               <Link to="../Cart"> {<MdLocalGroceryStore/>}</Link>
               </button>
        </div>
      </div>
      )
      )
    }
    </div>
    
  )
}

export default Products;