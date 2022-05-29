import {GetCartItems, SetCartMessage} from "../Type";
const initState = {
    cartItems: [],
    messages: null,
    loader: false,
}

export default function (state = initState, action){
    switch (action.type){

        case SetCartMessage:
            return {
                ...state,
                loader: false,
                messages: action.payload,
            }
        case GetCartItems:
            return {
                ...state,
                cartItems: action.payload,
                loader: false,
            }
        default:
            return initState
    }
}
