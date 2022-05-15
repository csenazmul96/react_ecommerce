import {SendProductGetRequest, GetProductRequestSuccess, GetProductRequestFail} from "../Type";

const initState = {
    products: [],
    error: '',
    loader: false,
    pagination: []
}

export default function (state = initState, action){
    switch (action.type){
        case SendProductGetRequest:
            return {
                ...state,
                loader: true
            }
        case GetProductRequestSuccess:
            return {
                ...state,
                products: action.payload,
                pagination: action.pagination,
                loader: false
            }
        case GetProductRequestFail:
            return {
                ...state,
                loader: false,
                products: [],
                error: action.payload,
                pagination: [],
            }
        default:
            return initState
    }
}
