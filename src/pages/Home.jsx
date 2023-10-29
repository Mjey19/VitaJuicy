import React from "react";

import Hits from "../components/Hits/Hits";
import MainSwiper from "../components/MainSwiper/MainSwiper";
import MyProduct from "../components/MyProduct/MyProduct";
function Home() {
  return (
    <div>
      <MainSwiper />
      <MyProduct />
      <Hits />
    </div>
  );
}

export default Home;
