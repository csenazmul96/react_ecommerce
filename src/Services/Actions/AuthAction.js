import {LoginUser, Errors} from "../Type";
import {sendCustomerDetaisRequest} from "./CustomerAction";
import axios from "../../api/axios";

export const loginAction = (payload) =>{
    return async (dispatch)=> {
        return await axios.post('/login',
            {
                email: payload.email,
                password: payload.password
            }
        ).then((response)=>{
            localStorage.setItem('user', JSON.stringify(response.data.data))
            dispatch({
                type: LoginUser,
                payload: response.data.data
            })
            sendCustomerDetaisRequest()
        }).catch((error) => {
            if (error.response) {
                dispatch({
                    type: Errors,
                    payload: error.response.data.errors
                })
            }
        });
    }
}
