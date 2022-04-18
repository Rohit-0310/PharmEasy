import { SIGN_UP } from "./actionType"

const initState ={
    showsignup: false,
}


export const signUpReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SIGN_UP:
            return { ...state, showsignup: payload};
        default:
        return state;
    }
}