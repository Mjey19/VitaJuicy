import React from "react";
import { useSwiper } from "swiper/react";
function BtnPrev() {
  const swiper = useSwiper();
  return (
    <button className="swiper-prev" onClick={() => swiper.slideNext()}>
      <img src="img/btn-prev.svg" alt="" />
    </button>
  );
}

export default BtnPrev;
