import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import "./NavBar.css";
export default function NavBar() {
  return (
    <Box className="top-main-nav" textAlign="center" style={{height: '130px', border:"2px solid black", backgroundColor:"teal"}}>
      <div style={{padding: "15% 2% 2% 50%"}}>
        <img width="200px" src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="logo" />
      </div>
      <div style={{marginLeft: "-20%"}}>

        <TextField margin="normal" style={{width: '650px', backgroundColor:"white"}} fullWidth placeholder="Search medicines/Healthcare Products @18% Off"  id="fullWidth" />


          <div className="main-nav">
                <div className="nav-1">
                    <Button>Order medicines</Button>
                    <Button >Healthcare Products</Button>
                    <Button >Lab Tests</Button>
                    <Button >RTPCR</Button>
                </div>
                <div className="nav-2">
                    <Button>Offers</Button>
                    <Button>Login/Signup</Button>
                    <Button>Cart</Button>
                </div>
          </div>
      </div>
    </Box>
  )
}

