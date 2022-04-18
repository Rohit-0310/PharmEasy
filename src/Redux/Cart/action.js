import { ADD_TO_CART } from "./actionType"


export const addToCart = (data) => ({
    type : ADD_TO_CART,
    payload : data,
})