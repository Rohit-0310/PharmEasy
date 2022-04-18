import { LOG_IN } from "./actionType"



const initState ={
    showlogin: false,
}


export const loginReducer = (state = initState, {type, payload}) =>{
    switch(type){
        case LOG_IN:
            return {...state, showlogin: payload}

        default:
            return state;
    }
}

