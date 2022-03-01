import React from 'react'
import productsData from '../Data';

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
            <button className='addtoCart'>Button</button>
      </div>
      )
      )
    }
    </div>
    
  )
}

export default Products