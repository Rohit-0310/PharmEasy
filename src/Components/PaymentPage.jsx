import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PriceContext } from './Context/PriceContext'
import NavBar from './NavBar'
import "./PaymentPage.css"



const PaymentPage = () => {

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
        <NavBar />
        <div className="top_pay_background">
            <div className="pay_top">
            
            <div class="mainscreen">
                      <div class="card">
                        <div class="rightside">
                          <form action="">
                            {/* <h1>CheckOut</h1> */}
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
                        </div>
                      </div>
                    </div>
  





                    </div>
        </div>
    </div>
  )
}

export default PaymentPage