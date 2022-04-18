import { SHOW_PRODUCT_DATA } from "./actionType";

const initState ={
    showProduct: [],
};



export const productReducer = (state = initState, {type,payload}) => {
    switch (type) {
        case SHOW_PRODUCT_DATA:
            return { ...state, showProduct: payload};
        default:
            return state;
    }
};