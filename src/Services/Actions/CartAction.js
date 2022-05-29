import { GetCartItems, GetProductRequestFail, SetCartMessage} from "../Type";
import axios from "../../api/axios";

export const AddToCart = (payload, customer) =>{
    let cartItems = [];

    payload.forEach((color) => {
        if (color.quantity > 0) {
            cartItems.push({
                customer_id: customer,
                item_id: color.item_id,
                indicator: color.indicator,
                color_id: color.color_id,
                quantity: color.quantity,
            });
        }
    })
    if(cartItems.length){
        return async (dispatch)=> {
            try {
                const res = await axios.post('/carts', {items: cartItems})
                dispatch({
                    type:GetCartItems,
                    payload: res.data.data,
                })
                dispatch({
                    type:SetCartMessage,
                    payload: 'Add To Cart Successfully'
                })
                cartItems = []
            } catch (error){
                dispatch({
                    type:SetCartMessage,
                    payload: error.message
                })
            }
        }
    } else {
        return (dispatch)=> {
             dispatch({
                type:SetCartMessage,
                payload: "please Select Item"
            })
        }
    }
}
export const GetCart = () =>{
    return async (dispatch)=> {
        try {
            const res = await axios.get('/carts')
            dispatch({
                type:GetCartItems,
                payload: res.data.data,
            })
        } catch (error){
            dispatch({
                type:SetCartMessage,
                payload: error.message
            })
        }
    }
}
