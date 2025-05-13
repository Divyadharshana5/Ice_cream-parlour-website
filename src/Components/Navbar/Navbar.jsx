import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-[80px] flex justify-between items-center px-[12%] py-[0] relative">
        <div className="flex items-center justify-center">
          <span className="text-2xl text-red-600 font-medium cursor-pointer">
            ICEPARLOR
          </span>
        </div>

        <div>
          <ul className="w-full flex gap-[15px] justify-center">
            <li className="">
              <a href="#" className="Navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="Navbar-link">
                Category
              </a>
            </li>

            <li>
              <a href="#" className="Navbar-link">
                Popular
              </a>
            </li>

            <li>
              <a href="#" className="Navbar-link">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="Navbar-link">
                Testimonial
              </a>
            </li>

            <li>
              <a href="#" className="Navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-[20px] items-center justify-center">
          <button className="btn">
            Shop Now <i className="ri-arrow-right-line"></i>
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
