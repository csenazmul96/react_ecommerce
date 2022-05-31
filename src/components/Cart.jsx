import React, {useEffect, useState} from "react";
import {DeleteCartItem} from "../Services/Actions/CartAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Cart = ({cartItems, DeleteCartItem})=>{
    const [items, setItems]= useState([])
    let [totalPrice, settotalPrice] = useState(0.00)

    useEffect(() => {
        if(cartItems && cartItems.length) {
            setItems(cartItems)
            CalculateSummary()
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
    const handleInputChange = (e,i)=>{
        const name = e.target.name
        const value = e.target.value
        const list = [...items]
        list[i][name] = value
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
            settotalPrice(sum ? sum.toFixed(2) : 0.00)
        }
    }

    const CartItemDesktop = () =>{
        if(items && items.length) {
            return (
                items.map((inv, i) => {
                    return (<tr key={'desktop_cart'+i}>
                        <td>
                            <div className="cart_product_inner">
                                <Link to={`/product/${inv.item.slug}`}>{ inv.item && inv.item.images && inv.item.images.length ? (<img src={inv.item.images[0].thumbs_image} alt="" className="img-fluid" width="70px" />) : null}</Link>
                                <div className="cart_product_text">
                                    {inv.item ? <h2>{inv.item.style_no}</h2> : null}
                                    {inv.item ? <p>{inv.item.name}</p> : null}
                                    {inv.item ? <h2>${inv.item.price.toFixed(2)}</h2> : null}
                                </div>
                                <span className="remove" onClick={e=> DeleteCartItem(inv.id)}>Remove</span>
                            </div>
                        </td>
                        <td>
                            <div className="num_count_wrapper">
                                <span>Quantity: </span>
                                <div className="num_count">
                                    <div id="minus" className="minus" onClick={e=>changeQty(i, 'minus')}>
                                        <button className="btn btn-default"><i className="lni lni-minus"></i></button>
                                    </div>
                                    <input id="qty1" type="text" value={inv.quantity} className="qty" onChange={e=>handleInputChange(e, i)} />
                                    <div id="add" className="add" onClick={e=>changeQty(i, 'plus')}>
                                        <button className="btn btn-default"><i className="lni lni-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>)
                })
            )
        }
    }
    const CartItemMobile = () =>{
        if(items && items.length) {
            return (
                items.map((inv, i) => {
                    return (<div className="cart_main_mobile_inner" key={'cart_mob'+i}>
                        <span className="remove"><div className="close_icon"></div></span>
                        <div className="left">
                            <div className="cart_product_text">
                                {inv.item ? <h2>{inv.item.style_no}</h2> : null}
                                {inv.item ? <p>{inv.item.name}</p> : null}
                                {inv.item ? <h2>${inv.item.price.toFixed(2)}</h2> : null}
                            </div>
                            <div className="qnty">Quantity:</div>
                            <div className="num_count_wrapper">
                                <div className="num_count">
                                    <div id="minus" className="minus" onClick={e=>changeQty(i, 'minus')}>
                                        <button className="btn btn-default"><i className="lni lni-minus"></i></button>
                                    </div>
                                    <input id="qty1" type="text" value={inv.quantity} className="qty" onChange={e=>handleInputChange(e, i)} />
                                    <div id="add" className="add" onClick={e=>changeQty(i, 'plus')}>
                                        <button className="btn btn-default"><i className="lni lni-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Link to={`/product/${inv.item.slug}`}>{ inv.item && inv.item.images && inv.item.images.length ? (<img src={inv.item.images[0].thumbs_image} alt="" className="img-fluid" />) : null}</Link>
                        </div>
                    </div>)
                })
            )
        }
    }
    return(
        <section className="cart_area">
            <div className="container custom_container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cart_title">
                            <h2>Shipping Cart ({items && items.length ? items.length : 0})</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="cart_main_content m_none">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                    <CartItemDesktop />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="d_none">
                            <div className="cart_main_content_mobile">
                                <CartItemMobile />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cart_right">
                            <h2>Order Summery</h2>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Taxes</td>
                                    <td>Calculated In Checkout</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Calculated In Checkout</td>
                                </tr>
                                <tr>
                                    <td>Estimated Total</td>
                                    <td>${totalPrice}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="btn_common_wrap">
                                <button className="btn_common">Proced To Checkout</button>
                            </div>
                            <div className="btn_common_wrap mt_10 mb_10">
                                <button className="btn_transparent">Continue Shipping</button>
                            </div>
                            <div className="cart_payment">
                                <a href="#"> <img src="../images/payment.png" alt="" className="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = (state)=>({
    cartItems: state.CartReducer.cartItems
})
export default connect(mapStateToProps, {DeleteCartItem}) (Cart)
