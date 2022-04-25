import { Box } from '@mui/system'
import React from 'react'
import "./Content.css";
import orderMedicine from "../IMG/OrderMedicine.png";
import LabTest from "../IMG/LabTest.png";
import Healthcare from "../IMG/HealthcareProduct.png";
import  EasyPlus from "../IMG/PharmEasyPlus1.png";


export default function Content() {
  return (
    <div className="content-top" >
        <Box className ="content-main">      
            <Box className="content-box">
              <img width = "100%" src={orderMedicine} alt="image1" />
            </Box>
            <Box className="content-box">
              <img width = "100%" src={Healthcare} alt="image3"/>
            </Box>
            <Box className="content-box">
              <img width = "100%" src={LabTest} alt="image2" />
            </Box>
        </Box>
        <div>
        <img width = "100%" src={EasyPlus} alt="image1" />
        </div>
    </div>
  )
}
