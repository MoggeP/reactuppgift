import React from 'react'




function Cart() {
  return (
    <div>Cart</div>
  )
}

export default Cart;






// import { RiDeleteBin2Fill } from 'react-icons/ri';
// import {Link} from 'react-router-dom'

// function Cart({cartItems, handleAddToCart, handleDeleteFromCart, handleDecreseFromCart}) {

//   return (
    
//     <div className='cart_container'>
//       {cartItems.map(product => (
//          <div key={product.id} className='info'>
//            <div className='img_cart'>
//             <img src={product.url} alt={product.title}/>
//            </div>
//            <p className='title_cart'>{product.title}</p>

//            <div buy_btn_container>
//              <button onClick={() => handleAddToCart(product)} className='add_btn'>+</button>
//              <button onClick={() => handleDecreseFromCart(product)} className='decrese_btn'>-</button>
//              {/* <input type="number" min="1" max="10" placeholder="quantity"></input> */}


//              <button onClick={() => handleDeleteFromCart(product)} className='delete_btn'><Link to="../Cart"> {<RiDeleteBin2Fill/>} Buy now</Link></button>
//              <p>Qty: {product.qty}st</p>
//              <p>Price: {product.price} kr</p>


//              <button className='cart_checkout_btn'><Link to="../Checkout">Checkout</Link></button>
//             </div>
//           </div>
//       ))}
  
//   </div>
//   )}


// export default Cart;

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