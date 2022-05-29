import React, {useEffect} from "react";
import {connect} from "react-redux";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Link, useParams} from "react-router-dom";
import Pagination from "./Pagination";

import {sendProductsRequest} from "../Services/Actions/ProductActions";
import Product from "./share/Product";
const Products = ({user, sendProductsRequest, products, loader, error, pagination})=>{
    let {category, subcategory} = useParams();
    let url = category;
    if(subcategory)
        url = url+'/'+subcategory

    const query = {
        page: 1,
        sort: 1
    }

    useEffect(()=>{
        getProduct()
    }, [category, subcategory])

    function getProduct(){
        sendProductsRequest({url:url, params:query})
    }

    const handleCallback = (link) =>{
        query.page = link.label
        getProduct()
    }
    const Loading = ()=>{
        return (
            <>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
                <div  className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding">
                    <div className="product_wrapper" >
                        <Skeleton height={550} />
                    </div>
                </div>
            </>

        )
    }
    const ShowProduct = ()=>{
        if(products && products.length) {
            return (
                products.map((product) => {
                    return (
                        <Product product={product} />
                    )
                })
            )
        }
    }
    return(
        <section className="product_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <nav aria-label="breadcrumb ">
                            <ol className="breadcrumb nz_bredcrumb">
                                <li className="breadcrumb-item"><a href="#">Women</a></li>
                                <li className="breadcrumb-item"><a href="#">New Arrivals</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Feb 10</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-12 col-md-6 d_none">
                        <div className="product_wrap_title pwr_mobile ">
                            <h2><span>NEW ARRIVALS</span> <span className="d_none"><i className="lni lni-chevron-down"></i></span></h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="product_filter">
                            <ul>
                                <li className="m_none"><span>Category</span>
                                    <div className="filter_megamenu">
                                        <div className="category_filter_wrap">
                                            <h2>Category</h2>
                                            <div className="category_filter">
                                                <div className="inner">
                                                    <ul id="left_cat" className="left_cat">
                                                        <li>
                                                            <a role="button">View All</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Booties</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Boots</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Espadrilles</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Flats</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Heels</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Mules</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Sandals</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Slippers</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="inner">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="All New Arrivals">All New
                                                                Arrivals</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 18</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 17</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 16</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 15</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 14</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 13</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Feb 12</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Last Week</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product_fliter_btn">
                                            <button className="btn">
                                                Done
                                            </button>
                                            <span>clear</span>
                                        </div>
                                    </div>
                                </li>
                                <li><span>Color</span>
                                    <div className="filter_megamenu">
                                        <h2>Color</h2>
                                        <ul className="color_filter">
                                            <li>
                                                <div className="color_checkbox">
                                                    <input type="checkbox" id="color1" name="color" />
                                                    <label htmlFor="color1">
                                                        <img
                                                            src="../images/product/single-img-thumbnail3.jpg"
                                                            alt="" className="img-fluid width_full height_full" />
                                                        <span>Color 1</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="color_checkbox">
                                                    <input type="checkbox" id="color2" name="color" />
                                                    <label htmlFor="color2">
                                                        <img
                                                            src="../images/product/single-img-thumbnail2.jpg"
                                                            alt="" className="img-fluid width_full height_full" />
                                                        <span>Color 2</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="color_checkbox">
                                                    <input type="checkbox" id="color3" name="color" />
                                                    <label htmlFor="color3">
                                                        <img
                                                            src="../images/product/single-img-thumbnail5.jpg"
                                                            alt="" className="img-fluid width_full height_full" />
                                                        <span>Color 3</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="color_checkbox">
                                                    <input type="checkbox" id="color4" name="color" />
                                                    <label htmlFor="color4">
                                                        <img
                                                            src="../images/product/single-img-thumbnail4.jpg"
                                                            alt="" className="img-fluid width_full height_full" />
                                                        <span>Color 4</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="color_checkbox">
                                                    <input type="checkbox" id="color5" name="color" />
                                                    <label htmlFor="color5">
                                                        <img
                                                            src="../images/product/single-img-thumbnail5.jpg"
                                                            alt="" className="img-fluid width_full height_full" />
                                                        <span>Color 5</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="color_checkbox">
                                                    <input type="checkbox" id="color6" name="color" />
                                                    <label htmlFor="color6">
                                                        <img
                                                            src="../images/product/single-img-thumbnail2.jpg"
                                                            alt="" className="img-fluid width_full height_full" />
                                                        <span>Color 6</span>
                                                    </label>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="product_fliter_btn">
                                            <button className="btn">
                                                Done
                                            </button>
                                            <span>clear</span>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_product_area">
                <div className="container-fluid">
                    <div className="row product_custom_margin">
                        {loader ? <Loading /> : error ? <p>Something Wrong</p> : <ShowProduct />}
                    </div>
                    <Pagination pagination={pagination} parentCallback = {handleCallback} />
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = (state) =>({
    user: state.AuthReducer.user,
    products: state.ProductReducers.products,
    error: state.ProductReducers.error,
    loader: state.ProductReducers.loader,
    pagination: state.ProductReducers.pagination
})
export default connect(mapStateToProps, {sendProductsRequest}) (Products)
