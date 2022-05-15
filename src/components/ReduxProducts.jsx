import React, {useEffect} from "react";
import {connect} from "react-redux";
import {sendProductsRequest} from "../Services/Actions/ProductActions";

const ReduxProducts = ({sendProductsRequest, products, loader, error}) =>{
    useEffect(()=>{
        sendProductsRequest({url:'bestofbest'});
    }, [])
    return (
        <div>
        {
            loader ? <p>Loading....</p>: error ? <p>{error}</p> : <div>{
                products.map(product =>{
                    return <p key={'new-'+product.id}>{product.name}</p>
                })
            }
            </div>
        }
        </div>
    )
}
const mapStateProps = (state)=>({
    products: state.ProductReducers.products,
    error: state.ProductReducers.error,
    loader: state.ProductReducers.loader
})
export default connect(mapStateProps, {sendProductsRequest})(ReduxProducts)
