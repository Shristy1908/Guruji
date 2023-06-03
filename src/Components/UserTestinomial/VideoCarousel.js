//import { Carousel } from "react-bootstrap/Carousel";
import Carousel from 'react-bootstrap/Carousel';
import video1 from "../../media/testimonial1.png";
import video2 from "../../media/testimonial2.png";
import video3 from "../../media/testimonial3.png";
import video4 from "../../media/testimonial4.png";
import "./VideoCarousel.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow,Pagination,Navigation, Controller } from 'swiper'; 
import { Container } from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';

const carousel=[
    {
       img:video1,
    },
    {
        img:video2,
     },
     {
        img:video2,
     },
     {
        img:video3,
     },
     {
        img:video3,
     },

]

function VideoCarousel(){

    return (
        <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
           {
             carousel.map((image)=>{
             return(
                <SwiperSlide className="swiperSlide">
                    <img src={image.img}/>
                </SwiperSlide>
            )
            })
           }
    
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
       )
   
}
export default VideoCarousel







