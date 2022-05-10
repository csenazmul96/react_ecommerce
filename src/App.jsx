import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import {Routes, Route, useLocation} from "react-router-dom";
import Login from "./components/Auth/Login";

function App() {
    return (
        <div className="App" id="wrapper">
            { useLocation().pathname != '/login' ? <Header /> : null }
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route name="login" path="login" element={<Login />} />
                <Route path="products/:category" element={<Products />} />
            </Routes>
            <Footer />
        </div>
    );

}


export default App;
