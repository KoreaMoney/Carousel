import React, { useState } from "react";
import "../src/styles/app.css";

import VerticalSlide from "./components/VerticalSlide";
import HorizontalSlide from "./components/HorizontalSlide";

const App = () => {
  const [carouselType, setCarouselType] = useState("verticalSlide");
  const handleToggleCarousel = () => {
    if (carouselType === "verticalSlide") {
      setCarouselType("horizontalSlide");
    } else {
      setCarouselType("verticalSlide");
    }
  };
  return (
    <div>
      <button onClick={handleToggleCarousel}>
        {carouselType === "verticalSlide" ? "가로 슬라이드" : "세로 슬라이드"}
      </button>
      {carouselType === "verticalSlide" ? (
        <VerticalSlide />
      ) : (
        <HorizontalSlide />
      )}
      <div>여기는 캐러셀 시작하는 구간입니다</div>
    </div>
  );
};

export default App;
