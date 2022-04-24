import { ADD_TO_CART , REMOVE_CART_DATA} from "./actionType";


const initState ={
    showCart: []
}


export const cartReducer = (state = initState, {type, payload}) =>{
    switch(type){
        case ADD_TO_CART:
            return {...state, showCart: payload}
        case REMOVE_CART_DATA:
            const newcart = state.cart.filter((e) => e.id !== payload);
            return {
              ...state,
              showCart: newcart,
            };
        default:
            return state;
    }
}