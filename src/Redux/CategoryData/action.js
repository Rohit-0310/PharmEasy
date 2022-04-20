import { CATEGORY_DATA } from "./actionType";



export const showCategory = (data) => ({
    type : CATEGORY_DATA,
    payload: data,
})



export const getData = () => (dispatch) => {
    fetch("http://localhost:3001/category")
    .then((data) => data.json())
    .then((res) => dispatch(showCategory(res)));
}