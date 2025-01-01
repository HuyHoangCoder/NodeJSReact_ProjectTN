import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav, setNav] = useState({ nav1: null, nav2: null });

  useEffect(() => {
    setNav({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Kích hoạt auto chạy
    autoplaySpeed: 2500, // Tốc độ chạy (2.5 giây)
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    if (slider1.current) slider1.current.slickNext();
  };

  const previous = () => {
    if (slider1.current) slider1.current.slickPrev();
  };

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider
              asNavFor={nav.nav2}
              ref={slider1}
              {...settings}
            >
              <div key={1}>
                <img
                  src="images/banner.png"
                  alt="Banner 1"
                />
              </div>
              <div key={2}>
                <img
                  src="images/banner1.png"
                  alt="Banner 2"
                />
              </div>
              <div key={3}>
                <img
                  src="images/banner2.png"
                  alt="Banner 3"
                />
              </div>
              <div key={4}>
                <img
                  src="images/banner3.png"
                  alt="Banner 4"
                />
              </div>
             
            </Slider>
            <div className="carousel-left-move">
              <div className="prev" onClick={previous}>
                <LeftOutlined />
              </div>
              <div className="next" onClick={next}>
                <RightOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
