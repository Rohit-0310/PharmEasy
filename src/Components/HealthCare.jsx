import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHCRData, sortLow } from "../Redux/HealtcareProduct/action";
import "./HealthCare.css"
import NavBar from "./NavBar";

const HealthCare = () => {
  
  const navigate = useNavigate()
  const navigate_to_one = useNavigate()


  const dispatch = useDispatch()


  useEffect (() => {
    dispatch(getHCRData())

  },[]);
  const data = useSelector((state)=>state.HealthCareState.healthCareProduct)
  console.log(data)



  const low = async () =>{
    dispatch(sortLow())
    
  }

  const high = async () =>{
    await fetch(
      `http://localhost:3001/Products`
    )
    .then((d)=>d.json())
    .then((res)=>{
      let result = res.sort((a,b)=>{
        return b.dis_price - a.dis_price
      })
      getHCRData(result)
    })
    
  }


  const none = async () =>{
    await fetch(
      `http://localhost:3001/Products`
    )
    .then((d)=>d.json())
    .then((res)=>{
      let result = res.sort((a,b)=>{
        return a.id - b.id
      })
      getHCRData(result)
    })
    
  }




  const One_product_details = (onedId) => {
    navigate_to_one(`/Products/ProductDetails/${onedId}`)
  }
  

  const handleHome = () =>{
    navigate(`/`)
}

  return (
    <div>
      <NavBar />
        <p className="nav_to_Home">
                <Button onClick={()=>handleHome()}>Home</Button>  
        </p>
        <p className="sort">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort By</InputLabel>
                  <Select label="Sort By"
                    labelId="demo-select-small"
                    id="demo-select-small">
                    <MenuItem
                     value="None" onClick={none}>None
                      
                    </MenuItem>
                    <MenuItem value="Low To High" onClick={low}>Low To High</MenuItem>
                    <MenuItem value="High To Low" onClick={high}>High To Low</MenuItem>
                  </Select>
            </FormControl>
        </p>


      <div className="HRC_main">{
          data.map((items, i) =>(
            <div>
                  <div className="HRC_box" key={i} 
                  onClick={() =>One_product_details(items.id)} 
                  >
                    <div>
                        <img  src={items.img} alt={items.title} />
                    </div>

                        <div>{items.id}</div>
                        <h3>{items.title}</h3>
                        <div className="price">
                            <h5 className="MRP">MRP <del>{items.price}</del></h5>
                            <h6 className="HRC_Card_discount">{items.discount}OFF</h6>
                        </div>
                        <h4>₹ {items.dis_price}</h4>

                  </div>
              </div>
          ))
        }
      </div>
    </div>
  
  );
};

export default HealthCare;
