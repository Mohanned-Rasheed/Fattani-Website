import TextBlock from "./TextBlock";
import {
    service1Icon,
    service2Icon,
    service3Icon,
  } from "../util/icons";
  
const ServicesSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-DarkPurple2">Our Services</h1>
        <div className="border-2 border-gold w-36 mt-2 mb-4" />
      </div>
      <div>
        <p className="text-DarkPurple2 text-center text-xl mb-4">
          We are providing a range of outsourced services, so you can keep your
          focus on growing your business. Our services include:
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 text-DarkPurple2">
        <TextBlock icon={service1Icon} title="Audit & Assurance" />
        <TextBlock icon={service2Icon} title="Zakat & Taxation" />
        <TextBlock icon={service3Icon} title="Bookkeeping" />
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-DarkPurple2 hover:bg-gold text-white font-bold py-2 px-4 rounded">
          View All Services
        </button>
      </div>
    </div>
  );
};
export default ServicesSection;
