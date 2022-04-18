import { createStore, combineReducers } from "redux";
import { cartReducer } from "../Cart/reducer";
import { loginReducer } from "../Login/reducer";
import { productReducer } from "../Product/reducer";
import { signUpReducer } from "../Signup/reducer";




const mainReducer = combineReducers({
    loginState : loginReducer,
    signupState : signUpReducer,
    cartState : cartReducer,
    productState : productReducer
})



export const store = createStore(mainReducer);