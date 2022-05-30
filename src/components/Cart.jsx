import React from "react";
import {GetCart} from "../Services/Actions/CartAction";
import {connect} from "react-redux";

const Cart = ({cartItems, GetCart})=>{
    return(
        <section className="cart_area">
            <div className="container custom_container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cart_title">
                            <h2>Shipping Cart (2)</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="cart_main_content m_none">
                            <p>Item</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <tr>
                                        <td>
                                            <div className="cart_product_inner">
                                                <a href="#"><img src="../images/productnew/product-14.webp"
                                                                 alt="" className="img-fluid" /></a>
                                                <div className="cart_product_text">
                                                    <h2>HPP9687</h2>
                                                    <p>Thunder Blue</p>
                                                    <h2>$82.50</h2>
                                                </div>
                                                <span className="remove">Remove</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="num_count_wrapper">
                                                <span>Quantity: </span>
                                                <div className="num_count">
                                                    <div id="minus" className="minus">
                                                        <button className="btn btn-default"><i
                                                            className="lni lni-minus"></i></button>
                                                    </div>
                                                    <input id="qty1" type="text" value="1" className="qty" />
                                                        <div id="add" className="add">
                                                            <button className="btn btn-default"><i
                                                                className="lni lni-plus"></i></button>
                                                        </div>
                                                </div>


                                            </div>
                                        </td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                        <div className="d_none">
                            <div className="cart_main_content_mobile">
                                <div className="cart_main_mobile_inner">
                                    <span className="remove"><div className="close_icon"></div></span>
                                    <div className="left">
                                        <div className="cart_product_text">
                                            <h2>HPP9687</h2>
                                            <p>Thunder Blue</p>
                                            <h2>$82.50</h2>
                                        </div>
                                        <div className="qnty">Quantity:</div>
                                        <div className="num_count_wrapper">
                                            <div className="num_count">
                                                <div id="minus" className="minus">
                                                    <button className="btn btn-default"><i className="lni lni-minus"></i></button>
                                                </div>
                                                <input id="qty1" type="text" value="1" className="qty" />
                                                    <div id="add" className="add">
                                                        <button className="btn btn-default"><i className="lni lni-plus"></i></button>
                                                    </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="right">
                                        <a href="#"><img src="../images/productnew/product-14.webp" alt="" className="img-fluid" /></a>
                                    </div>
                                </div>
                                <div className="cart_main_mobile_inner">
                                    <span className="remove"><div className="close_icon"></div></span>
                                    <div className="left">
                                        <div className="cart_product_text">
                                            <h2>HPP9687</h2>
                                            <p>Thunder Blue</p>
                                            <h2>$82.50</h2>
                                        </div>
                                        <div className="qnty">Quantity:</div>
                                        <div className="num_count_wrapper">
                                            <div className="num_count">
                                                <div id="minus" className="minus">
                                                    <button className="btn btn-default"><i className="lni lni-minus"></i></button>
                                                </div>
                                                <input id="qty1" type="text" value="1" className="qty" />
                                                    <div id="add" className="add">
                                                        <button className="btn btn-default"><i className="lni lni-plus"></i></button>
                                                    </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="right">
                                        <a href="#"><img src="../images/productnew/product-14.webp" alt="" className="img-fluid" /></a>
                                    </div>
                                </div>
                                <div className="cart_main_mobile_inner">
                                    <span className="remove"><div className="close_icon"></div></span>
                                    <div className="left">
                                        <div className="cart_product_text">
                                            <h2>HPP9687</h2>
                                            <p>Thunder Blue</p>
                                            <h2>$82.50</h2>
                                        </div>
                                        <div className="qnty">Quantity:</div>
                                        <div className="num_count_wrapper">
                                            <div className="num_count">
                                                <div id="minus" className="minus">
                                                    <button className="btn btn-default"><i
                                                        className="lni lni-minus"></i></button>
                                                </div>
                                                <input id="qty1" type="text" value="1" className="qty" />
                                                    <div id="add" className="add">
                                                        <button className="btn btn-default"><i
                                                            className="lni lni-plus"></i></button>
                                                    </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="right">
                                        <a href="#"><img src="../images/productnew/product-14.webp" alt=""
                                                         className="img-fluid" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cart_right">
                            <h2>Order Summery</h2>
                            <table className="table">
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
                                    <td>$145.56</td>
                                </tr>
                            </table>
                            <div className="btn_common_wrap">
                                <button className="btn_common">Proced To Checkout</button>
                            </div>
                            <div className="btn_common_wrap mt_10 mb_10">
                                <button className="btn_transparent">Continue Shipping</button>
                            </div>
                            <div className="cart_payment">
                                <a href="#"> <img src="../images/payment.png" alt=""
                                                  className="img-fluid" /></a>
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
export default connect(mapStateToProps, {GetCart}) (Cart)
