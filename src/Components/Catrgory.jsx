import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/CategoryData/action";
import "./Category.css"

const Catrgorys = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect (() => {
    dispatch(getData())

  },[]);
  const data = useSelector((state)=>state.categoryState.showCategory)
  console.log(data)



  const Show_All_product_details = (prodId) => {
    navigate(`/products/${prodId}`)
  }

  return (
    <div>
      <div className="category_main">{
          data.map((item, i) =>(
            <div className="category_box" key={i} onClick={() =>Show_All_product_details(item.id)}>
{/*               
                <div>{item.id}</div>
                <div>{item.cat_title}</div> */}
                <img width="120px" src={item.cat_img} alt={item.cat_title} />

            </div>
          ))
        }
      </div>
    </div>
  
  );
};

export default Catrgorys;
