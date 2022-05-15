import {LoginUser} from '../Type'

const initialState = {
    user: null
}

export default function (state = initialState, action){
    switch (action.type){
        case LoginUser:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
