import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/Product/action";
import "./Product.css"

const Products = () => {
  
  const dispatch = useDispatch()


  useEffect (() => {
    dispatch(getProductData())

  },[]);
  const data = useSelector((state)=>state.productState.showProduct)
  console.log(data)
  return (
    <div>
      <div className="product_main">{
            data.map((e, i) =>(
              <div className="product_box" key={i}>
                <div>
                    <img  src={e.img} alt={e.title} />
                </div>
  
                    {/* <div>{e.id}</div> */}
                    <h3>{e.title}</h3>
                    <div className="price">
                        <h5 className="MRP">MRP {e.price}</h5>
                        <h6 className="ProductCard_discount">{e.discount}</h6>
                    </div>
                    <h4>₹ {e.dis_price}</h4>
  
              </div>
            ))
        }
      </div>
    </div>
  
  );
};

export default Products;
