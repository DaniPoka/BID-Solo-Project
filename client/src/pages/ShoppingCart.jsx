import React from 'react';



const ShoppingCart = () => {


  const quantity = 0;

  const totalPrice = 0;

  return (
    <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
      <div>
        <h1>Items in cart: {quantity}</h1>
        <h1>Total: ${totalPrice}</h1>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart
