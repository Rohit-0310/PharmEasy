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

//   const gotoLog = () => {
//     navigate("/login");
//   };

  return (
    <div>
        <NavBar />
        <div className="top-signup">
        <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Please Login to Your Account</div>
                <div class="input-container ic1">
                    <input 
                    onChange={Handlechange} 
                    name="Name"
                    id="firstname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">First name</label>
                </div>
                <div class="input-container ic2">
                    <input 
                    onChange={Handlechange}
                    name="Email"
                    id="email" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email</label>
                </div>
                <div class="input-container ic2">
                    <input 
                    onChange={Handlechange}
                    name="Password"
                    id="password" class="input" type="password" placeholder=" " />
                    <div class="cut"></div>
                    <label for="password" class="placeholder">Password</label>
                </div>
                    <button onClick={Handleclick} type="text" class="submit">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Signup