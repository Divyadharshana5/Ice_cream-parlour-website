import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "./../../assets/rev_home3_1.png";
import element01 from "./../../assets/HS_decor4.png";
import element02 from "./../../assets/rev_home3_04.png";
import slideImage01 from "./../../assets/h3_cat-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Index = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]">
        <Navbar />

        <div className="w-full px-[12%] pt-[100px] flex gap-[20px] flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[50%] w-full items-start gap-4 justify-center">
            <small className="text-4xl font-dancing">Best Seller</small>
            <h2 className="text-7xl 2xl:text-8xl font-medium text-red-600 font-Kalnia">
              Ice Cream <br />
              Novelties
            </h2>
            <p className="text-lg">
              You can't buy happiness, but you can buy ice cream, and that is
              pretty much the same thing.
            </p>
            <button className="btn header-btn">
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-[50%] flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0">
            <img
              src={heroImage}
              alt="header-image"
              className="w-full sm:w-[400px] 2xl:w-[600px]"
            />
          </div>
          <img
            src={element01}
            className="w-[80px] h-[80px] absolute -top-[-80%] left-5"
            alt=""
          />
          <img
            src={element02}
            className="w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex"
            alt=""
          />
        </div>
      </div>
      {/* Category Section */}

      <section id="category">
        <h3 className="section_heading pb-10">Shop by Category</h3>

        <Swiper
          className="w-full mt-[80px]"
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
        >
          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage01}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Ice Cream Bar
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Index;
