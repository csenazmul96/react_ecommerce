import {GetCustomerDetails} from '../Type'

const initialState = {
    customer: []
}

export default function (state = initialState, action){
    switch (action.type){
        case GetCustomerDetails:
            return {
                ...state,
                customer: action.payload
            }
        default:
            return state
    }
}
