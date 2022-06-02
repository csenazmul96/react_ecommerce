import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from '../api/axios';
import Slider from "react-slick";
import SliderProduct from "./share/SliderProduct";
import Instagram from "./share/Instagram";
const Home = ()=>{
    const user = useSelector(state => state.AuthReducer.user)
    const [sliders, setSlider] = useState([]);
    const [newInItems, setNewInItems] = useState([]);
    const [widgets, setWidgets] = useState([]);
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    };
    const newInSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    const [sections1, setSections1] = useState(null)
    const [sections2, setSections2] = useState(null)
    const [sections3, setSections3] = useState(null)
    const [sections4, setSections4] = useState(null)
    useEffect(()=>{
        getSlider();
        getNewInItems();
        getWidgets();
        customSections();
    }, [])
    function getSlider(){
        axios.get('/sliders/desktop')
            .then(
                (result) => {
                    setSlider(result.data.data)
                })
    }
    function customSections(){
        axios.get('/custom-section', {params: {types: JSON.stringify([2,3,1,5])}})
            .then((response) => {
                let resData = response.data.data
                resData.forEach(element => {
                    if(element.type == 1 && element.content !='' ) setSections1(element)
                    if(element.type == 2 && element.content !='' ) setSections2(element)
                    if(element.type == 3 && element.content !='' ) setSections3(element)
                    if(element.type == 5 && element.content !='' ) setSections4(element)
                });
            })
    }
    function getNewInItems(){
        axios.get('/home/selected/items')
            .then(
                (result) => {
                    setNewInItems(result.data)
                })
    }

    function getWidgets(){
        axios.get('/get/feature/widget')
            .then(
                (result) => {
                    let data = [];
                    if(result.data && result.data.top && result.data.top.length) {
                        for (let i = 0; i <= 3; i++) {
                            data.push(result.data.top[i])
                        }
                    }
                    setWidgets(data)
                })
    }
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (<button onClick={onClick} className='arrow_left slick-arrow'><i className='lni lni-chevron-left'></i ></button>);
    }

    function SamplePrevArrow(props) {
        const {onClick } = props;
        return (<button onClick={onClick} className='arrow_right slick-arrow'><i className='lni lni-chevron-right'></i></button>);
    }
    const MainSlider = ()=>{
        return (<Slider {...sliderSettings}>
            {sliders.map((img, i)=>{
                return (<div className="banner_slider_inner" key={'main_slider'+i}>
                    <a href="#"><img src={img.image} alt="" className="img-fluid" /></a>
                </div>)
            })}
        </Slider>)
    }

    const NewInSlider = ()=>{
        if(newInItems && newInItems.length) {
            return (<Slider {...newInSliderSettings}>
                {newInItems.map((img, i) => {
                    return (<SliderProduct product={img} key={'new_in' + i}></SliderProduct>)
                })}
            </Slider>)
        } else {
            return null
        }
    }
    const Widgets = ()=>{
        if(widgets && widgets.length) {
            return (
                widgets.map((img, i) => {
                    return (<div className="col-12 col-md-4 col-lg-3" key={'widget'+i}>
                        <div className="product_wrapper">
                            <a href="#">
                                <div className="main_product_img">
                                    <img src={img.image} className="img-fluid" alt=""/>
                                </div>
                            </a>
                            <div className="main_product_text">
                                <h2><a href="#">{img.title}</a></h2>
                            </div>
                        </div>
                    </div>)
                })
            )
        }
    }
    const Sections1 = ()=>{
        if(sections1) {
            return (
                <section className="home_collection sections1 main_product_area mt-4">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product_wrapper" dangerouslySetInnerHTML={{__html: sections1.content}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
    const Sections2 = ()=>{
        if(sections2) {
            return (
                <section className="home_collection sections2 main_product_area mt-4">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="main_title">
                                    <h2><span>About Us</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="product_wrapper" dangerouslySetInnerHTML={{__html: sections2.content}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
    const Sections3 = ()=>{
        if(sections3) {
            return (
                <section className="home_collection sections3 main_product_area mt-4">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product_wrapper main_title" dangerouslySetInnerHTML={{__html: sections3.content}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
    const Sections4 = ()=>{
        if(sections4) {
            return (
                <section className="home_collection main_product_area section4 mb-0 mt-4">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product_wrapper mb-0 pb-0" dangerouslySetInnerHTML={{__html: sections4.content}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
    return(
        <>
            <div className="full_screen_overlay"></div>
            <section className="banner_area">
                <div className="banner_slider">
                    <MainSlider />
                </div>
            </section>
            <section className="new_arrival_area">
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main_title">
                                <h2><span>SHOP</span> <a href="#">NEW ARRIVALS</a></h2>
                            </div>
                            <div className="common_product_slider main_product_area">
                                <NewInSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {widgets && widgets.length ? (
                <section className="home_collection main_product_area mt-4">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="main_title">
                                    <h2><span>Inspired by</span> <a href="#"> Dani & Dani Wholesale Clothing</a></h2>
                                </div>
                            </div>
                            <Widgets />
                        </div>
                    </div>
                </section>) : null }
            {Sections1 ? (<Sections1 /> ) : null }
            {Sections2 ? (<Sections2 /> ) : null }
            {Sections3 ? (<Sections3 /> ) : null }
            {Sections4 ? (<Sections4 /> ) : null }


            {/*<Instagram />*/}
        </>
    )
}

export default Home
