import {SendProductGetRequest, GetProductRequestSuccess, GetProductRequestFail} from "../Type";
import axios from "axios";

export const sendProductsRequest = (payload) =>{
    return async (dispatch)=> {
         try {
            dispatch({
                type:SendProductGetRequest,
            })
             const res = await axios.get('https://davidani.com/api/api/category-products/'+payload.url, {params: payload.params})
             dispatch({
                 type:GetProductRequestSuccess,
                 payload: res.data.data,
                 pagination: res.data.meta
             })
         } catch (error){
             dispatch({
                 type:GetProductRequestFail,
                 payload: error.message
             })
         }
    }
}
