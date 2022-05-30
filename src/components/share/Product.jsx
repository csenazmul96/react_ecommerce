import React from 'react';
import {Link} from "react-router-dom";

export const Product = ({product}) =>{
    return (
        <div className="col-6 col-md-6 col-lg-4 col-xl-3 product_custom_padding" key={'product_list_' + product.id.toString()}>
            <div className="product_wrapper">
                <Link to={`/product/${product.slug}`}>
                    <div className="main_product_img">
                        <img src={product.images[0].compressed_image} className="img-fluid" alt=""/>
                    </div>
                </Link>
                <div className="main_product_text">
                    {product && product.name ? (<h2><a href="#"> {product.name.substring(0, 100)} </a></h2>) : null}
                    {product.orig_price_formatted ? (<p>${product.price_formatted}</p>)
                        : ( <p><span className="update_price">${product.price_formatted}</span> <span className="line_through">${product.orig_price_formatted}</span></p>)}

                </div>
                {/*<ul className="color_variation">*/}
                {/*    <li className="active"><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*    <li><span></span></li>*/}
                {/*</ul>*/}
            </div>
        </div>
    );
}

Product.propTypes = {};

export default Product;
