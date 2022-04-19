import { TextField } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <div style={{height: '120px', border:"2px solid black"}}>
        <TextField margin="normal" style={{width: '700px'}}placeholder="Search medicines/Healthcare Products @18% Off" />
    </div>
  )
}

