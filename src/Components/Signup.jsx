import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
import "./Signup.css"

const Signup = () => {


  const navigate = useNavigate();
  const [form, setForm] = useState("");

  const Handlechange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(value.length)
  };
  const Handleclick = (e) => {
    e.preventDefault();
    // console.log(form);

    fetch(`https://mydbpharma.herokuapp.com/register`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    setTimeout(() => {
      navigate("/Login");
    }, 3000);
  };

  const handlLogin = () =>{
    setTimeout(() => {
        navigate("/Login");
      }, 1000);
  }

//   const gotoLog = () => {
//     navigate("/login");
//   };

  return (
    <div>
        <NavBar />
        <div className="top-signup">
        <div className="singup_form">
                 <div className='wel_Login_btn'>
                    <div className="signup_title">Welcome</div>
                    <div><button onClick={()=>handlLogin()} className="Login_btn">Login</button></div>
                 </div>

                <div className="signup_subtitle">Let's create your account!</div>
                <div className="signup_input-container sn_ic1">
                    <input 
                    onChange={Handlechange} 
                    name="Name"
                    id="firstname" className="signup_input" type="text" placeholder=" " />
                    <div className="signup_cut"></div>
                    <label for="firstname" className="signup_placeholder">First name</label>
                </div>
                <div className="signup_input-container sn_ic2">
                    <input 
                    onChange={Handlechange}
                    name="Email"
                    id="email" className="signup_input" type="text" placeholder=" " />
                    <div className="signup_cut signup_cut-short"></div>
                    <label for="email" className="signup_placeholder">Email</label>
                </div>
                <div className="signup_input-container sn_ic2">
                    <input 
                    onChange={Handlechange}
                    name="Password"
                    id="password" className="signup_input" type="password" placeholder=" " />
                    <div className="signup_cut"></div>
                    <label for="password" className="signup_placeholder">Password</label>
                </div>
                    <button onClick={Handleclick} type="text" className="signup_submit">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Signup