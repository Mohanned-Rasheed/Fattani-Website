import { useState } from "react";
import Image1 from "../assets/background.jpg";
import Image2 from "../assets/fattani-Logo.png";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
function Hero() {
  const slides = [
    {
      img: Image1,
      header: "FATTANI & Co",
      subHeader1: "Chartered accountants and auditors",
      subHeader2:
        "We offer a comprehensive range of services to companies and institutions of all kinds.",
    },
    // { img: Image2, Header: "Fattani Company", SubHeader: "slide 2" },
  ];

  setTimeout(() => {
    nextSlide();
  }, 7000);

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
    <>
      <div
        className="w-full h-120 relative pt-20"
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
          backgroundSize: "",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl  border-white text-white ">
          <div className="flex flex-col space-y-4 mt-24 ">
            <div className="text-6xl">{slides[currentIndex].header}</div>
            <div className="text-4xl">{slides[currentIndex].subHeader1}</div>
            <div className="text-xl">{slides[currentIndex].subHeader2}</div>
      
          </div>
          <button className="mt-10 bg-gold hover:bg-darkerGold text-white font-bold py-2 px-4 rounded">
              Request for Quotation
            </button>
        </div>

        <div
          onClick={nextSlide}
          className="absolute top-[35%] right-4 cursor-pointer text-white"
        >
          <BsChevronCompactRight size={40} />
        </div>
        <div
          onClick={prevSlide}
          className="absolute top-[35%] left-4 cursor-pointer text-white"
        >
          <BsChevronCompactLeft size={40} />
        </div>

        <div className="flex absolute bottom-1 left-1/2 text-white ">
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                onClick={() => {
                  goToSlide(slideIndex);
                }}
                className={`text-2xl cursor-pointer ${
                  slideIndex === currentIndex ? "text-gray-500" : "text-white"
                }`}
              >
                <RxDotFilled size={25} />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="  h-[670px] text-white w-full flex justify-center pt-10 pb-10">
        <div className=" w-[1200px] relative">
          <img
            className="h-[600px] w-[1200px] object-fill absolute z-0 rounded-md"
            src={slides[currentIndex].img}
          ></img>
          <div className="absolute top-[20%] left-[10%] z-10 text-4xl ">
            {slides[currentIndex].header}
          </div>
          <div className="absolute top-[30%] left-[10%] z-10 text-xl ">
            {slides[currentIndex].subHeader1}
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
      </div> */}
    </>
  );
}

export default Hero;
