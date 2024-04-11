import React from "react";
import { feedbackdata } from "../Data/M_data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";

const Userfeedback = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="w-[100%] my-[5%]">
      <div className=" ml-[40%] text-4xl ">Customer Testimonials</div>
      <div >
        <Slider {...settings}>
          {feedbackdata.map((img) => {
            return (
              <div className="mx-auto">
                <div className=" flex sm:flex-row w-fit mx-auto gap-10 my-[3%]">

                  <div className="w-[10rem]">
                    <img
                      className="w-[10rem] rounded-md"
                      src={img.imgs}
                      alt=""
                    />
                  </div>

                  <div className="w-[30rem] ">
                    <h1 className="text-xl font-bold mt-2">{img.name}</h1>
                    <p className=" mt-2 text-justify">{img.description}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Userfeedback;
