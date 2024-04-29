import React from "react";
import phone from "../assets/icons/icons8-phone-100.png";
import mail from "../assets/icons/icons8-mail-100.png";
import location from "../assets/icons/icons8-location-100.png";

function Contact() {
  return (
    <>
      <div className="mt-32 py-12 rounded-3xl max-w-7xl sm:mx-12 md:mx-auto shadow-2xl h-auto bg-DarkPurple2 flex sm:flex-col md:flex-row">
        <section className="w-[50%] flex flex-col">
          <h1 className="sm:text-xl md:text-4xl font-bold  pl-12 text-white">
            Contact Us
          </h1>
          <div className="border-b-4 border-b-gold w-32 ml-12 mt-2"></div>
          <div className="sm:space-y-6 md:space-y-24 mt-16 ml-12">
            <div className="flex gap-6 sm:text-base md:text-2xl text-white items-center">
              <img className="sm:h-7 md:h-12" src={phone}></img>
              +966582810217
            </div>
            <div className="flex gap-6 sm:text-base md:text-2xl text-white items-center">
              <img className="sm:h-7 md:h-12" src={mail}></img>
              Fattani@Gmail.com
            </div>
            <div className="flex gap-6 sm:text-base md:text-2xl text-white items-center">
              <img className="sm:h-7 md:h-12" src={location}></img>
              Riyadh
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
