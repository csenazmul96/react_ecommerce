import React, {PureComponent, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../api/axios";

const ProductDetails = ()=> {
    let {slug} = useParams();
    let productDetails = null
    useEffect(()=>{
        getItem()
    }, [slug])


    const getItem = ()=>{
        if(slug){
            axios.get('/item/'+slug).then((response)=>{
                if(response?.data?.data){
                    productDetails = response.data.data
                    console.log(productDetails)
                }
            })
        }
    }

        return (
            <section className="product_single_area">
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb nz_bredcrumb mb_0">
                                    <li className="breadcrumb-item"><a href="#">Cart</a></li>
                                    <li className="breadcrumb-item"><a href="#">Information</a></li>
                                    <li className="breadcrumb-item"><a href="#">Shipping</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <div className="single_product_left">
                                <div className="single_product_left_inner">
                                    <div className="single_product_left_thum">
                                        <ul className="single_img_thumb">
                                            <li><img src="../images/productnew/product-1.webp" alt=""
                                                     className="img-fluid"/></li>
                                            <li><img src="../images/productnew/product-2.webp" alt=""
                                                     className="img-fluid"/></li>
                                            <li><img src="../images/productnew/product-3.webp" alt=""
                                                     className="img-fluid"/></li>
                                            <li><img src="../images/productnew/product-4.webp" alt=""
                                                     className="img-fluid"/></li>
                                            <li><img src="../images/productnew/product-5.webp" alt=""
                                                     className="img-fluid"/></li>
                                            <li><img src="../images/productnew/product-6.webp" alt=""
                                                     className="img-fluid"/></li>
                                            <li><img src="../images/productnew/product-7.webp" alt=""
                                                     className="img-fluid"/></li>
                                        </ul>
                                    </div>
                                    <div className="single_product_img">
                                        <div className="single_img">
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-1.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-2.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-3.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-4.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-5.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-6.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="img_slide_inner zoom_on_hover">
                                                <span className="like ">
                                                    <i className="far fa-heart "></i>
                                                </span>
                                                    <a href="#">
                                                        <img src="../images/productnew/product-7.webp" alt=""
                                                             className="width_full"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_product_left_mobile">
                                    <div className="single_img_mobile">
                                        <div className="slide"><img src="../images/productnew/product-1.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-2.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-3.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-4.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-1.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-2.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-3.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                        <div className="slide"><img src="../images/productnew/product-4.webp"
                                                                    alt="" className="img-fluid width_full"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="single_product_description ">
                                <h2>{productDetails ? productDetails.name : null}</h2>
                                <p>Naked Zebra22</p>
                                <h3>$34</h3>
                                <div className="pack_ratio">
                                    <div className="row">
                                        <div className="col-4 pr_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <h2>Color</h2>
                                            </div>
                                        </div>
                                        <div className="col-4 pr_5 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <h2>Pack</h2>
                                            </div>
                                        </div>
                                        <div className="col-4 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <h2>Quantity</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 pr_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner ratio_color">
                                                    <img src="../images/product/single-img-thumbnail3.jpg"
                                                         alt="" className="img-fluid"/>
                                                        <span>Red <br/> <b>28/2/21</b> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 pr_5 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner d_flex_center ">
                                                    <span className="d_flex_center width_full">2-2-2</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner d_flex_center">
                                                    <div className="num_count_wrapper">
                                                        <div className="num_count">
                                                            <div id="minus" className="minus">
                                                                <button className="btn btn-default"><i
                                                                    className="lni lni-minus"></i></button>
                                                            </div>
                                                            <input id="qty1" type="text" value="1" className="qty"/>
                                                                <div id="add" className="add">
                                                                    <button className="btn btn-default"><i
                                                                        className="lni lni-plus"></i></button>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 pr_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner ratio_color">
                                                    <img src="../images/product/single-img-thumbnail2.jpg"
                                                         alt="" className="img-fluid"/> <span>Green <b>28/2/21</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 pr_5 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner d_flex_center ">
                                                    <span className="d_flex_center width_full">2-2-2</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner d_flex_center">
                                                    <div className="num_count_wrapper">
                                                        <div className="num_count">
                                                            <div id="minus" className="minus">
                                                                <button className="btn btn-default"><i
                                                                    className="lni lni-minus"></i></button>
                                                            </div>
                                                            <input id="qty1" type="text" value="1" className="qty"/>
                                                                <div id="add" className="add">
                                                                    <button className="btn btn-default"><i
                                                                        className="lni lni-plus"></i></button>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 pr_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner ratio_color">
                                                    <img src="../images/product/single-img-thumbnail4.jpg"
                                                         alt="" className="img-fluid"/> <span>Blue <b>28/2/21</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 pr_5 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner d_flex_center ">
                                                    <span className="d_flex_center width_full">2-2-2</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 pl_5">
                                            <div className="pack_ratio_inner_wrap">
                                                <div className="pack_ratio_inner d_flex_center">
                                                    <div className="num_count_wrapper">
                                                        <div className="num_count">
                                                            <div id="minus" className="minus">
                                                                <button className="btn btn-default"><i
                                                                    className="lni lni-minus"></i></button>
                                                            </div>
                                                            <input id="qty1" type="text" value="1" className="qty"/>
                                                                <div id="add" className="add">
                                                                    <button className="btn btn-default"><i className="lni lni-plus"></i></button>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pack_ratio_total_wrap">
                                    <div className="row">
                                        <div className="col-4 pr_5">
                                            <div className="pack_ratio_total d_flex_btwn">
                                                <span>Total Pack</span>
                                                <span>24</span>
                                            </div>
                                        </div>
                                        <div className="col-4 pr_5 pl_5">
                                            <div className="pack_ratio_total d_flex_btwn">
                                                <span>Total Qty</span>
                                                <span>24</span>
                                            </div>
                                        </div>
                                        <div className="col-4 pl_5">
                                            <div className="pack_ratio_total d_flex_btwn">
                                                <span>Total Price</span>
                                                <span>$2240</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_to_car_btn">
                                    <button className="btn_common width_180p"> Add to Cart</button>
                                </div>
                                <div className="product_desc">
                                    <h2>Description</h2>
                                    <ul>
                                        <li>Style No. HB116608</li>
                                        <li>Drop Shoulder, Shirred Drawstring on Front Hem</li>
                                        <li>Size & Fit</li>
                                        <li>Fit: This garment fits true to size.</li>
                                        <li>Length: Waist Length.</li>
                                        <li>Bust: Great for any cup size.</li>
                                        <li>Waist: Not Fitted - comfortable room throughout midsection.</li>
                                        <li>Fabric: Woven100% Polyester</li>
                                        <li>Hand Wash Cold</li>
                                        <li>Sizes in Pack: 2S - 2M - 2L</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default ProductDetails;
