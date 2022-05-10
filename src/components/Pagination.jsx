import React from "react";
import {Link} from "react-router-dom";

const Pagination = ({pagination, parentCallback})=>{
    const Links = (links) => {
        parentCallback(links)
    }


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="pagination_global">
                    <div className="product_pagination">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination d_flex_center">
                                <li className="page-item">
                                    <a className="page-link" href="#" tabIndex="-1"><i className="lni lni-chevron-left"></i></a>
                                </li>
                                { pagination && pagination.links ? pagination.links.map((product)=>{
                                    return(
                                        <li key={'pagi_'+product.label} className="page-item" onClick={() => Links(product)}>
                                            <a className="page-link" role="button" >{product.label}</a>
                                        </li>
                                    )
                                }) : null}
                                <li className="page-item">
                                    <a className="page-link" href="#"><i
                                        className="lni lni-chevron-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
