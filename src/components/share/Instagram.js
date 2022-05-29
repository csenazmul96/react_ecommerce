import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import axios from "../../api/axios";

export const Instagram = () =>{
    const [showInstaModal, setshowInstaModal] = useState(false);
    const [instagramFeeds, setInstagrams] = useState([]);
    const [instaDetails, setInstaDetails] = useState([]);
    useEffect(()=>{
        getInstagram();
    }, [])
    const instagramSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    function getInstagram(){
        axios.get('/instagram/feeds')
            .then(
                (response) => {
                    let instagramFeeds = response.data.data
                    if (instagramFeeds.length)
                        instagramFeeds = instagramFeeds.slice(0, 10)

                    setInstagrams(instagramFeeds)
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
    function showDetails(insta){
        setInstaDetails(insta)
        setshowInstaModal(true)
    }
    const InstagramSlider = ()=>{
        if(instagramFeeds && instagramFeeds.length) {
            return (<Slider {...instagramSliderSettings}>
                {instagramFeeds.map((insta, i) => {
                    return (<div className="instagram_inner" data-toggle="modal" data-target="#instamodal"  key={'insta'+i}>
                        {!insta.children ? (
                            (insta.media_type === 'IMAGE' || insta.media_type === 'CAROUSEL_ALBUM') ? (
                                <img src={insta.media_url} alt="" className="img-fluid"/>
                            ) : (
                                <video v-else id='video' loop muted preload="metadata" width="100%" height="100%" className="embed-responsive-item" autoPlay playsInline>
                                    <source src={insta.media_url} />
                                </video>
                            )
                        ) : ( insta.children && insta.children.data.length && (insta.children.data[0].media_type === 'IMAGE' || insta.children.data[0].media_type === 'CAROUSEL_ALBUM')) ? (
                            <img src={insta.children.data[0].media_url} alt="" className="img-fluid"/>
                        ) : (
                            <video v-else id='video' loop muted preload="metadata" width="100%" height="100%" className="embed-responsive-item" autoPlay playsInline>
                                <source src={insta.children.data[0].media_url} />
                            </video>
                        ) }
                        <span onClick={e=> {showDetails(insta)}}><i className="lni lni-instagram"></i></span>
                    </div>)
                })}
            </Slider>)
        }
    }
    if(instagramFeeds && instagramFeeds.length) {
        return (
            <>
                <section className="instagram_area">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="main_title">
                                    <h2><span>SHOP</span> <a href="#">THE GRAM</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="insta_slider">
                                    <InstagramSlider/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={`modal fade ${showInstaModal ? 'show': null}`} style={showInstaModal ? {display: 'block'} : null} id="instamodal" tabIndex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered insta_modal" role="document">
                        <div className="modal-content">
                            <span className="close_icon" data-dismiss="modal" aria-label="Close" onClick={e=>{setshowInstaModal(false)}}></span>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="insta_modal_left">
                                                <img src={instaDetails.media_url} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="instaModaltext">
                                                <p>{instaDetails.caption}</p>
                                                <a target="_blank" href={instaDetails.permalink}>Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Instagram.propTypes = {};

export default Instagram;
