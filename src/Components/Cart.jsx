import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCartData, removeCartData } from '../Redux/Cart/action';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./Cart.css";
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { PriceContext } from './Context/PriceContext';
import { Button } from '@mui/material';

const Cart = () => {

  const dispatchcart = useDispatch()
  const navigate = useNavigate()

  const {price, setPrice} = useContext(PriceContext);



  useEffect (() => {
    dispatchcart(getCartData())
    getMore()

  },[]);


  
  async function getMore() {
    let cdata = await fetch("https://mydbpharma.herokuapp.com/cart");
    let res = await cdata.json();
    console.log(res);

    let totalprice = 0;
    res.map((e) => (totalprice = e.dis_price + totalprice));
    setPrice(Math.round(totalprice));

    // setmyCart(res);
  }

  

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

  

  const handleDelete = async (id) => {
    let resp = await fetch(`https://mydbpharma.herokuapp.com/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getCartData();
    dispatchcart(removeCartData(id));
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
                            {/* <Button onclick={() => handleDelete(item.id)}>Delete</Button> */}
                            <div className="cart-delete" 
                            onclick={() => handleDelete(item.id)}
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
                <h5 className="order_summ_all">Apply Coupon</h5>
                <h4 className="order_summ_order">Order Summary</h4>
                <div className="Cart-Total-amount"> 
                    <p>Cart Value</p>
                    <p>  {"₹" + price}</p>
                </div>

                <div className="Cart-Total-amount"> 
                    <p>Delivery Charge</p>
                    <p><del style={{marginRight:"5px"}}>₹25.00</del> <span>Free</span></p>
                </div>


                <div className="Cart-Total-amount"> 
                    <h3>Amount to be paid</h3>
                    <h3>  {"₹" + price}</h3>
                </div>
                <div>
                    {/* Deleviry Address Start */}
                    <div>
                            <div className="delevery-form">
                                <div className="delevery-title">Add Your Address</div>
                                {/* <div class="subtitle">Let's create your account!</div> */}
                            <div class="del-input-container">
                                <input
                                name="Name"
                                // onChange={Handlechange}
                                id="email" className="del_input" type="text" placeholder=" " />
                                <div class="del-cut del-cut-short"></div>
                                <label for="email" class="placeholder">Bill To</label>
                            </div>
                            <div class="del-input-container">
                                <input 
                                name="Mobile No"
                                // onChange={Handlechange}
                                id="password" className="del_input" type="number" placeholder=" " />
                                <div class="del-cut"></div>
                                <label for="Mobile" class="placeholder">Mobile No.</label>
                            </div>

                            <div class="del-input-container">
                                <input 
                                name="Address"
                                // onChange={Handlechange}
                                id="password" className="del_input" type="text" placeholder=" " />
                                <div class="del-cut"></div>
                                <label for="Address" class="placeholder">Building Address</label>
                            </div>

                            <div class="del-input-container">
                                <input 
                                name="Pincode"
                                // onChange={Handlechange}
                                id="password" className="del_input" type="number" placeholder=" " />
                                <div class="del-cut"></div>
                                <label for="Pincode" class="placeholder">Pincode</label>
                            </div>
                                <button 
                                onClick={()=>handlePaymentPage()}
                                type="text" className="del_submit">Proceed To Buy</button>
                        </div>
                    </div>
                    {/* <button className="cart-delevery">Add Delevery Addredd</button> */}


                    {/* Delevery Address End */}
                </div>
                {/* <button className="cart-delevery"
                onClick={()=>handlePaymentPage()}
                >Proceed To Buy</button> */}
                <div className="free-delevery">Free delevery with cart value above 500</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Cart;