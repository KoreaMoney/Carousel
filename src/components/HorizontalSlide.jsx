import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Progress, rem } from "@mantine/core";
import { Image } from "@mantine/core";
import "../styles/horizontalSlide.css";

import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.webp";

const images = [pic1, pic2, pic3, pic4, pic5];

const HorizontalSlide = () => {
  //[State관리]
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);

  //[Slide이미지 정렬]
  const slides = images?.map((url) => (
    <Carousel.Slide key={url}>
      <div style={{ pointerEvents: "none" }}>
        <Image src={url} />
      </div>
    </Carousel.Slide>
  ));

  //[스크롤 진행 표시기 관리]
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  //[ResizeObserver 실행을 제어하기 위한 useEffect 추가]
  useEffect(() => {
    const handleResize = () => {
      if (embla) {
        embla.reInit();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [embla]);

  //[Button관리]

  return (
    <div className="carouselBox">
      <Carousel
        controlSize={35}
        sx={{ maxWidth: 500, margin: "0 auto" }}
        mx="auto"
        withIndicators
        height={300}
        getEmblaApi={setEmbla}
        styles={{
          indicator: {
            width: rem(20),
            height: rem(6),
            zIndex: rem(1),
            transition: "width 250ms ease",
            "&[data-active]": {
              width: rem(50),
            },
            backgroundColor: "#ffffff",
          },
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {slides}
      </Carousel>
      <Progress
        styles={() => ({
          bar: { transitionDuration: "0ms" },
          root: { maxWidth: rem(500) },
        })}
        value={scrollProgress}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </div>
  );
};

export default HorizontalSlide;
