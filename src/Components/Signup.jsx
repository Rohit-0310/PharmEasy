import React from 'react'
import NavBar from './NavBar'
import "./Signup.css"

const Signup = () => {
  return (
    <div>
        <NavBar />
        <div className="top-signup">
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's create your account!</div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email</label>
                </div>
                <div class="input-container ic2">
                    <input id="password" class="input" type="password" placeholder=" " />
                    <div class="cut"></div>
                    <label for="password" class="placeholder">Password</label>
                </div>
                    <button type="text" class="submit">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Signup