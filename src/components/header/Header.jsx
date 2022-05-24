import React, {useState, useEffect} from "react";
import logo from '../../images/logo.png'
import classes from './Header.module.css'
import { Link } from "react-router-dom";
import axios from '../../api/axios';

import {sendCustomerDetaisRequest} from "../../Services/Actions/CustomerAction";
import {connect} from "react-redux";

const Header = ({customerDetails, sendCustomerDetaisRequest}) =>{
    const [categories, setData] = useState([])
    useEffect(()=>{
        sendCustomerDetaisRequest()
        getCategory()
    }, [])

    const getCategory = ()=>{
        axios.get('/categories').then((response)=>{
            if(response?.data?.data){
                setData(response.data.data)
                Category()
            }
        })
    }

    const Category = () =>{
        return (
            categories.map((product)=>{
                return(
                    <li key={'key_'+product.id.toString()}>
                        <Link to={`category/${product.slug}`}>{product.name}</Link>
                        { product.sub_categories.length ? (
                            <div className="megamenu">
                                <ul>
                                    <SubCategory subcat={product.sub_categories} parent={product.slug} />
                                </ul>
                            </div>
                        ) : null }
                    </li>
                )
            })
        )
    }
    const SubCategory = ({subcat, parent}) =>{
        return (
            subcat.map((product)=>{
                return(
                    <li key={'key_sub_'+product.id.toString()}><Link to={`category/${parent}/${product.slug}`}>{product.name}</Link></li>
                )
            })

        )
    }
    return  (
        <header className="header_area fixed-top" id="header_area">
            <div className="header_top">
                <div className="header_top_dropdown">
                    <ul>
                        <li className="header_search_icon above_ipad">
                            <i className="la la-search" aria-hidden="true"></i> SEARCH
                        </li>
                        <li>
                            <a href="#"><i className="lni lni-heart"></i> MY FAVORITES <span>12</span> </a>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    Hi , <b>{customerDetails ? customerDetails.name : null}</b>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">My naked zebra</a>
                                    <a className="dropdown-item" href="#">Order History</a>
                                    <a className="dropdown-item" href="#">Reorders</a>
                                    <a className="dropdown-item" href="#">My Settings</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid above_ipad">
                <div className="row">
                    <div className="col-md-12">

                    </div>
                    <div className="col-md-12">
                        <div className="main_nav">
                            <div className="logo d_flex_center">
                                <Link to="/">
                                    <img src={logo} alt="" className={classes.logo + ' img-fluid'} />
                                </Link>
                            </div>
                            <ul className="header_menu">
                                <Category />
                            </ul>
                            <div className="header_cart">
                                <ul>

                                    <li>
                                        <Link to="/login">About</Link>
                                    </li>
                                    <li>
                                        <a href="#"><i className="lni lni-heart"></i> MY FAVORITES <span>12</span> </a>
                                    </li>
                                    <li className="profile_ic"><a href="#">
                                        <svg height="15px" viewBox="-35 0 512 512.00102" width="15px"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/>
                                        </svg>
                                        MY BAG <span>5</span> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid below_ipad">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile_nav_wrap">
                            <div className="toggler">
                                <i className="la la-bars" aria-hidden="true"></i>
                            </div>
                            <Link to="/" className="mobile_logo">
                                <img src={logo} alt="" className={[classes.logo, 'img-fluid'].join(' ')} />
                            </Link>
                            <div className="header_cart">
                                <ul>
                                    <svg height="15px" viewBox="-35 0 512 512.00102" width="15px"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/>
                                    </svg>
                                    <span>5</span>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_search">
                <div className="header_search_inner">
                    <form action="#">
                    </form>
                </div>
            </div>
        </header>
    )
}
const mapStateToProps = (state)=>({
    customerDetails: state.CustomerReducer.customer
})
export default connect(mapStateToProps, {sendCustomerDetaisRequest})(Header)
