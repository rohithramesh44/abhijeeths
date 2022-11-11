import React from "react";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
//images for this website;
import scroll_1 from "../Img/scroll-1.jpg";
import scroll_2 from "../Img/scroll-2.jpg";
import scroll_3 from "../Img/scroll-3.jpg";
import scroll_4 from "../Img/scroll-4.jpg";
import scroll_5 from "../Img/scroll-5.jpg";
import scroll_6 from "../Img/scroll-6.jpg";

function Slider() {
  return (
    <ScrollImg>
      <ScrollRow>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          //   centerInsufficientSlides={true}
          autoplay={{
            delay: 2500,
            autoplayStopOnLast: false,
            // pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            576: {
              slidesPerView: 1.7,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={scroll_1} alt="My Updated Work pic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={scroll_2} alt="My Updated Work pic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={scroll_3} alt="My Updated Work pic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={scroll_4} alt="My Updated Work pic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={scroll_5} alt="My Updated Work pic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={scroll_6} alt="My Updated Work pic" />
          </SwiperSlide>
        </Swiper>
      </ScrollRow>
    </ScrollImg>
  );
}
const ScrollImg = styled.section``;
const ScrollRow = styled.div`
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default Slider;
