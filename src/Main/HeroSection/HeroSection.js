import React from 'react'
import "./HeroSection.css"
import banner1 from "../../img/banner1.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const HeroSection = () => {



    return (
        <div className="hero_section">

            <Swiper
                style={{ width: '100%', margin: 'auto' }} // Ajusta el estilo del contenedor del Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src={banner1} alt="Slide 1" style={{ width: '100%', height: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="Slide 2" style={{ width: '100%', height: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
                </SwiperSlide>
            </Swiper>

            <div className="contact mt-3 mb-5">
                <i className="fa-solid fa-phone-volume"></i>
                <span>Venta Telefonica 0800 322 2323</span>
                <i className="fa-solid fa-shop"> </i>
                <span>Sucursales</span>
            </div>
        </div>
    )
}
