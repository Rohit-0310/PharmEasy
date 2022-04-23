import { HEALTH_CARE_PRODUCT, SORT_HEALTH_CARE_PRODUCT } from "./actionType";

const initState ={
    healthCareProduct: [],
    sortHealthCareProduct: []
};



export const healthCareReducer = (state = initState, {type,payload}) => {
    switch (type) {
        case HEALTH_CARE_PRODUCT:
            return { ...state, healthCareProduct: payload};
        case SORT_HEALTH_CARE_PRODUCT:
            return { ...state, sortHealthCareProduct: payload};
        default:
            return state;
    }
};
