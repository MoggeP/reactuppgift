import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../style/products.css'


function Products({ addProduct }) {
  const [products, setproducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/electronics.php');
      const data = await response.json();

      setproducts(data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleClick = (product) => {
    addProduct(product)
    console.log(product);
  }

  


  return (
    <div className="products-container">
      {
        products.map(product => (
          <section key={product.id}className="section">
            <Link to={`/product/${product.id}`}> <img className="img" src={product.url} alt={product.title}></img></Link>
            <h2>{product.title}</h2>
            <h4>{product.price} SEK</h4>
            <input type="number" min="1" max="10" placeholder="quantity"></input>
            <button onClick={() => {handleClick(product)}}>Add to Cart</button>


          </section>
        )

        )
      }
    </div>
  )
}

export default Products