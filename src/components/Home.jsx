import React from "react";
import {useSelector, useDispatch} from "react-redux";

const Home = ()=>{
    const user = useSelector(state => state.AuthReducer.user)
    return(
        <>
            <div className="full_screen_overlay"></div>
            <section className="banner_area">
                <div className="banner_slider">
                    <div className="banner_slider_inner">
                        <a href="#"><img src="../images/banner3.jpg" alt="" className="img-fluid" /></a>
                        <p>{user ? user.name : null}</p>
                    </div>
                </div>
            </section>
            <section className="home_collection main_product_area mt-4">
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main_title">
                                <h2><span>SHOP</span> <a href="#">the gram </a></h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="product_wrapper">
                                <a href="#">
                                    <div className="main_product_img">
                                        <img src="../images/productnew/product-6.jpg" className="img-fluid" alt="" />
                                    </div>
                                </a>
                                <div className="main_product_text">
                                    <h2><a href="#">Dream Catcher Midi Dress</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="product_wrapper">
                                <a href="#">
                                    <div className="main_product_img">
                                        <img src="../images/productnew/product-7.jpg" className="img-fluid" alt="" />
                                    </div>
                                </a>
                                <div className="main_product_text">
                                    <h2><a href="#">Dream Catcher Midi Dress</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="product_wrapper">
                                <a href="#">
                                    <div className="main_product_img">
                                        <img src="../images/productnew/product-8.jpg" className="img-fluid" alt="" />
                                    </div>
                                </a>
                                <div className="main_product_text">
                                    <h2><a href="#">Dream Catcher Midi Dress</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="product_wrapper">
                                <a href="#">
                                    <div className="main_product_img">
                                        <img src="../images/productnew/product-9.jpg" className="img-fluid" alt="" />
                                    </div>
                                </a>
                                <div className="main_product_text">
                                    <h2><a href="#">Dream Catcher Midi Dress</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
