import React, { useState } from 'react'
import '../../css/Section.css'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionPiece from './section-components/SectionPiece';

export default function Section() {

  return (
    <section className='section-container'>

        <SectionPiece />

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


        <div className="follow-insta">
            <div className="insta-header">
                <h1>Follow Us On Instagram</h1>
                <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. 
                Scelerisque duis ultrices sollicitudin aliquam sem. 
                Scelerisque duis ultrices sollicitudin 
                </p>
            </div>

            <div className="insta-images">
                <img src="../img/instapic.png" alt="#" />
                <img src="../img/instapic2.png" alt="#" className='smaller-pics'/>
                <img src="../img/instapic3.png" alt="#" />
                <img src="../img/instapic4.png" alt="#" className='smaller-pics'/>
                <img src="../img/instapic5.png" alt="#" />
            </div>
        </div>


        <div className="customer-review">

            <div className="customer-header">
                <h1>This Is What Our Customers Say</h1>
                <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Scelerisque duis
                </p>
            </div>

            <div className="review-slide-container">
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
                loop={true}
                className='review-swiper'
                >
                    <SwiperSlide>
                        <img src="../img/instapic.png" alt="item" className='customer-img'/>
                        <div className="review-info">
                            <p classname='review-describe'>
                            "You won't regret it. 
                            I would like to personally thank you for 
                            your outstanding product. Absolutely wonderful!"
                            </p>
                            <div></div>
                            <h1 className="review-name">James</h1>
                            <p>Traveler</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="../img/instapic.png" alt="item" className='customer-img'/>
                        <div className="review-info">
                            <p classname='review-describe'>
                            "You won't regret it. 
                            I would like to personally thank you for 
                            your outstanding product. Absolutely wonderful!"
                            </p>
                            <div></div>
                            <h1 className="review-name">James</h1>
                            <p>Traveler</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="../img/instapic.png" alt="item" className='customer-img'/>
                        <div className="review-info">
                            <p classname='review-describe'>
                            "You won't regret it. 
                            I would like to personally thank you for 
                            your outstanding product. Absolutely wonderful!"
                            </p>
                            <div></div>
                            <h1 className="review-name">James</h1>
                            <p>Traveler</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="../img/instapic.png" alt="item" className='customer-img'/>
                        <div className="review-info">
                            <p classname='review-describe'>
                            "You won't regret it. 
                            I would like to personally thank you for 
                            your outstanding product. Absolutely wonderful!"
                            </p>
                            <div></div>
                            <h1 className="review-name">James</h1>
                            <p>Traveler</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>



        <div className="footer-section-models">
            <img src="../img/boymodel.png" alt="#" />
            <div className="footer-model-text">
                <div>
                    <h1>Subscribe To Our Newsletter</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Scelerisque duis ultrices sollicitudin aliquam sem. 
                    Scelerisque duis ultrices sollicitudin 
                    </p>
                    <h2 className="email">michael@ymail.com</h2>
                </div>

                <button>Subscribe Now</button>
            </div>
            <img src="../img/girlmodel.png" alt="#" />
        </div>

    </section>
  )
}
