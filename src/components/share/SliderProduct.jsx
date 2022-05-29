import React from 'react';
import {Link} from "react-router-dom";

export const SliderProduct = ({product}) =>{
    return (
        <div>
            <div className="slider_inner">
                <div className="product_wrapper">
                    <Link to={`/product/${product.slug}`}>
                        <div className="main_product_img">
                            <img src={product.images[0].compressed_image} className="img-fluid" alt=""/>
                            <img src={product.images[1].compressed_image} className="img_hover" alt=""/>
                        </div>
                    </Link>
                    <div className="main_product_text">
                        <h2><Link to={`/product/${product.slug}`}>{product.name}</Link></h2>
                        <p>${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

SliderProduct.propTypes = {};

export default SliderProduct;
