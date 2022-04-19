import { CATEGORY_DATA } from "./actionType";

const initState ={
    showCategory: [],
};



export const categoryReducer = (state = initState, {type,payload}) => {
    switch (type) {
        case CATEGORY_DATA:
            return { ...state, showCategory: payload};
        default:
            return state;
    }
};
