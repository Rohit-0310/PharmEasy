import { ADD_TO_CART } from "./actionType";


const initState ={
    showCart: []
}


export const cartReducer = (state = initState, {type, payload}) =>{
    switch(type){
        case ADD_TO_CART:
            return {...state, showCart: payload}
        default:
            return state;
    }
}