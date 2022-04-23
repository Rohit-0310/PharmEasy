import React from 'react'
import NavBar from './NavBar'
import "./Success.css"

const Success = () => {
  return (
    <div>
        <NavBar />
        <div>
            <div className="success-top">
            <div class="card">
                <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
                  <i class="checkmark">✓</i>
                </div>
                  <h1 class="success_h1">Success</h1> 
                  <p class="success_p">We received your purchase request;<br/> we'll be in touch shortly!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success