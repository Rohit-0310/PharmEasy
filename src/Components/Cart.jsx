import React from 'react'
import "./Cart.css";
import NavBar from './NavBar';

const Cart = () => {

  console.log("Cart")
  return (
    <div>
      <NavBar />
      <div className="cart-main">This is My Cart Page</div>
    </div>
  )
}


export default Cart;