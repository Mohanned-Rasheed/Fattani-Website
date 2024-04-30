import { useRef } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import Saudi_National_Bank_Logo from "../assets/logos/Saudi_National_Bank_Logo.png";
import chalhoub from "../assets/logos/chalhoub.png";
import maysan from "../assets/logos/maysan.png";
import Siemens from "../assets/logos/Siemens.png";
import image from "../assets/logos/استر للتعدين.png";
import image2 from "../assets/logos/الهيئة العامة للترفيه.png";
import iamge3 from "../assets/logos/تانيا.png";
import iamge4 from "../assets/logos/سدكو.png";
import iamge5 from "../assets/logos/شركة أحمد محمد.png";
import iamge6 from "../assets/logos/شركة اعمار الضيافة الفندقية.png";
import iamge7 from "../assets/logos/شركة السعودية للكهرباء.png";
import iamge8 from "../assets/logos/صله.png";
import iamge9 from "../assets/logos/فنادق الماسة.png";
import iamge10 from "../assets/logos/مؤسسات سقالة.png";
import image11 from "../assets/logos/موسم الرياض.png";
import image12 from "../assets/logos/موسم-جدة.png";

function PartnersSection() {
  const logos = [
    Saudi_National_Bank_Logo,
    chalhoub,
    maysan,
    Siemens,
    image,
    image2,
    iamge3,
    iamge4,
    iamge5,
    iamge6,
    iamge7,
    iamge8,
    iamge9,
    iamge10,
    image11,
    image12,
  ];
  const scrollContainer = useRef(null);
  const scrollLeft = () => {
    if (scrollContainer.current.scrollLeft === 0) {
      scrollContainer.current.scrollTo({
        left: scrollContainer.current.scrollWidth,
        behavior: "smooth",
      });
    } else {
      scrollContainer.current.scrollTo({
        left: scrollContainer.current.scrollLeft - 400,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (
      scrollContainer.current.scrollLeft +
        scrollContainer.current.offsetWidth >=
      scrollContainer.current.scrollWidth
    ) {
      scrollContainer.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      scrollContainer.current.scrollTo({
        left: scrollContainer.current.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="mt-14 bg-gray-100 w-full flex flex-col items-center relative">
        <h1
          className="text-center font-bold text-2xl pt-10"
          onClick={scrollLeft}
        >
          Our partners in success
        </h1>
        <div className="border-2 border-gold w-36 mt-2 mb-4 flex justify-center items-center" />
        <div className=" ">
          <BsChevronCompactLeft
            onClick={scrollLeft}
            size={40}
            className="absolute sm:top-[58%] md:top-[56%] sm:left-0 md:left-5  cursor-pointer"
          />
          <div
            ref={scrollContainer}
            style={{
              scrollbarWidth: "none",
              WebkitUserSelect: "none", 
              KhtmlUserSelect: "none",
              MozUserSelect: "none", 
              msUserSelect: "none", 
              userSelect: "none", 
            }}
            className="flex mt-10 pb-16 overflow-x-scroll hide-scrollbar sm:space-x-3 md:space-x-10 sm:mx-8 md:mx-20 w-auto"
          >
            {logos.map((logo, index) => {
              return (
                <img
                  key={index}
                  draggable={false}
                  className="md:h-16 sm:h-10"
                  src={logo}
                ></img>
              );
            })}
          </div>
          <BsChevronCompactRight
            onClick={scrollRight}
            size={40}
            className="absolute sm:top-[58%] md:top-[56%] sm:right-0 md:right-5 cursor-pointer "
          />
        </div>
      </div>
    </>
  );
}

export default PartnersSection;
