import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "@assets/images/main-slider/slider-1.jpg";
import slider2 from "@assets/images/main-slider/slider-2.jpg";

const CarouselSlide = () => {
  const slides = [
    {
      bgImage: slider1,
      offer: "Opening Sale Discount 50%",
      heading: "SuperMarket For Fresh Grocery",
      content:
        "Introduced a new model for online grocery shopping and convenient home delivery.",
    },
    {
      bgImage: slider2,
      offer: "Free Shipping - orders over $100",
      heading: "Free Shipping - orders over $100",
      content:
        "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    },
  ];

  return (
    <div className="my-3">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slider" style={{ height: "80vh" }}>
                <div
                  className="slider-item p-2 p-md-5 h-100"
                  style={{
                    backgroundImage: `url(${slide.bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: ".5rem",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="col-md-7">
                    <span className="badge text-bg-warning">{slide.offer}</span>
                    <h2 className="text-dark display-5 fw-bold mt-4">
                      {slide.heading}
                    </h2>
                    <p className="lead">{slide.content}</p>
                    <button className="btn btn-dark mt-3">
                      Shop Now
                      <i className="feather-icon icon-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselSlide;
