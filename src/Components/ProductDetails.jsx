import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ProductDetails = () => {
  const navigate = useNavigate()
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

    const handleProduct = (id)=>{
      navigate(`/Products/${id}`)
    }
  
  
    return (
      <div>
        <NavBar />
        <div className="i_product_main">{
                <div className="i_product_box">
                  <div className="i_product_img">
                      <img  src={disonepro.img} alt={disonepro.title} />
                  </div>
                  <div className="i_product_title">
                      <h3>{disonepro.title}</h3>
                      <p onClick={()=>handleProduct(disonepro.categoryId)}>visit {disonepro.brand} Store</p>
                      <div className="i_price">
                            <h4>₹ {disonepro.dis_price}</h4>
                            <h5 className="i_MRP">MRP <del>{disonepro.price}</del></h5>
                            <h6 className="i_ProductCard_discount">{disonepro.discount}</h6>
                            <button className="i_add_to_cart">Add To Cart</button>
                      </div>
                      <div className="i_product_time">
                        <p>Inclusive of all taxes</p>
                        <p>Delivery <span> In 6 hours</span> 
                        <FlashOnIcon className="i_pro_flash" />
                        </p>
                      </div>

                      <hr />
                      <h3>Select Available Variant</h3>
                      <h4>Pack Size</h4>
                      <Stack spacing={2} direction="row">
                          <Button color="secondary" variant="outlined">200Ml</Button>
                          <Button color="secondary" variant="outlined">2Kg</Button>
                      </Stack>
                  </div>
                </div>
             
          }
        </div>
      </div>
    
    );

    


  };


  export default ProductDetails;