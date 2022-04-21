import React, { useState } from "react";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  Button } from '@mui/material'

// import { getProductData } from "../Redux/Product/action";
import "./Product.css"

const Products = () => {
  const [dispro, setDispro] = useState([])
  const prams = useParams()

  const navigate_to_one = useNavigate()
  // const dispatch = useDispatch()
  useEffect(() => {
    const itemData = async () => {
      let result = await fetch(
        `http://localhost:3001/Products?categoryId=${prams.id}`
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
      `http://localhost:3001/Products?categoryId=${prams.id}`
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
      `http://localhost:3001/Products?categoryId=${prams.id}`
    )
    .then((d)=>d.json())
    .then((res)=>{
      let result = res.sort((a,b)=>{
        return b.dis_price - a.dis_price
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
  

  return (
    <div>
      <div>
        <Button onClick={low}>Low To High</Button>
        <Button onClick={high}>High To Low</Button>

      </div>
      <div className="product_main">{
            dispro.map((item, i) =>(
              <div className="product_box" key={i} onClick={() =>One_product_details(item.id)} >
                <div>
                    <img  src={item.img} alt={item.title} />
                </div>
  
                    {/* <div>{item.id}</div> */}
                    <h3>{item.title}</h3>
                    <div className="price">
                        <h5 className="MRP">MRP <del>{item.price}</del></h5>
                        <h6 className="ProductCard_discount">{item.discount}</h6>
                    </div>
                    <h4>₹ {item.dis_price}</h4>
  
              </div>
            ))
        }
      </div>
    </div>
  
  );
};

export default Products;
