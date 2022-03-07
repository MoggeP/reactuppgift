import React from 'react'

export function cart_summary(data) {
  return data.reduce((a, c) => a + c.price * c.qty, 0);
};

function Checkout() {
  return (
    <div>
      <p>Checkout</p>
    </div>
  )
}

export default Checkout