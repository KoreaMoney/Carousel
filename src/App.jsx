import React, { useState } from "react";
import Selo from "./components/Selo";
import Galo from "./components/Galo";

const App = () => {
  const [carouselType, setCarouselType] = useState("selo");
  const handleChangeCarouselType = (type) => {
    setCarouselType(type);
  };
  return (
    <div>
      <button onClick={() => handleChangeCarouselType("selo")}>
        세로 슬라이드
      </button>
      <button onClick={() => handleChangeCarouselType("galo")}>
        가로 슬라이드
      </button>
      {carouselType === "selo" && <Selo />}
      {carouselType === "galo" && <Galo />}
      <div>여기는 캐러셀 시작하는 구간입니다</div>
    </div>
  );
};

export default App;
