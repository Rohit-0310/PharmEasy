import { Checkbox } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PriceContext } from './Context/PriceContext'
// import NavBar from './NavBar'
import NavPay from './NavPay'
import "./PaymentPage.css"



const PaymentPage = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    const {price, setPrice} = useContext(PriceContext);

    useEffect (() => {
        getMore()
    },[])

    async function getMore() {
        let cdata = await fetch("https://mydbpharma.herokuapp.com/cart");
        let res = await cdata.json();
        console.log(res);
    
        let totalprice = 0;
        res.map((e) => (totalprice = e.dis_price + totalprice));
        setPrice(Math.round(totalprice).toFixed(2));
    
        // setmyCart(res);
      }

      const Handleclick = (event) => {
          console.log(event.target.value);
        //   if(event.target.value.length < 5){
        //     navigate("/PaymentPage")
        //   } else{
        //     navigate("/Success");
        //   }
      }
      



    const handleSuccess = (id)=>{
        setTimeout(() => {
            navigate("/Success");
          }, 3000);
      }
  return (
    <div>
        <NavPay />
        <div className="top_pay_background">
            <div className="pay_top">
            
            <div class="mainscreen">
                      <div class="card">

                        <div className="payment_top">
                            {/* Left-Side Payment*/}
                            
                        <div>
                            {/* 1. paytm */}
                          <div className="payment_offer">
                            <h1 className="payment_offer_h1">Offers</h1>
                            
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png" alt="PayTm" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">PayTm Wallet | Postpaid</h3>
                                    <p className="payment_wall_p">Get 4000 cashback points on minimum transaction of Rs.999. Offer applicable once per user.</p>
                                    <hr />
                                </div>
                                <div className="paymeny_check_box"><Checkbox /></div>
                            </div>
                          </div>

                          {/* 2 Amazon */}
                          <div className="payment_offer">
                            
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/amazonpay_new.png" alt="Amazon" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">Amazon Pay</h3>
                                    <p className="payment_wall_p">Get up to Rs.500 cashback on a minimum transaction of Rs.100 via Amazon Pay. Offer applicable once per user</p>
                                    <hr />
                                </div>
                                <div className="paymeny_check_box"><Checkbox /></div>
                            </div>
                          </div>


                          {/*3.  PhonePe */}
                          <div className="payment_offer">
                            
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/wallet_icons/phonepe.png" alt="Phonepe" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">PhonePe</h3>
                                    <p className="payment_wall_p">Get a scratch card and win up to Rs.1000 cashback on a minimum transaction of Rs.500 via PhonePe wallet only. Offer applicable once per user</p>
                                    <hr />
                                </div>
                                <div className="paymeny_check_box"><Checkbox /></div>
                            </div>
                          </div>


                          {/*4 MobiKwik */}
                          <div className="payment_offer">
                            
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png" alt="Mobikwik" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">MobiKwik</h3>
                                    <p className="payment_wall_p">Get up to Rs.500 cashback on a minimum transaction of Rs.750 via Mobikwik Wallet. Use code MBK500 on Mobikwik.</p>
                                    {/* <hr /> */}
                                </div>
                                <div className="paymeny_check_box"><Checkbox /></div>
                            </div>
                          </div>

                          <hr />


                          {/* Other Payment Methods */}
                          <div>
                              <h1 className="payment_offer_h1">Other Option</h1>


                              {/*1.  UPI */}
                          <div className="payment_offer">
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/upi.png" alt="https://cdn.pharmeasy.in/payments/upi.png" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">UPI</h3>

                                    <p className="payment_wall_IMG">
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png" alt="UPI" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png" alt="UPI" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png" alt="UPI" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeUpi.png" alt="UPI" />
                                        </p>
                                        <p style={{marginBottom:"-10px"}}>and more</p>
                                    </p>

                                    <hr />
                                </div>
                                <div className="paymeny_arrow_box">►</div>
                            </div>
                          </div>


                          {/*2.  Wallet */}
                          <div className="payment_offer">
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/wallet.png" alt="Wallet" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">Wallet</h3>

                                    <p className="payment_wall_IMG">
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/paytm.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/freecharge-wallet.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeUpi.png" alt="wallet" />
                                        </p>
                                        {/* <p style={{marginBottom:"-10px"}}>and more</p> */}
                                    </p>


                                    <hr />
                                </div>
                                <div className="paymeny_arrow_box">►</div>
                            </div>
                          </div>



                          {/*3.  Cradit/Debit Card */}
                          <div className="payment_offer">
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/card.png" alt="Cradit Card" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">Cradit Card</h3>
                                    <p className="payment_wall_p">Get flat Rs.250 cashback on a minimum transaction of Rs.2000 on ICICI Debit & Credit cards</p>
                                    <p className="payment_wall_p">Get flat Rs.150 discount on a minimum transaction of Rs.1500 on Onecard</p>
                                    <p className="payment_wall_p">Get flat Rs.150 discount on a minimum transaction of Rs.1500 on Jupiter</p>


                                    <p className="payment_wall_IMG">
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png" alt="wallet" />
                                        </p>
                                        <p>
                                            <img width="70%" src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png" alt="wallet" />
                                        </p>
                                        {/* <p style={{marginBottom:"-10px"}}>and more</p> */}
                                    </p>

                                    <div style={{borderBottom:"1px dotted #E0E0E0"}}></div>
                                    {/* <hr /> */}
                                </div>
                                <div className="paymeny_arrow_box">►</div>
                            </div>
                            <div>
                                         



                        <div style={{marginLeft:"10%",width:"80%"}}>
                                <p>Cardholder Name</p>
                                <input onChange={Handleclick} type="text" class="inputbox" name="name" required />
                                <p>Card Number</p>
                                        <input type="number" class="inputbox" name="card_number" id="card_number" required />

                                <p>Card Type</p>
                                <select class="inputbox" name="card_type" id="card_type" required>
                                  <option value="">--Select a Card Type--</option>
                                  <option value="Visa">Visa</option>
                                  <option value="RuPay">RuPay</option>
                                  <option value="MasterCard">MasterCard</option>
                                </select>
                                    <div class="expcvv">

                                <p class="expcvv_text">Expiry</p>
                                        <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                                <p class="expcvv_text2">CVV</p>
                                <input type="password" class="inputbox" name="cvv" id="cvv" required />
                                </div>
                        </div>


<hr/>




                            </div>
                          </div>



                          {/*4.  Net Banking */}
                          <div className="payment_offer">
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://cdn.pharmeasy.in/payments/netbanking.png" alt="Net Banking" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">Net Banking</h3>
                                    <p className="payment_wall_p">We Support Over 100 banks</p>
                                    <hr />
                                </div>
                                <div className="paymeny_arrow_box">►</div>
                            </div>
                          </div>


                          {/*4.  Cash On Delevery */}
                          <div className="payment_offer">
                            <div className="payment_paytm">
                                <div style={{padding:"8px"}}><img width="100%" src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png" alt="Cash On delevery" /></div>
                                <div className="paym_head">
                                    <h3 className="payment_wall">Cash On Delevery</h3>
                                    <p className="payment_wall_p">Pay via Cash/UPI at the time of delivery</p>
                                    <hr />
                                </div>
                                <div className="paymeny_check_box"><Checkbox /></div>
                            </div>
                          </div>

                    <div className="order_place_btn">
                          <button type="submit" className="button" onClick={()=>handleSuccess()} >Place Order</button>
                    </div>



                          </div>




                        </div>




                          {/* Right-Side */}
                          <div className="payment_breakdown">
                            <div className="payment_wallet">
                              <div>
                                  <img src="https://assets.pharmeasy.in/web-assets/dist/9abb1d25.svg" alt="s" />
                              </div>
                              <div className="payment_wallet_tc">
                                <h5 >PharmEasy Wallet</h5>
                                <p>T&C Apply</p>
                              </div>
                              <div><Checkbox {...label} defaultChecked color="success" /></div>
                            </div>

                            <div>
                                <h4 style={{marginBottom:"-5px"}}>Price Breakdown</h4>
                                <div class="payment_total">
                                    <p>Cart Value</p>
                                    <p>  {"₹" + price}</p>
                                </div>
                                <div class="payment_total">
                                    <p>Delivery Charge</p>
                                    <p><del>₹ 25</del> Free</p>
                                </div>
                                <div class="payment_border_line"></div>
                                <div class="payment_total">
                                    <h4>Amount to be paid </h4>
                                    <h4>  {"₹" + price}</h4>
                                </div>
                                <div className="order_place_btn">
                                        <button style={{width:"100%"}} type="submit" className="button" onClick={()=>handleSuccess()} >Place Order</button>
                                </div>
                            </div>

                            
                          </div>
                        </div>










                        {/* <div class="rightside">
                          <form action="">
                            <h2>Payment Information :-</h2>
                            <div class="payment_total">
                                <h3>Amount to be paid :-</h3>
                                <h3>  {"₹" + price}</h3>
                            </div>
                            <hr />
                            <p>Cardholder Name</p>
                            <input onChange={Handleclick} type="text" class="inputbox" name="name" required />
                            <p>Card Number</p>
                                    <input type="number" class="inputbox" name="card_number" id="card_number" required />

                            <p>Card Type</p>
                            <select class="inputbox" name="card_type" id="card_type" required>
                              <option value="">--Select a Card Type--</option>
                              <option value="Visa">Visa</option>
                              <option value="RuPay">RuPay</option>
                              <option value="MasterCard">MasterCard</option>
                            </select>
                                <div class="expcvv">

                            <p class="expcvv_text">Expiry</p>
                                    <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                            <p class="expcvv_text2">CVV</p>
                            <input type="password" class="inputbox" name="cvv" id="cvv" required />
                        </div>
                            <p></p>
                            <button type="submit" class="button" onClick={()=>handleSuccess()} >CheckOut</button>
                          </form>
                        </div> */}
              </div>
            </div>
  





                    </div>
        </div>
    </div>
  )
}

export default PaymentPage