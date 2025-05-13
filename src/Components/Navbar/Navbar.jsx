import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-[80px]">
        <div className="">
          <span className="text-2xl text-red-600 font-medium cursor-pointer">
            ICEPARLOR
          </span>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Category</a>
            </li>

            <li>
              <a href="#">Popular</a>
            </li>

            <li>
              <a href="#">Shop</a>
            </li>

            <li>
              <a href="#">Testimonial</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <button>
            Shop Now <i className="ri-arrow-right-line"></i>
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
