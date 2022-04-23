import React from 'react'
import "./Cart.css";
import NavBar from './NavBar';

const Cart = () => {

  console.log("Cart")
  return (
    <div>
      <NavBar />
      <div className="cart-main">
        <div>
          <div className="cart_checkout">
              <div className="cart-box">Cart Box</div>
              <div className="checkout-box">
                  <h5>Apply Coupon</h5>
                  <button className="cart-delevery">Add Delevery Addredd</button>
                  <div className="free-delevery">Free delevery with cart value above 500</div>

                  </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Cart;