import {GetCartItems, SetCartMessage, DeleteCart} from "../Type";
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
        case DeleteCart:
            let items = [...state.cartItems];
            let idx = items.findIndex((i) => i.id === action.payload);
            items.splice(idx, 1);
            return {
                ...state,
                cartItems: items,
            }
        default:
            return initState
    }
}
