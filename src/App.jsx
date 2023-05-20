import React, { useState } from "react";
import Vertical from "./components/Vertical";
import Horizontal from "./components/Horizontal";

const App = () => {
  const [carouselType, setCarouselType] = useState("Horizontal");
  const swapCarouselType = () => {
    if (carouselType === "Vertical") {
      setCarouselType("Horizontal");
    } else {
      setCarouselType("Vertical");
    }
  };
  return (
    <div>
      <button onClick={swapCarouselType}>swapCarousel</button>
      {carouselType === "Vertical" ? <Vertical /> : <Horizontal />}
    </div>
  );
};

export default App;
