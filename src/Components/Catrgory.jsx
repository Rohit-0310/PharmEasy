import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, showCategory } from "../Redux/CategoryData/action";
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
      <div className="content-box">{
          data.map((item, i) =>(
            <div className="category_box" key={i}>
              
                <div>{item.id}</div>
                <div>{item.cat_title}</div>

            </div>
          ))
        }
      </div>
    </div>
  
  );
};

export default Catrgorys;
