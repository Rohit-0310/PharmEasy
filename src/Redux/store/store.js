import { createStore } from 'redux'
import { categoryReducer } from '../CategoryData/reducer'



export const store = createStore(categoryReducer)















// import { createStore, combineReducers } from "redux";
// import { cartReducer } from "../Cart/reducer";
// import { loginReducer } from "../Login/reducer";
// import { productReducer } from "../Product/reducer";
// import { signUpReducer } from "../Signup/reducer";
// import { categoryReducer } from "../CategoryData/reducer";



// const mainReducer = combineReducers({
//     loginState : loginReducer,
//     signupState : signUpReducer,
//     cartState : cartReducer,
//     productState : productReducer,
//     categoryState : categoryReducer
// })



// export const store = createStore(mainReducer);