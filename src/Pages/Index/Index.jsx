import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "./../../assets/rev_home3_1.png";
import element01 from "./../../assets/HS_decor4.png";
import element02 from "./../../assets/rev_home3_04.png";
import slideImage01 from "./../../assets/h3_cat-4.jpg";
import slideImage02 from "./../../assets/h3_cat-1.jpg";
import slideImage03 from "./../../assets/h3_cat-2.jpg";
import slideImage04 from "./../../assets/h3_cat-3.jpg";
import slideImage05 from "./../../assets/h3_cat-7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slideImg1 from "./../../assets/slideimg1.jpg";
import slideImg2 from "./../../assets/slideimg2.jpg";
import slideImg3 from "./../../assets/slideimg3.jpg";
import slideImg4 from "./../../assets/slideimg4.jpg";
import slideImg5 from "./../../assets/slideimg5.jpg";
import slideImg6 from "./../../assets/slideimg6.jpg";
import slideImg7 from "./../../assets/slideimg7.jpg";
import slideImg8 from "./../../assets/slideimg8.jpg";
import img1 from "./../../assets/img1.jpg";
import img2 from "./../../assets/img2.jpg";
import img3 from "./../../assets/img3.jpg";
import img4 from "./../../assets/img4.jpg";

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
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          loop={true}
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
          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage02}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Frozen Yogurt
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                6 Products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage03}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Rolled IceCream
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                3 Products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage04}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Vegan IceCream
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                5 Products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage05}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Vegan Gelato
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                8 Products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage03}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Rolled IceCream
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                3 Products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full flex">
            <div className="flex flex-col items-center group">
              <img
                src={slideImage02}
                alt="slider-image"
                className="w-[120px] h-[120px] rounded-full mb-4"
              />
              <span className="Slide_text group-hover:hidden">
                Frozen Yogurt
              </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                6 Products
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <div className="flex gap-[10px] flex-wrap lg:flex-nowrap">
          <div className="w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/bg-img1.jpg)] bg-cover p-6 text-white flex flex-col items-center pt-15 gap-2">
            <small className="text-2xl">Save 20% off</small>
            <h3>Summer 2025</h3>
            <p className="text-center">
              Smooth & Refreshing,intensely,Flavorful,100% Diary free
            </p>
            <button className="btn headerbtn">
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/bg-img2.jpg)] bg-cover p-6 text-white flex flex-col items-center pt-15 gap-2">
            <small className="text-2xl">Save 20% off</small>
            <h3>Summer 2025</h3>
            <p className="text-center">
              Smooth & Refreshing,intensely,Flavorful,100% Diary free
            </p>
            <button className="btn headerbtn">
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="w-full lg:w-[33%] h-[550px] flex flex-col gap-10">
            <div className="h-[250px] w-full bg-[url(assets/bg-img3.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className="text-3xl">Best Selling</h3>
              <p className="pt-20">
                The 1# Best <br /> Selling Gelato.
              </p>
            </div>
            <div className="h-[250px] w-full bg-[url(assets/bg-img4.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className="text-3xl">Best Selling</h3>
              <p className="pt-20">
                Smooth & Creamy <br /> texture,low in calorie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Popular flavor Section */}
      <section id="popular">
        <h3 className="section_heading">Popular Scoop Flavors</h3>

        <Swiper
          className="mt-20 w-full"
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 1500 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card">
              <div className="w-full">
                <img src={slideImg1} alt="" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Chocolate Fudge Browning
                </h2>
                <span>$7.50</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card">
              <div className="w-full">
                <img src={slideImg2} alt="" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Boom Balattl's Icecream
                </h2>
                <span>$5.50</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card">
              <div className="w-full">
                <img src={slideImg3} alt="" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Peekaboo Icecream
                </h2>
                <span>$13.50</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card">
              <div className="w-full">
                <img src={slideImg4} alt="" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <h2 className="text-lg font-bold text-rose-400 text-center">
                  London Diary
                </h2>
                <span>$9.50</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card">
              <div className="w-full">
                <img src={slideImg5} alt="" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Beckon Fudge Browning
                </h2>
                <span>$11.50</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Shop Section */}
      <section id="shop">
        <h3 className="section_heading">Eat Ice Cream,Be Happy!</h3>

        {/* Grid Wrapper*/}
        <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {/*Grid Card */}
          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg1} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Chocolate Fudge Browning
                </h2>
                <span>$7.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg3} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Peekaboo Icecream
                </h2>
                <span>$13.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg2} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Booms Battles Icecream
                </h2>
                <span>$5.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg4} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  London Diary
                </h2>
                <span>$9.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg5} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Beckon Fudge Icecream
                </h2>
                <span>$11.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg6} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Noosa Icecream
                </h2>
                <span>$17.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg7} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Ice cream
                </h2>
                <span>$14.50</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid Image*/}
            <div className="w-full ">
              <img src={slideImg8} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
              {/* Grid card content*/}
              <div className="flex flex-col gap-2 items-center">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-rose-400 text-center">
                  Halo Tops Icecream
                </h2>
                <span>$14.50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between flex-wrap gap-5">
          <div className="flex items-center gap-4">
            <h3 className="text-6xl font-bold text-rose-500">1.5</h3>
            <p className="text-gray-400">
              Millon Liters <br />
              <span className="text-2xl text-black font-semibold">
                Produced Over
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <h3 className="text-6xl font-bold text-rose-500">29</h3>
            <p className="text-gray-400">
              Millon <br />
              <span className="text-2xl text-black font-semibold">
                Scoops Sold
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-6xl font-bold text-rose-500">20</h3>
            <p className="text-gray-400">
              Years of <br />
              <span className="text-2xl text-black font-semibold">
                Our Experience
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-100" id="testimonials">
        <h3 className="section_heading">Happy Clients Say</h3>
        <Swiper
          className="w-full mt-[100px] mb-[100px]"
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 1500 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img src={img1} alt="" className="w-[50px] rounded-full mb-4" />

                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="text-sm">Sandra</span>
                </div>
              </div>
              <p>
                Nice tiny Ice cream place, hidden... Surprised with fresh ice
                cream collections.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img src={img2} alt="" className="w-[50px] rounded-full mb-4" />

                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="text-sm">Asma Cornor</span>
                </div>
              </div>
              <p>
                All kinds of flavours are available and ice cream tastes really
                fabulous. Give a try. One shld try sandwiches too.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img src={img4} alt="" className="w-[50px] rounded-full mb-4" />

                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="text-sm">Kritika</span>
                </div>
              </div>
              <p>
                Nice tiny Ice cream place, hidden... Surprised with fresh ice
                cream collections.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img src={img3} alt="" className="w-[50px] rounded-full mb-4" />

                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="text-sm">Sham</span>
                </div>
              </div>
              <p>
                All kinds of flavours are available and ice cream tastes really
                fabulous. Give a try. One shld try sandwiches too.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="bg-black text-white flex flex-col gap-5">
        <div className="grid grid-cols-4">
          <div className="">
            <span className="">IceCream Parlor</span>
            <div className="">
              <span className="">Follow Us</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                possimus provident alias
              </p>
              <div className="">
                <i className="ri-facebook-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-youtube-line"></i>
                <i className="ri-instagram-line"></i>
              </div>
            </div>
            <div className="">
              <h2>Usefull Links</h2>
              <p className="">About</p>
              <p className="">Service</p>
              <p className="">Storage</p>
              <p className="">Blog</p>
              <p className="">Shop</p>
              <p className="">Menu</p>
              <p className="">Spw.Menu</p>
            </div>
            <div className="">
              <h2 className="">Find Store</h2>

              <p className="">5606 e Speragge,Ave,Spokane</p>
              <p className="">Valliay, WA 998877,India</p>
              <h2>Call Now</h2>
              <p className="">+91 923456789</p>
              <p className="">Support@IceParlor.com</p>
            </div>
            <div className="">
              <h2>Opening Hours</h2>
              <p className="">Monday,Sunday</p>
              <p className="">9:00am - 10:00pm</p>
            </div>
          </div>
        </div>
        <p className="text-center pt-8 border-t-1 border-gray-500">
          @2025 IceCream Parlor. All Rights Reserved
        </p>
      </section>
    </>
  );
};

export default Index;
