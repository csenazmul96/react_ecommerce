import {LoginUser} from "../Type";

export const loginAction = (payload) =>{
    return {
        type:LoginUser,
        payload: payload
    }
}
