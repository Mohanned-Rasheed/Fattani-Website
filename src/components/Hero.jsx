import React, { useState } from "react";
import Image1 from "../assets/background image.png";
import Image2 from "../assets/fattani-Logo.png";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
function Hero() {
  const slides = [
    { img: Image1, Headr: "Fattani Company", SubHeader: "slide 1" },
    { img: Image2, Headr: "Fattani Company", SubHeader: "slide 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="  h-[670px] text-white w-full flex justify-center pt-10 pb-10">
      <div className=" w-[1200px] relative">
        <img
          className="h-[600px] w-[1200px] object-fill absolute z-0 rounded-md"
          src={slides[currentIndex].img}
        ></img>
        <div className="absolute top-[20%] left-[10%] z-10 text-4xl ">
          {slides[currentIndex].Headr}
        </div>
        <div className="absolute top-[30%] left-[10%] z-10 text-xl ">
          {slides[currentIndex].SubHeader}
        </div>
        <div
          onClick={nextSlide}
          className="absolute top-[50%] right-2 cursor-pointer"
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div
          onClick={prevSlide}
          className="absolute top-[50%] left-2 cursor-pointer"
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div className="flex bottom-0 left-[50%] absolute z-10">
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                onClick={() => {
                  goToSlide(slideIndex);
                }}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
