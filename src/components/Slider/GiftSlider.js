import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows";
import IMAGES from "../../assets/images";

export default function GiftSlider() {

  const giftItems = [
    {
      name: "Gift Item 4",
      img: IMAGES.SLIDER_1
    },
    {
      name: "Gift Item 2",
      img: IMAGES.SLIDER_2
    },
    {
      name: "Gift Item 3",
      img: IMAGES.SLIDER_3
    },
    {
      name: "Gift Item 4",
      img: IMAGES.SLIDER_4
    },
    {
      name: "Gift Item 5",
      img: IMAGES.SLIDER_5
    },
    {
      name: "Gift Item 6",
      img: IMAGES.SLIDER_6
    },
    {
      name: "Gift Item 7",
      img: IMAGES.SLIDER_7
    },
    {
      name: "Gift Item 8",
      img: IMAGES.SLIDER_8
    },
    {
      name: "Gift Item 9",
      img: IMAGES.SLIDER_9
    },
    {
      name: "Gift Item 10",
      img: IMAGES.SLIDER_10
    },
    {
      name: "Gift Item 11",
      img: IMAGES.SLIDER_11
    },
  ]
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        },
      },
    ],
  };

  return (
    <Slider className="text-center" {...settings}>

      {giftItems.map((item) => {
        return (
          <div className="flex flex-col z-50 items-center justify-center mb-8">
            <span className="flex justify-center">
              <img width={150} className="" src={item.img} alt="slider-img" />
            </span>

            <h5 className="text-center font-medium text-lg mt-4">{item.name}</h5>
          </div>
        )
      })
      }
    </Slider>
  );
}
