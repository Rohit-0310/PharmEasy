import React, { useState } from "react";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import {  Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

// import { getProductData } from "../Redux/Product/action";
import "./Product.css"

const Products = () => {
  const [dispro, setDispro] = useState([])
  const prams = useParams()

  const navigate_to_one = useNavigate()
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  useEffect(() => {
    const itemData = async () => {
      let result = await fetch(
        `https://mydbpharma.herokuapp.com/Products?categoryId=${prams.id}`
      );
      let res = await result.json();
      // console.log(res);
      // setProddetails(res);
      setDispro(res)
    };
    itemData();
  }, []);


  const low = async () =>{
    await fetch(
      `https://mydbpharma.herokuapp.com/Products?categoryId=${prams.id}`
    )
    .then((d)=>d.json())
    .then((res)=>{
      let result = res.sort((a,b)=>{
        return a.dis_price - b.dis_price
      })
      setDispro(result)
    })
    
  }

  const high = async () =>{
    await fetch(
      `https://mydbpharma.herokuapp.com/Products?categoryId=${prams.id}`
    )
    .then((d)=>d.json())
    .then((res)=>{
      let result = res.sort((a,b)=>{
        return b.dis_price - a.dis_price
      })
      setDispro(result)
    })
    
  }


  const none = async () =>{
    await fetch(
      `https://mydbpharma.herokuapp.com/Products?categoryId=${prams.id}`
    )
    .then((d)=>d.json())
    .then((res)=>{
      let result = res.sort((a,b)=>{
        return a.id - b.id
      })
      setDispro(result)
    })
    
  }





  console.log(dispro);
  // useEffect (() => {
  //   dispatch(getProductData())

  // },[]);

  // const data = useSelector((state)=>state.productState.showProduct)
  // console.log(data)
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
              <MenuItem value="None" onClick={none}>None
                {/* <em>None</em> */}
              </MenuItem>
              <MenuItem value="Low To High" onClick={low}>Low To High</MenuItem>
              <MenuItem value="High To Low" onClick={high}>High To Low</MenuItem>
            </Select>
      </FormControl>


{/* 
        <Button onClick={low}>Low To High</Button>
        <Button onClick={high}>High To Low</Button> */}
      </p>
      <div className="product_main">{
            dispro.map((item, i) =>(
              <div>
                  <div className="product_box" key={i} onClick={() =>One_product_details(item.id)} >
                    <div>
                        <img  src={item.img} alt={item.title} />
                    </div>

                        {/* <div>{item.id}</div> */}
                        <h3>{item.title}</h3>
                        <div className="price">
                            <h5 className="MRP">MRP <del>{item.price}</del></h5>
                            <h6 className="ProductCard_discount">{item.discount}OFF</h6>
                        </div>
                        <h4>₹ {item.dis_price}</h4>

                  </div>
              </div>
            ))
        }
      </div>
    </div>
  
  );
};

export default Products;
