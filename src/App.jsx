import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import {
    Routes,
    Route,
} from "react-router-dom";

function App() {

    return (
        <div className="App" id="wrapper">
            <Header />
            <Routes>
                <Route path={'/'} index element={<Home />} />
                <Route path={'products/:category'} element={<Products />} />
            </Routes>
            <Footer />
        </div>
    );

}


export default App;
