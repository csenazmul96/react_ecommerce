import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import {Routes, Route, useLocation} from "react-router-dom";
import Login from "./components/Auth/Login";
import React, {useLayoutEffect} from "react";
import Cart from "./components/Cart";
function App() {
    useLayoutEffect(() => {
        window.addEventListener('resize', getHeaderHeight);
        getHeaderHeight();
    }, []);

    const getHeaderHeight= () =>{
        let headerHeight = document.getElementById('header_area') ? document.getElementById('header_area').clientHeight: null
        if(headerHeight)
            document.getElementById('margin_top').style.marginTop = ""+headerHeight+"px"
    }

    return (
        <div className="App" id="wrapper">
            { useLocation().pathname != '/login' ? <Header /> : null }
            <div id="margin_top"></div>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route name="login" path="login" element={<Login />} />
                <Route path="category/:category" element={<Products />} />
                <Route path="category/:category/:subcategory" element={<Products />} />
                <Route path="product/:slug" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );

}


export default App;
