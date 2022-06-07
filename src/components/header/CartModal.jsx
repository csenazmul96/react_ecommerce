import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DeleteCartItem} from "../../Services/Actions/CartAction";
import {Link} from "react-router-dom";

const CartModal = ({cartItems,DeleteCartItem})=>{
    const [items, setItems]= useState([])
    let [totalPrice, settotalPrice] = useState(0.00)
    useEffect(() => {
        if(cartItems && cartItems.length) {
            setItems(cartItems)
        }
    }, [cartItems]);
    const changeQty = (i, type)=>{
        const list = [...items]
        if(type === 'plus') {
            list[i].quantity = list[i].quantity + 1
        } else if(type === 'minus' && list[i].quantity > 0) {
            list[i].quantity = list[i].quantity - 1
        }
        setItems(list)
        CalculateSummary()
    }
    function CalculateSummary(){
        if(items && items.length){
            let sum = 0;
            items.forEach((data, i) => {
                let packSize = data.item && data.item.pack ? data.item.pack.total_item : 1;
                let total = data.quantity * data.item.price * packSize
                sum = sum + total
            })
            totalPrice = sum ? sum.toFixed(2) : 0.00
        }
    }
    const handleInputChange = (e,i)=>{
        const name = e.target.name
        const value = e.target.value
        const list = [...items]
        list[i][name] = value
        setItems(list)
        CalculateSummary()
    }
    const CartItems = ()=>{
        return (
            items.map((inv,i)=>{
                return(
                    <div className="right_cart_menu_inner" key={'modal_cart'+i}>
                        <div className="inner">
                            <div className="img">
                                { inv.item && inv.item.images && inv.item.images.length ? (<img src={inv.item.images[0].thumbs_image} alt="" className="img-fluid" width="70px" />) : null}
                            </div>
                            <div className="cart_product_text">
                                {inv.item ? <h2>{inv.item.style_no}</h2> : null}
                                {inv.item ? <p>{inv.item.name}</p> : null}
                                {inv.item ? <h2>${inv.item.price.toFixed(2)}</h2> : null}
                                <div className="num_count_wrapper">
                                    <div className="num_count">
                                        <div id="minus" className="minus" onClick={e=>changeQty(i, 'minus')}>
                                            <button className="btn btn-default"><i className="lni lni-minus"></i></button>
                                        </div>
                                        <input id="qty1" type="text" value={inv.quantity} className="qty" onChange={e=>handleInputChange(e, i)} />
                                        <div id="add" className="add">
                                            <button className="btn btn-default" onClick={e=>changeQty(i, 'plus')}><i className="lni lni-plus"></i></button>
                                        </div>
                                    </div>
                                    <span className="delete" onClick={e=> DeleteCartItem(inv.id)}><i className="lni lni-trash"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="cart_btn">
                            <Link to={`/cart`} className="width_full"><button className="btn_common">View Cart (6)</button></Link>
                            <button className="btn_transparent">Checkout</button>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <div className="right_cart_menu">
            <h2>My Cart <span className="close_ic close_icon"></span></h2>
            <div className="right_cart_menu_inner_wrap">
                <CartItems />
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>({
    cartItems: state.CartReducer.cartItems
})
export default connect(mapStateToProps, {DeleteCartItem})(CartModal)
