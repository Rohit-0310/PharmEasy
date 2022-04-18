import { ADD_TO_CART } from "./actionType";


const initState ={
    cart: [],
}


export const cartReducer = (state = initState, {type, payload}) =>{
    switch(type){
        case ADD_TO_CART:
            return {...state, cart: payload}
        default:
            return state;
    }
}