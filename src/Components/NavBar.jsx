import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import "./NavBar.css";
export default function NavBar() {
  return (
    <Box textAlign="center" style={{height: '130px', border:"2px solid black", backgroundColor:"teal"}}>
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
    </Box>
  )
}

