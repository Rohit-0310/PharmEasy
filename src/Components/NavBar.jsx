import { Box, TextField } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <Box style={{height: '130px', border:"2px solid black", backgroundColor:"teal"}}>
        <TextField margin="normal" style={{width: '650px', backgroundColor:"white"}} fullWidth placeholder="Search medicines/Healthcare Products @18% Off"  id="fullWidth" />
    </Box>
  )
}

