import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "./../../assets/rev_home3_1.png";

const Index = () => {
  return (
    <div className="flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]">
      <Navbar />

      <div className="">
        <div className=""></div>
        <div className="">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
