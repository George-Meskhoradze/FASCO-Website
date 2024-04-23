import React, { useState } from 'react'
import '../../css/Section.css'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Timer from './section-components/Timer';
import Outfit from './section-components/Outfit';

export default function Section() {

    const [active, setActive] = useState("ManFashion")

    const handleActiveClick = (item) => {
        setActive(item)
    }


  return (
    <section className='section-container'>

        <div className="box-container">

            <div className="box-one">
                <img src="../img/black-person.png" alt="person" />
            </div>

            <div className="box-two">
                <div className="box-first">
                    <img src="../img/girls.png" alt="girls" />
                </div>
                <div className="box-second">
                    <h1 className='second-h1'>ULTIMATE</h1>
                    <h1 className='second-h1-two'>SALE</h1>
                    <h1 className='second-h1-three'>NEW COLLECTION</h1>
                    <Link className='shop-button-main'>Shop Now</Link>
                </div>
                <div className="box-third"></div>
            </div>

            <div className="box-three">
                <img src="../img/curly.png" alt="person" />
            </div>

        </div>


        <div className="images-box">
            <img src="../img/channel.png" alt="logo" />
            <img src="../img/louis.png" alt="logo" />
            <img src="../img/prada.png" alt="logo" />
            <img src="../img/Calvin.png" alt="logo" />
            <img src="../img/denim.png" alt="logo" />
        </div>

        <div className="section-three">

            <div className="three-section-container">

                <div className="left-stuff-container">

                    <div className="box-for-text">

                        <h1>Deals Of The Month</h1>

                        <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. 
                        Scelerisque duis ultrices sollicitudin aliquam sem. 
                        Scelerisque duis ultrices sollicitudin 
                        </p>

                        <button className='buy-btn'>Buy Now</button>

                    </div>

                    <div className="time-box-container">
                        
                        <h1>Hurry, Before It’s Too Late!</h1>

                       <Timer />

                    </div>

                </div>

                <div className="right-slide-container">
                    <Swiper
                    modules={[Pagination]}
                    slidesPerView={3}
                    spaceBetween={160}
                    pagination={{clickable: true}}
                    loop={true}
                    className='swiper'
                    >
                        <SwiperSlide><img src="../img/fashion1.jpg" alt="item" className='swiperimg'/></SwiperSlide>
                        <SwiperSlide><img src="../img/fashion2.jpg" alt="item" className='swiperimg'/></SwiperSlide>
                        <SwiperSlide><img src="../img/fashion3.jpg" alt="item" className='swiperimg'/></SwiperSlide>
                        <SwiperSlide><img src="../img/fashion4.jpg" alt="item" className='swiperimg'/></SwiperSlide>
                        <SwiperSlide><img src="../img/fashion5.jpg" alt="item" className='swiperimg'/></SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </div>

        <div className="outfits">
            <div className="outfit-container">

                <div className="outfit-header">
                    <h1>New Arrvivals</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque duis ultrices sollicitudin aliquam sem.
                    Scelerisque duis ultrices sollicitudin 
                    </p>
                </div>

                <nav className='outfit-navbar'>
                    <ul>
                        <li className={active === 'ManFashion' ? 'active' : 'unactive'} onClick={() => handleActiveClick("ManFashion")}>Men's Fashion</li>
                        <li className={active === 'WomenFashion' ? 'active' : 'unactive'} onClick={() => handleActiveClick("WomenFashion")}>Women's Fashion</li>
                        <li className={active === 'ManAccess' ? 'active' : 'unactive'} onClick={() => handleActiveClick("ManAccess")}>Man Accessories</li>
                        <li className={active === 'WomenAccess' ? 'active' : 'unactive'} onClick={() => handleActiveClick("WomenAccess")}>Woman Accessories</li>
                        <li className={active === 'Discount' ? 'active' : 'unactive'} onClick={() => handleActiveClick("Discount")}>Discount Deals</li>
                    </ul>
                </nav>

                <div className="outfit-collectionOne-container">
                    <div className="outfit-collection">
                        <Outfit />
                        <Outfit />
                        <Outfit />
                        <Outfit />
                    </div>

                    <div className="show-more-button">
                        Show More
                    </div>
                </div>

            </div>
        </div>


        <div className="blinders">
            <div className='first-blinders'>
                <img src="../img/modern-girl.png" alt="#" />
            </div>
            <div className='second-blinders'>
                <div className="blinders-text-container">
                    <h1 className='blinder-woman-collection'>Woman Collection</h1>
                    <h1 className='blinder-text-header'>Peaky Blinders</h1>
                    <h1 className='blinder-text-description'>Description</h1>
                    <h1 className='blinder-description'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Scelerisque duis ultrices sollicitudin aliquam sem. 
                    Scelerisque duis ultrices sollicitudin. 
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Scelerisque duis.
                    </h1>
                    <div className='Size'>
                        <h1>Size</h1>
                        <div>
                            <p>M</p>
                        </div>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>


        <div className="info-about">
            <div className="info-child">

                <div className="info-container">
                    <img src="../img/hand.png" alt="#" className="info-first-child"/>
                    <div>
                        <h1 className="info-second-child">High Quality</h1>
                        <h1 className="info-third-child">crafted from top materials</h1>
                    </div>
                </div>

                <div className="info-container">
                    <img src="../img/badge.png" alt="#" className="info-first-child"/>
                    <div>
                        <h1 className="info-second-child">Warrany Protection</h1>
                        <h1 className="info-third-child">Over 2 years</h1>
                    </div>
                </div>

                <div className="info-container">
                    <img src="../img/box.png" alt="#" className="info-first-child"/>
                    <div>
                        <h1 className="info-second-child">Free Shipping</h1>
                        <h1 className="info-third-child">Order over 150 $</h1>
                    </div>
                </div>

                <div className="info-container">
                    <img src="../img/call.png" alt="#" className="info-first-child"/>
                    <div>
                        <h1 className="info-second-child">24 / 7 Support</h1>
                        <h1 className="info-third-child">Dedicated support</h1>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}
