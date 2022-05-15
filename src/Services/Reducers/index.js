import {combineReducers} from 'redux'
import AuthReducer from "./AuthReducer";
import ProductReducers from "./ProductReducers";

export default combineReducers({
    AuthReducer,
    ProductReducers
})
