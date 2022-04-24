import React, { useState } from 'react'
import NavBar from './NavBar'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {



    const navigate = useNavigate();
  const [updateform, setUpdateform] = useState("");



  const Handlechange = (e) => {
    const { name, value } = e.target;
    setUpdateform({ ...updateform, [name]: value });
    // console.log(updateform);
  };




  
  const checkLogin = async (e) => {
    e.preventDefault();
    let cdata = await fetch("https://mydbpharma.herokuapp.com/register");
    let res = await cdata.json();
    // console.log(updateform);
    // console.log(res);

    res.filter((user) =>
      user.Email === updateform.Email || user.Password === updateform.Password
        ? navigate("/")
        : navigate("/Signup")
    );
  };


  return (
    <div>
        <NavBar />
        <div className="top-login">
        <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's create your account!</div>
                <div class="input-container ic2">
                    <input
                    name="Email"
                    onChange={Handlechange}
                    id="email" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email</label>
                </div>
                <div class="input-container ic2">
                    <input 
                    name="Password"
                    onChange={Handlechange}
                    id="password" class="input" type="password" placeholder=" " />
                    <div class="cut"></div>
                    <label for="password" class="placeholder">Password</label>
                </div>
                    <button 
                    onClick={checkLogin}
                    type="text" class="submit">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login