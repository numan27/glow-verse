import React from "react";
import {BsChevronDoubleLeft, BsChevronDoubleRight} from "react-icons/bs"

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-prev-arrow py-6 px-3 rounded right-16 z-100 bg-brown-300 hover:bg-[#74322c] transition duration-300 ease-in-out top-1/2 hover:shadow-lg " onClick={onClick}>
   <BsChevronDoubleLeft className="text-white text-lg"/>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-next-arrow py-6 px-3 rounded right-4 z-100 bg-brown-300 hover:bg-[#74322c] transition duration-300 ease-in-out top-1/2 hover:shadow-lg " onClick={onClick}>
    <BsChevronDoubleRight className="text-white text-lg"/>
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
