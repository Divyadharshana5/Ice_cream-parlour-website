import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "./../../assets/rev_home3_1.png";

const Index = () => {
  return (
    <div className="flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]">
      <Navbar />

      <div className="w-full px-[12%] pt-[100px] flex gap-[20px] flex-col lg:flex-row">
        <div className="">
          <small>Best Seller</small>
          <h2>
            Ice Cream <br />
            Novelties
          </h2>
          <p>
            You can't buy happiness, but you can buy ice cream, and that is
            pretty much the same thing.
          </p>
          <button>
            Shop Now <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="">
          <img src={heroImage} alt="header-image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
