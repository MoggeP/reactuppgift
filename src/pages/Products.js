import React from 'react';
import productsData from '../Data';
import {Link} from 'react-router-dom'
import { MdLocalGroceryStore} from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { IoInformationCircleSharp } from 'react-icons/io5'



export default function Products({ handleAddItems, handleProductCardDetails }) {

  return (
    <Products className='products-container'>
      {productsData.product.map((product) => (
        <div className='productCard'>
        <img className='productcardImg' src={product.url} alt={product.title}/>
          

        <div className='productcardDetails'>
          <Link to={product.id}> 
            <h3 className='productcardInfo'>{product.title}</h3></Link>
            <p className='productcardPrice'>{product.price} kr</p>
        <Link to="../Heart" className='like_btn' style={{color:'#a52a2a'}}>{<MdFavorite/>}</Link>
            <p className='productcardDesc'>{product.description}</p>
        </div>
        <div className='btns'>
          
          <button className='heart_btn'>
               <Link to="../Heart"> {<MdFavorite/>}</Link>
               </button>

             <button className='details_btn'>
               <Link to onClick={() => handleProductCardDetails(product.id)} className="details_btn">{<IoInformationCircleSharp/>}</Link>
               </button>

               
                 <Link to onClick={() => handleAddItems(product)} className="details_btn">{<MdLocalGroceryStore/>}</Link>

                 
               

                {/* <button onClick={()=> product(product.id)} className='checkout_btn'>{<MdLocalGroceryStore/>}</button> */}
              </div>
              </div>
                
              ))}

{/* <button className='checkout_btn'>
  <Link to="../Cart"> {<MdLocalGroceryStore/>}</Link>
 </button> */}
{/* </div>
<products key={product.id} product={product} addItems={handleAddItems}></products>
</div> */}
              </Products>
      )}

        
