import React from "react";
const Footer = ()=>{
    return (
        <footer className="footer_area">
            <div className="container custom_container">
                <div className="row m_none">
                    <div className="col-sm-3">
                        <div className="footer_inner">
                            <h2>SIZE GUIDE & STOCKISTS</h2>
                            <ul>
                                <li><a href="#">Size Guide</a></li>
                                <li><a href="#">Our Stockists</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="footer_inner">
                            <h2>SHIPPING & RETURNS</h2>
                            <ul>
                                <li><a href="#">Shipping & Payment</a></li>
                                <li><a href="#">Return Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="footer_inner">
                            <h2>CONTACT</h2>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Gift Card</a></li>
                                <li><a href="#">Code of Conduct</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="footer_inner">
                            <h2>JOIN US</h2>
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row d_none">
                    <div className="col-sm-12">
                        <div className="footer_inner">
                            <ul className="footer_menu_mobile">
                                <li data-toggle="collapse" data-target="#f1" className="collapsed">
                                    SIZE GUIDE & STOCKISTS
                                </li>
                                <div className="sub-menu collapse clearfix" id="f1">
                                    <ul>
                                        <li><a href="#">Size Guide</a></li>
                                        <li><a href="#">Our Stockists</a></li>
                                    </ul>
                                </div>
                                <li data-toggle="collapse" data-target="#f2" className="collapsed">
                                    SHIPPING & RETURNS
                                </li>
                                <div className="sub-menu collapse clearfix" id="f2">
                                    <ul>
                                        <li><a href="#">Shipping & Payment</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                    </ul>
                                </div>
                                <li data-toggle="collapse" data-target="#f3" className="collapsed">
                                    CONTACT
                                </li>
                                <div className="sub-menu collapse clearfix" id="f3">
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Gift Card</a></li>
                                        <li><a href="#">Code of Conduct</a></li>
                                    </ul>
                                </div>
                                <li data-toggle="collapse" data-target="#f4" className="collapsed">
                                    JOIN US
                                </li>
                                <div className="sub-menu collapse clearfix" id="f4">
                                    <ul>
                                        <li>
                                             
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="footer_copyright">
                            <p>
                                Copyright © 2021 <a href="/" title="">Naked zebra </a> • SITE BY
                                <a href="#" target="_blank">lynkto.net</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
