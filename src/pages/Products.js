import React from 'react';
import productsData from '../Data';
import {Link} from 'react-router-dom'
import { MdLocalGroceryStore} from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { IoInformationCircleSharp } from 'react-icons/io5'



function Products({handleAddToCart}) {
  
  const handleClick = (product) => {
    handleAddToCart(product.id)
}

  return (
    <div className='products-container'>
      {productsData.productsData.map((product) => (
    <div key={product.id} className='productCard'>
        <img className='productcardImg' src={product.url} alt={product.title}/>
          

        <div className='productcardDetails'>
          <Link to={product.id}> 
            <h3 className='productcardInfo'>{product.title}</h3></Link>
            <p className='productcardPrice'>{product.price} kr</p>
        <Link to="../Heart" className='like_btn' style={{color:'#a52a2a'}}>{<MdFavorite/>}</Link>
            <p className='productcardDesc'>{product.description}</p>
        </div>
        <div className='btns'>
             <button className='details_btn'>
               <Link to="../Product"> {<IoInformationCircleSharp/>}</Link>
               </button>
               <input type="number" min="0" max="10" className='inputProductQty'></input>
             <button className='checkout_btn'>
               <Link to onClick={() => {handleClick(product)}}>{<MdLocalGroceryStore/>}</Link></button>
               
        </div>
      </div>
      )
      )
    }
    </div>
    
  )
}

export default Products;