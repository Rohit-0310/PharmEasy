import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



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
        <div className="product_main">{
              


                <div className="product_box" >
                  <div>
                      <img  src={disonepro.img} alt={disonepro.title} />
                  </div>
    
                      {/* <div>{disonepro.id}</div> */}
                      <h3>{disonepro.title}</h3>
                      <div className="price">
                          <h5 className="MRP">MRP {disonepro.price}</h5>
                          <h6 className="ProductCard_discount">{disonepro.discount}</h6>
                      </div>
                      <h4>₹ {disonepro.dis_price}</h4>
    
                </div>
             
          }
        </div>
      </div>
    
    );
  };


  export default ProductDetails;