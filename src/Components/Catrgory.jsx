import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/CategoryData/action";
import "./Category.css"

const Catrgorys = () => {
  
  const dispatch = useDispatch()


  useEffect (() => {
    dispatch(getData())

  },[]);
  const data = useSelector((state)=>state.categoryState.showCategory)
  console.log(data)
  return (
    <div>
      <div className="category_main">{
          data.map((item, i) =>(
            <div className="category_box" key={i}>
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
