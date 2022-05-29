import React, {PureComponent, useEffect, useState, Component} from 'react';
import {useParams} from "react-router-dom";
import axios from "../api/axios";
import Slider from "react-slick";
import {connect} from "react-redux";
import {sendCustomerDetaisRequest} from "../Services/Actions/CustomerAction";
import {AddToCart} from "../Services/Actions/CartAction";

const ProductDetails = ({customerDetails,cartMessage, sendCustomerDetaisRequest, AddToCart})=> {
    let [user, setUser] = useState(customerDetails)
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    };
    const thumbs_settings = {
        vertical:true,
        verticalSwiping:true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        focusOnSelect: false,
        infinite: false,
    };
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (<button onClick={onClick} className='arrow_left slick-arrow'><i className='lni lni-chevron-left'></i ></button>);
    }

    function SamplePrevArrow(props) {
        const {onClick } = props;
        return (<button onClick={onClick} className='arrow_right slick-arrow'><i className='lni lni-chevron-right'></i></button>);
    }
    const mobile_slider_settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    };
    let {slug} = useParams();
    let [productDetails, setProductData] = useState([])
    let [totalPack, settotalPack] = useState(0)
    let [totalQty, settotalQty] = useState(0)
    let [totalPrice, settotalPrice] = useState(0)
    let [images, setImages] = useState([])
    let [inventories, setInventories] = useState([])
    useEffect(()=>{
        sendCustomerDetaisRequest().then(()=>{
            getItem()
        })
    }, [slug])

    useEffect(()=>{
        let packSize = productDetails && productDetails.pack ? productDetails.pack.total_item : 1;
        settotalPack(inventories.reduce(function (acc, obj) { return acc + obj.quantity }, 0))
        settotalQty(inventories.reduce(function (acc, obj) { return acc + (obj.quantity * packSize) }, 0) )
        settotalPrice(inventories.reduce(function (acc, obj) { return acc + (obj.quantity * packSize * productDetails.price) }, 0) )
    }, [inventories])


    const getItem = ()=>{
        if(slug){
            axios.get('/item/'+slug).then((response)=>{
                if(response?.data?.data){
                    setProductData(response.data.data)
                    setImages(response.data.data.images)
                    if(response.data && response.data.data && response.data.data.inventories.length) {
                        response.data.data.inventories.forEach((data, i) => {
                            let demoForm = {
                                color_id: data.color_id,
                                indicator: 'web',
                                customer_id: customerDetails ? customerDetails.id : null,
                                quantity: 0,
                                item_id: data.item_id,
                                available_on: data.available_on,
                                color_name: data.color_name,
                            }
                            inventories.push(demoForm)
                        })
                    }
                }
            })
        }
    }
    const handleInputChange = (e,i)=>{
        const name = e.target.name
        const value = e.target.value
        const list = [...inventories]
        list[i][name] = value
        list[i].customer_id = customerDetails ? customerDetails.id : null
        setInventories(list)
    }
    const changeQty = (i, type)=>{
        const list = [...inventories]
        if(type === 'plus') {
            list[i].quantity = list[i].quantity + 1
        } else if(type === 'minus' && list[i].quantity > 0) {
            list[i].quantity = list[i].quantity - 1
        }
        list[i].customer_id = customerDetails ? customerDetails.id : null
        setInventories(list)
    }
    const imageLink = (color)=>{
       let img = images.find((img)=>img.color_id === color)
        if(img)
            return img.thumbs_image
        else
            return '../images/email-product2.png'
    }


    const ImageSlider = ()=>{
        return (<Slider {...settings}>
            {images.map((img)=>{
                return (<div className="slide" key={'xx'+img.id}>
                    <div className="img_slide_inner zoom_on_hover">
                        <span className="like ">
                            <i className="far fa-heart "></i>
                        </span>
                        <a href="#"> <img src={img.compressed_image} alt="" className="width_full"/> </a>
                    </div>
                </div>)
            })}
        </Slider>)
    }
    const ThumbsImageSlider = ()=>{
        return (<Slider {...thumbs_settings}>
            {images.map((dd, index)=>{
                return (<li key={'sdf'+index}><img src={dd.thumbs_image} alt="" className="img-fluid"/></li>)
            })}
        </Slider>)
    }
    const MobileSlider = ()=>{
        return (<Slider {...mobile_slider_settings}>
            {images.map((dd, index)=>{
                return (<div key={'mob_slider_'+index} className="slide"><img src={dd.compressed_image} alt="" className="img-fluid width_full"/></div>)
            })}
        </Slider>)
    }
    function AddToCartItem(){
        AddToCart(inventories, customerDetails.id)
    }
    const Inventories = ()=>{
        if(inventories && inventories.length) {
            return (<>
                {inventories.map((inv, i) => {
                    return (
                        <div className="row" key={'inv'+i}>
                            <div className="col-4 pr_5">
                                <div className="pack_ratio_inner_wrap">
                                    <div className="pack_ratio_inner ratio_color">
                                        <img src={imageLink(inv.color_id)} alt="" className="img-fluid"/>
                                        <span>{inv.color_name} <br/> <b>{inv.available_on}</b> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 pr_5 pl_5">
                                <div className="pack_ratio_inner_wrap">
                                    <div className="pack_ratio_inner d_flex_center ">
                                        <span className="d_flex_center width_full">{productDetails.pack ? productDetails.pack.pack_text : null}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 pl_5">
                                <div className="pack_ratio_inner_wrap">
                                    <div className="pack_ratio_inner d_flex_center">
                                        <div className="num_count_wrapper">
                                            <div className="num_count">
                                                <div id="minus" className="minus">
                                                    <button className="btn btn-default" onClick={e=>changeQty(i, 'minus')}><i className="lni lni-minus"></i></button>
                                                </div>
                                                <input name="qty" type="text" value={inv.quantity}  className="qty" onChange={e=>handleInputChange(e, i)}/>
                                                <div id="add" className="add">
                                                    <button className="btn btn-default" onClick={e=>changeQty(i, 'plus')}><i className="lni lni-plus"></i> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>)
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
                                        <ThumbsImageSlider />
                                    </ul>
                                </div>
                                <div className="single_product_img">
                                    <div className="single_img">
                                        <ImageSlider/>
                                    </div>
                                </div>
                            </div>
                            <div className="single_product_left_mobile">
                                <div className="single_img_mobile">
                                    <MobileSlider/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="single_product_description ">
                            <h2>{productDetails ? productDetails.name : null}</h2>
                            <p>{productDetails ? productDetails.style_no : null}</p>
                            <h3>${productDetails && productDetails.price ? productDetails.price.toFixed(2) : null }</h3>
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
                                <Inventories />
                            </div>
                            <div className="pack_ratio_total_wrap">
                                <div className="row">
                                    <div className="col-4 pr_5">
                                        <div className="pack_ratio_total d_flex_btwn">
                                            <span>Total Pack</span>
                                            <span>{totalPack}</span>
                                        </div>
                                    </div>
                                    <div className="col-4 pr_5 pl_5">
                                        <div className="pack_ratio_total d_flex_btwn">
                                            <span>Total Qty</span>
                                            <span>{totalQty}</span>
                                        </div>
                                    </div>
                                    <div className="col-4 pl_5">
                                        <div className="pack_ratio_total d_flex_btwn">
                                            <span>Total Price</span>
                                            <span>${totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add_to_car_btn">
                                <div className="form-group has_error"> <small><span>{cartMessage}</span></small></div>
                                <button className="btn_common width_180p" onClick={AddToCartItem}> Add to Cart</button>
                            </div>
                            <div className="product_desc">
                                <h2>Description</h2>
                                <ul>{productDetails.description}</ul>
                                <ul className="ml_0 mt_10" dangerouslySetInnerHTML={{__html: productDetails.size_chart}}></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state)=>({
    customerDetails: state.CustomerReducer.customer,
    cartMessage: state.CartReducer.messages,
})
export default connect(mapStateToProps,{sendCustomerDetaisRequest, AddToCart})(ProductDetails)
