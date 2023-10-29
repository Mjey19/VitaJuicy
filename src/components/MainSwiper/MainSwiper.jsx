import React from "react";
import "./MainSwiper.scss";
import BtnNext from "./BtnNext";
import BtnPrev from "./BtnPrev";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MainSwiper() {
  return (
    <div className="main-swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiper-backgr" src="img/mainswiper1.png" alt="" />
          <div className="swiper-inner">
            <img src="img/maintxt.png" alt="" />
            <img src="img/swiperprice.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-backgr" src="img/mainswiper1.png" alt="" />
          <div className="swiper-inner">
            <img src="img/maintxt.png" alt="" />
            <img src="img/swiperprice.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-backgr" src="img/mainswiper1.png" alt="" />
          <div className="swiper-inner">
            <img src="img/maintxt.png" alt="" />
            <img src="img/swiperprice.png" alt="" />
          </div>
        </SwiperSlide>
        <div className="swiper-btn-inner">
          <div className="swiper-arrow_block">
            <BtnNext />
            <BtnPrev />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default MainSwiper;
