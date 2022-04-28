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
            <div className="login_form">
                <div className="login_title">Welcome</div>
                <div className="login_subtitle">Please Login to Your Account</div>
                <div className="login_input-container login_ic2">
                    <input
                    name="Email"
                    onChange={Handlechange}
                    id="email" className="login_input" type="text" placeholder=" " />
                    <div className="login_cut login_cut-short"></div>
                    <label for="email" className="login_placeholder">Email</label>
                </div>
                <div className="login_input-container login_ic2">
                    <input 
                    name="Password"
                    onChange={Handlechange}
                    id="password" className="login_input" type="password" placeholder=" " />
                    <div className="login_cut"></div>
                    <label for="password" className="login_placeholder">Password</label>
                </div>
                    <button 
                    onClick={checkLogin}
                    type="text" className="login_submit">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login