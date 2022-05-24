import {Errors, GetCustomerDetails} from "../Type";

const initialState = {
    errors: []
}

export default function (state = initialState, action){
    switch (action.type){
        case Errors:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}
