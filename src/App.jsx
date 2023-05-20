import React, { useState } from "react";
import "../src/styles/app.css";

import VerticalSlide from "./components/VerticalSlide";
import HorizontalSlide from "./components/HorizontalSlide";
import { Button } from "@mantine/core";

const App = () => {
  //[State관리]
  const [carouselType, setCarouselType] = useState("verticalSlide");
  //[Button관리]
  const handleToggleCarousel = () => {
    if (carouselType === "verticalSlide") {
      setCarouselType("horizontalSlide");
    } else {
      setCarouselType("verticalSlide");
    }
  };
  return (
    <div>
      <div className="mainSwitchBox">
        <Button onClick={handleToggleCarousel} className="mainSwitchBtn">
          {carouselType === "verticalSlide" ? "가로 슬라이드" : "세로 슬라이드"}
        </Button>
      </div>
      {carouselType === "verticalSlide" ? (
        <VerticalSlide />
      ) : (
        <HorizontalSlide />
      )}
    </div>
  );
};

export default App;
