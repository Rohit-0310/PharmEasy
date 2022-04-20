import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



export const ProductDetails = () => {
    const [disonepro, setDisonepro] = useState([])
    const onepro = useParams()
    useEffect(() => {
      const itemData = async () => {
        let result = await fetch(
          `http://localhost:3001/Products?=${onepro.id}`
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
              disonepro.map((item, i) =>(
                <div className="product_box" key={i} >
                  <div>
                      <img  src={item.img} alt={item.title} />
                  </div>
    
                      {/* <div>{item.id}</div> */}
                      <h3>{item.title}</h3>
                      <div className="price">
                          <h5 className="MRP">MRP {item.price}</h5>
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