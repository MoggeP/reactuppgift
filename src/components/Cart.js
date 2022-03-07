import React from 'react'



function Cart() {

  return (
    
    
    <div className='cart_container'>
      <h2>Shopping bag</h2>
      {}
         <div className='info'>
           <div className='img_cart'>
            <div>image</div>
           </div>
           <p>product.title</p>

           <div className='buyBtn_container'>
             <input type="number" min="1" max="10" placeholder="quantity"></input>


             <button>Buy now</button>
             <p>Qty: st</p>
             <p>Price: kr</p>


             <button>Checkout</button>
            </div>
          </div>
        </div>
  )}


export default Cart;

// function Cart({ products, setProducts, cartItems, handleAddToCart }) {

//   const handleDecreseFromCart= (id) => {
//     let inCart = products.filter(item => item.id !== id)
//     setProducts(inCart)
//   }

   
//   const handleDeleteFromCart = () => {
//     deleteAll()
//    }

//     return (
//         <div>
//             {cartItems.map(products => (
//                 <div key={products.id} className='cart-info'>
//                     <div>
//                         <img src={products.image} alt={products.name} />
//                     </div>
//                     <p>{products.name}</p>
//                     <div>
//                         <button onClick={() => handleDecreseFromCart(products)} className='btn-decrease'>-</button>
//                         <p>{products.qty}</p>
//                         <button onClick={() => handleAddToCart(products)} className='btn-increse'>+</button>
//                     </div>
//                     <p>{products.price} kr</p>
//                     <button onClick={() => handleDeleteFromCart(products)} className='btn-remove'>x</button>
//                 </div>
//             ))}

//         </div>
//     )
// }
// export default Cart;