import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/background.jpg";
import Image2 from "../assets/background-2.png";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const slides = [
  {
    img: Image1,
    header: "FATTANI & Co",
    subHeader1: "Chartered accountants and auditors",
    subHeader2:
      "We offer a comprehensive range of services to companies and institutions of all kinds.",
  },
  {
    img: Image2,
    header: "FATTANI & Co",
    subHeader1: "Chartered accountants and auditors",
    subHeader2:
      "We provide a range of outsourced services, so you can keep your focus on growing your business.",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    //Clear interval when the component unmount
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, nextSlide]);

  return (
    <>
      <motion.div
        key={currentIndex}
        className="w-full h-120 relative pt-20"
        style={{
          // backgroundImage: `url(${slides[currentIndex].img})`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${slides[currentIndex].img})`,
          backgroundSize: "cover",
          backgroundPosition: "100%",
        }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto max-w-7xl border-white text-white "
        >
          <div className="flex flex-col space-y-4 mt-24 ">
            <div className="text-6xl">{slides[currentIndex].header}</div>
            <div className="text-4xl opacity-80">
              {slides[currentIndex].subHeader1}
            </div>
            <div className="text-xl opacity-80">
              {slides[currentIndex].subHeader2}
            </div>
          </div>
          {currentIndex === 0 && (
            <button className="mt-10 bg-gold hover:bg-darkerGold text-white font-bold py-2 px-4 rounded">
              Request for Quotation
            </button>
          )}

          {currentIndex === 1 && (
            <button className="mt-10 bg-gold hover:bg-darkerGold text-white font-bold py-2 px-4 rounded">
              View Our Services
            </button>
          )}
        </motion.div>

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
                  slideIndex === currentIndex ? "text-white" : "text-gray-500"
                }`}
              >
                <RxDotFilled size={25} />
              </div>
            );
          })}
        </div>
      </motion.div>

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
