import '../style/product.css'
import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Product({ addProduct }) {
  const [product, setproduct] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php?id=' + params.id);
      const data = await response.json();
      console.log(data)

      setproduct(data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    fetchData();
  }, []);

  const handleClick = (product) => {
    addProduct(product)
  }



  return (
    <section key={product.id} className='product-add'>
    <img className='img-add' alt='prodImage' src={product.url}></img>
    <h1 className='title-add'>{product.title}</h1>
    <p className='desc-add'>{product.description}</p>
    <h2 className='price-add'>Price:{product.price}</h2>
    <h3 className='storage-add'>Storage:{product.storage}</h3>
    <button onClick={() => handleClick(product)}>Add to Cart</button>
   </section>
  )
}

export default Product