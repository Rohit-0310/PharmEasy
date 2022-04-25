import { Box, Button, Input } from '@mui/material'
import React, { useContext } from 'react'
import "./NavBar.css";
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import MoodIcon from '@mui/icons-material/Mood';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context/CartContext';

export default function NavBar() {

  const navigate = useNavigate()
  const { mycart, setmyCart } = useContext(CartContext);

  const navigateHCR = useNavigate()

  const hendleHealtcareProduct =() => {
    navigateHCR(`/HealtcareProduct`)
  }
  
  const handlCart = () =>{
    navigate("/Cart")
  }

  const handlLogin = () =>{
    navigate("/Login")
  }

  const handlSignup = () =>{
    navigate("/Signup")
  }
  
  const handlMain = (id)=>{
    navigate(`/`)
  }
  return (
    <Box className="top-main-nav" textAlign="center" style={{height: '130px', backgroundColor:"teal"}}>
      <div style={{padding: "15% 2% 2% 50%"}} >
        <img onClick={()=>handlMain()} width="200px" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="logo" />
      </div>
      <div>
          <div className="nav-search">
              <div>
                  <Input style={{width: '219px', backgroundColor:"white", paddingLeft: "15px"}} placeholder="Select Pincode"/>
              </div>|
              <div>
                    <Input margin="" style={{width: '750px',paddingLeft: "15px" ,backgroundColor:"white"}} fullWidth placeholder="Search medicines/Healthcare Products @18% Off"  id="fullWidth" />
              </div>
                <div>
                    <button style={{height: '49px',width:'50px', color: '#8e9ca7', backgroundColor:'#f4f7fb', border: 'none'}}>
                        <SearchIcon />
                    </button>
                </div>
          </div>


          <div className="main-nav">
                <div className="nav-1">
                    <Button>Order medicines</Button>
                    <Button onClick={()=>hendleHealtcareProduct()}>Healthcare Products</Button>
                    <Button >Lab Tests</Button>
                    <Button >RTPCR</Button>
                </div>
                <div className="nav-2">
                    <Button>
                    <img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="%" />
                      Offers</Button>
                    <span>
                      <img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="%" />
                      <Button onClick={()=>handlLogin()}>Login</Button>
                      <Button onClick={()=>handlSignup()}>Signup</Button>
                       </span>
                    <Button onClick={()=>handlCart()}>
                      <div className="nav-cart-update">
                        {mycart.length}
                      </div>
                    <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt='q' />
                       Cart</Button>
                </div>
          </div>
      </div>
    </Box>
  )
}

