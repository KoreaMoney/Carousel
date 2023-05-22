import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Button, rem } from "@mantine/core";
import { Image } from "@mantine/core";
import "../styles/horizontalSlide.css";

import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.webp";
import pic6 from "../assets/pic6.webp";
import pic7 from "../assets/pic7.webp";
import pic8 from "../assets/pic8.webp";
import pic9 from "../assets/pic9.webp";
import pic10 from "../assets/pic10.webp";

const images = [pic2, pic1, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

const HorizontalSlide = () => {
  //[State관리]
  const [slideCarousel, setSlideCarousel] = useState(null);

  //[Slide이미지 정렬]
  const slides = images?.map((url) => (
    <Carousel.Slide key={url}>
      <div style={{ pointerEvents: "none" }}>
        <Image src={url} />
      </div>
    </Carousel.Slide>
  ));

  //[ResizeObserver 실행을 제어하기 위한 useEffect 추가]
  useEffect(() => {
    const handleResize = () => {
      if (slideCarousel) {
        slideCarousel.reInit();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slideCarousel]);

  //[Button관리]
  const handlePrevSlide = useCallback(() => {
    if (slideCarousel) {
      slideCarousel.scrollPrev();
    }
  }, [slideCarousel]);

  const handleNextSlide = useCallback(() => {
    if (slideCarousel) {
      slideCarousel.scrollNext();
    }
  }, [slideCarousel]);

  return (
    <div>
      <Carousel
        controlSize={40}
        sx={{ maxWidth: 1480, margin: "0 auto" }}
        slideSize="50.8%"
        slideGap="md"
        loop
        align="start"
        withIndicators
        slidesToScroll={2}
        height={500}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        getEmblaApi={setSlideCarousel}
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
            marginBottom: "30px",
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
      <div className="button">
        <Button color="gray" radius="md" onClick={handlePrevSlide}>
          Prev
        </Button>
        <Button color="gray" radius="md" onClick={handleNextSlide}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default HorizontalSlide;
