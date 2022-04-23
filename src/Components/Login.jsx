import React from 'react'
import NavBar from './NavBar'
import "./Login.css"

const Login = () => {
  return (
    <div>
        <NavBar />
        <div className="top-login">
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Please Login to Your Account</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">First name</label>
                </div>
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
                    <button type="text" class="submit">Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Login