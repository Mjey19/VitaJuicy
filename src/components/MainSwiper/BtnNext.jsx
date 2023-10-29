import React from "react";
import { useSwiper } from "swiper/react";
function BtnNext() {
  const swiper = useSwiper();
  return (
    <button className="swiper-next" onClick={() => swiper.slidePrev()}>
      <img src="img/btn-next.svg" alt="" />
    </button>
  );
}

export default BtnNext;
