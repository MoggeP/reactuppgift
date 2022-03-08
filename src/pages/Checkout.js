import React from 'react'
import '../style/checkout.css'

function Checkout({products}) {

  console.log(products)

  return (
   
      <div className='wrapper'>
        <div className='products'>
        {products.length < 1 ? 
          <div>
        <h3>Nothing here</h3> 
        </div>
        
        : 
        <div className='product'>

          <h3>You havent placed any products</h3>
          {products.map(i => (
            <table>
              <tr className='chekout-tr'>
            <td>{i.title}</td>
            <td><img src={i.url} alt="Img" className='chekout-Img'></img></td>
            <td>{i.price}</td>
            </tr>
            </table>
          
          ))}
        </div>
      }
        </div>
        <div className='paymnet'>
        <div className='chekout-in'>
        <h2>Payment Information</h2>
      </div>
    
      <div className='checkout-name checkout-input'>
        <label>First Name:</label>
        <input type='text' name='firstname' className='checkout-name' id='chekout-form' />
      </div>

      <div className='checkout-lastname checkout-input'>
        <label>Last Name:</label>
        <input type='text' name='lastname' className='checkout-lastname' id='chekout-form' />
      </div>

      <div className='checkout-phone checkout-input'>
        <label>Phone Number:</label>
        <input type='number' name='phonenumber' className='checkout-phone' id='chekout-form' />
      </div>

      <div className='checkout-email checkout-input'>
        <label>Email:</label>
        <input type='text' name='emailaddress' className='checkout-email' id='chekout-form' />
      </div>

      <div className='checkout-address checkout-input'>
        <label>Full Address:</label>
        <input type='text' name='address' className='checkout-address' id='chekout-form' />
      </div>

      <div className='checkout-city checkout-input'>
        <label>City:</label>
        <input type='text' name='city' className='checkout-city' id='chekout-form' />
      </div>

      <div className='checkout-zipcode checkout-input'>
        <label>Zip Code:</label>
        <input type='number' name='zipcode' className='checkout-zipcode' id='chekout-form' />


        <input type="submit" value="Complete" className='checkout-btn'></input>
      </div>
        </div>
      </div>
    

    
  )
}

export default Checkout;