import { Box, Button, Input } from '@mui/material'
import React from 'react'
import "./NavBar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MoodIcon from '@mui/icons-material/Mood';

export default function NavBar() {
  return (
    <Box className="top-main-nav" textAlign="center" style={{height: '130px', border:"2px solid black", backgroundColor:"teal"}}>
      <div style={{padding: "15% 2% 2% 50%"}}>
        <img width="200px" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="logo" />
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
                    <Button >Healthcare Products</Button>
                    <Button >Lab Tests</Button>
                    <Button >RTPCR</Button>
                </div>
                <div className="nav-2">
                    <Button>
                    <img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="%" />
                      Offers</Button>
                    <Button>
                      <img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="%" />
                       Login/Signup</Button>
                    <Button>
                    <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt='q' />
                       Cart</Button>
                </div>
          </div>
      </div>
    </Box>
  )
}

