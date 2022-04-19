import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCategory } from "../Redux/CategoryData/action";
// import { useDispatch } from "react-redux";
// import { store } from "../Redux/store";

const Catrgorys = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.showCategory)
    useEffect (() => {
    fetch("http://localhost:3001/category")
      .then((data) => data.json())
      .then((res) => {
        dispatch(showCategory(res))
        // console.log(res);
      }, []);
  });
// console.log(data)
  return <div>Catrgorys</div>;
};

export default Catrgorys;
