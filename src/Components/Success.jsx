import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import "./Success.css"

const Success = () => {
    let number = Math.round(Math.random() *1000000000)

  const navigate = useNavigate()


    const handleHome = () =>{
        setTimeout(() => {
            navigate(`/`)            
          }, 2000);
    }
  return (
    <div>
        {/* <NavBar /> */}
        <div className="success_body">
            
                    <div class="container">
              <div class="printer-top"></div>

              <div class="paper-container">
                <div class="printer-bottom"></div>

                <div class="paper">
                  <div class="main-contents">
                    <div class="success-icon">&#10004;</div>
                    <div class="success-title">
                      Payment Complete
                    </div>
                    <div class="success-description">
                    Express Delivery Tomorrow before 2 PM
                    </div>
                    <div class="order-details">
                      <div class="order-number-label">Order Number</div>
                      <div class="order-number">{number}</div>
                    </div>
                    <div class="order-footer">Thank you!</div>
                  </div>
                  <div class="jagged-edge"></div>
                </div>
              </div>
            </div>
            <div className="Home_Button_div">
                <button type="submit" className="Home_Button" onClick={()=>handleHome()} >Home</button>
            </div>

            
        </div>
    </div>
  )
}

export default Success