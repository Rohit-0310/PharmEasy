import { Box } from '@mui/system'
import React from 'react'
import "./Content.css";

export default function Content() {
  return (
    <div className="content-top" >
        <Box className ="content-main">      
            <Box className="content-box">
              <img width = "150px" src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.25&q=100" alt="image1" />
            </Box>
            <Box className="content-box">
              <img width = "150px" src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.25&q=100" alt="image2" />
            </Box>
            <Box className="content-box">
              <img width = "150px" src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.25&q=100" alt="image3"/>
            </Box>
        </Box>
    </div>
  )
}
