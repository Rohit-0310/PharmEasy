import { CATEGORY_DATA } from "./actionType";



export const showCategory = (data) => ({
    type : CATEGORY_DATA,
    payload: data,
})