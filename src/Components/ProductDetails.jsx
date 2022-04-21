import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"


const ProductDetails = () => {
    const [disonepro, setDisonepro] = useState([])
    const onepro = useParams()
    useEffect(() => {
      const itemData = async () => {
        let result = await fetch(
          `http://localhost:3001/Products/${onepro.id}`
        );
        let res = await result.json();
        setDisonepro(res)
      };
      itemData();
    }, []);
  
  
    console.log(disonepro);
  
  
    return (
      <div>
        <div className="i_product_main">{
                <div className="i_product_box">
                  <div className="i_product_img">
                      <img  src={disonepro.img} alt={disonepro.title} />
                  </div>
                  <div className="i_product_title">
                      <h3>{disonepro.title}</h3>
                      <p>visit {disonepro.brand} Store</p>
                      <div className="i_price">
                            <h4>₹ {disonepro.dis_price}</h4>
                            <h5 className="i_MRP">MRP <del>{disonepro.price}</del></h5>
                            <h6 className="i_ProductCard_discount">{disonepro.discount}</h6>
                            <button className="i_add_to_cart">Add To Cart</button>
                      </div>
                  </div>
                </div>
             
          }
        </div>
      </div>
    
    );

    


  };


  export default ProductDetails;