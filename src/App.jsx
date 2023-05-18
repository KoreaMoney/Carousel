import React, { useState } from "react";
import "../src/styles/app.css";

import Selo from "./components/Selo";
import Galo from "./components/Galo";

const App = () => {
  const [carouselType, setCarouselType] = useState("selo");
  const handleToggleCarousel = () => {
    if (carouselType === "selo") {
      setCarouselType("galo");
    } else {
      setCarouselType("selo");
    }
  };
  return (
    <div>
      <button onClick={handleToggleCarousel}>
        {carouselType === "selo" ? "가로 슬라이드" : "세로 슬라이드"}
      </button>
      {carouselType === "selo" ? <Selo /> : <Galo />}
      <div>여기는 캐러셀 시작하는 구간입니다</div>
    </div>
  );
};

export default App;
