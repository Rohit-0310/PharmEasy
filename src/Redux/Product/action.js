import { SHOW_PRODUCT_DATA } from "./actionType";



export const showProduct = (data) => ({
    type : SHOW_PRODUCT_DATA,
    payload: data,
})