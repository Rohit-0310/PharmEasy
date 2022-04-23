import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCartData } from '../Redux/Cart/action';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./Cart.css";
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const dispatchcart = useDispatch()
  const navigate = useNavigate()

  useEffect (() => {
    dispatchcart(getCartData())

  },[]);

  // const handleProduct = (id)=>{
  //   navigate(`/Products/${id}`)
  // }


  const handlePaymentPage = (id)=>{
      navigate(`/PaymentPage`)
    }
  // const data = useSelector((state)=>state.cartState.showCart)
  const data = useSelector((state)=>state.cartState.showCart)
/*
    fetch(`https://mydbpharma.herokuapp.com/cart`, {
          method: "POST",
          body: JSON.stringify(itemid),
          headers: {
            "content-type": "application/json",
          },
        }).then(() => {
          getMore();
        });
    
  }*/

  const handleDelete = async (item) => {
    fetch(`https://mydbpharma.herokuapp.com/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getCartData();
    });
    console.log(item)
  };

  console.log(data)

  return (
    <div>
      <NavBar />
      <div className="cart-main">
        <div>
          <h2 style={{marginLeft:"10px", marginBottom:"-30px"}}>{data.length} Items In Cart</h2>
          <div className="cart_checkout">
            <div>
            {
              data.map((item,i) =>(
                
                <div className="cart-box" 
                // onClick={()=>handleProduct(item.categoryId)}
                >
                    <div className="cart-image">
                        <img  src={item.img} alt={item.title} />
                    </div>
                    <div className="cart-title">
                        <div className="delete_title">
                            <div>
                                <h5>{item.title}</h5>
                            </div>
                            <div className="cart-delete" 
                            onclick={() => handleDelete(item)}
                            >
                                <img src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg" alt="delete" />
                            </div>
                        </div>
                        <div className="cart_brand_price">
                            <p className="cart_brand">By {item.brand}</p>
                            <p>
                                <p className="cart_brand_discount">
                                    <p className="cart_discount">{item.discount}OFF</p>
                                    <p><del>{item.price}</del></p>
                                </p>
                                <p className="cart_price">₹ {item.dis_price}</p>
                            </p>

                        </div>
                        <div className="cart_product_time">
                            <p><FlashOnIcon className="cart_pro_flash" /></p>
                            <p>Express Delivery<span>Tomorrow before 2 PM</span> </p>
                        </div>
                    </div>
                </div>

              ))
            }
            </div>

            <div className="checkout-box">
                <h5>Apply Coupon</h5>
                <button className="cart-delevery">Add Delevery Addredd</button>
                <button className="cart-delevery"
                onClick={()=>handlePaymentPage()}
                >Proceed To Buy</button>
                <div className="free-delevery">Free delevery with cart value above 500</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Cart;