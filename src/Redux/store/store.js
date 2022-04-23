import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "../Cart/reducer";
import { loginReducer } from "../Login/reducer";
import { productReducer } from "../Product/reducer";
import { signUpReducer } from "../Signup/reducer";
import { categoryReducer } from "../CategoryData/reducer";
import { healthCareReducer } from "../HealtcareProduct/reducer";
import thunk from "redux-thunk";


const mainReducer = combineReducers({
    loginState : loginReducer,
    signupState : signUpReducer,
    cartState : cartReducer,
    productState : productReducer,
    categoryState : categoryReducer,
    HealthCareState : healthCareReducer
})



export const store = createStore(mainReducer, applyMiddleware(thunk));