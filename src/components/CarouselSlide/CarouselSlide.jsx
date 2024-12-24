import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const CarouselSlide = () => {
  return (
    <>
      <div className="mt-8  mb-8">
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="hero-slider">
                <div
                  style={{
                    background:
                      "url(../../assets/images/slider/slide-1.jpg) no-repeat",
                    backgroundSize: "cover",
                    borderRadius: ".5rem",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span className="badge text-bg-warning">
                      Opening Sale Discount 50%
                    </span>
                    <h2 className="text-dark display-5 fw-bold mt-4">
                      SuperMarket For Fresh Grocery
                    </h2>
                    <p className="lead">
                      Introduced a new model for online grocery shopping and
                      convenient home delivery.
                    </p>
                    <a href="#!" className="btn btn-dark mt-3">
                      Shop Now{" "}
                      <i className="feather-icon icon-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-slider">
                <div
                  className="slider-item"
                  style={{
                    background:
                      "url(../../assets/images/slider/slider-2.jpg) no-repeat",
                    backgroundSize: "cover",
                    borderRadius: ".5rem",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span className="badge text-bg-warning">
                      Free Shipping - orders over $100
                    </span>
                    <h2 className="text-dark display-5 fw-bold mt-4">
                      Free Shipping on <br /> orders over{" "}
                      <span className="text-primary">$100</span>
                    </h2>
                    <p className="lead">
                      Free Shipping to First-Time Customers Only, After
                      promotions and discounts are applied.
                    </p>
                    <a href="#!" className="btn btn-dark mt-3">
                      Shop Now{" "}
                      <i className="feather-icon icon-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CarouselSlide;
