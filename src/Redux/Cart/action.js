import { ADD_TO_CART, REMOVE_CART_DATA } from "./actionType";


export const addToCart = (data) => ({
    type : ADD_TO_CART,
    payload : data,
})

export const removeCartData = (id) => {
    return {
      type: REMOVE_CART_DATA,
      id,
    };
  };


export const getCartData = () => (dispatch) => {
    fetch(`https://mydbpharma.herokuapp.com/cart`)
    .then((data) => data.json())
    .then((res) => dispatch(addToCart(res)));
}