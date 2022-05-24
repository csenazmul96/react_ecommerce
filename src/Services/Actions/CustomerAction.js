import {GetCustomerDetails} from "../Type";
import axios from '../../api/axios';

export const sendCustomerDetaisRequest = () =>{
    return async (dispatch)=> {
        try {
            const res = await axios.get('/customer/details')
            dispatch({
                type:GetCustomerDetails,
                payload: res.data.data,
            })
        } catch (error){
            console.log(error)
        }
    }
}
