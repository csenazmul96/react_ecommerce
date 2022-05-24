import {combineReducers} from 'redux'
import AuthReducer from "./AuthReducer";
import ProductReducers from "./ProductReducers";
import CustomerReducer from "./CustomerReducer";
import ErrorsReducer from "./ErrorsReducer";

export default combineReducers({
    AuthReducer,
    ProductReducers,
    CustomerReducer,
    ErrorsReducer,
})
