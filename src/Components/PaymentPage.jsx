import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import "./PaymentPage.css"



const PaymentPage = () => {

    const navigate = useNavigate();

    const handleSuccess = (id)=>{
        navigate(`/Success`)
      }
  return (
    <div>
        <NavBar />
        <div className="top_pay_background">
            <div className="pay_top">
            
            <div class="mainscreen">
                    {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt="" /> */}
                      <div class="card">
                        {/* <div class="leftside">
                          <img
                            src="https://cdn01.pharmeasy.in/dam/products_otc/I04933/horlicks-womens-plus-chocolate-jar-400-g-2-1643882496.jpg"
                            class="product"
                            alt="Imag"
                          />
                        </div> */}
                        <div class="rightside">
                          <form action="">
                            <h1>CheckOut</h1>
                            <h2>Payment Information</h2>
                            <p>Cardholder Name</p>
                            <input type="text" class="inputbox" name="name" required />
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
                        </div>
                      </div>
                    </div>
  





                    </div>
        </div>
    </div>
  )
}

export default PaymentPage