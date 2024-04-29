import Hero from "../components/Hero";
import TextBlock from "../components/TextBlock";
import OurPartners from "../components/OurPartners";
import {
  commitmentIcon,
  clientIcon,
  valueIcon,
  service1Icon,
  service2Icon,
  service3Icon,
} from "../util/icons";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      {/* why us section */}
      <section>
        <div className="max-w-7xl mx-auto mt-6">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-DarkPurple2">
              Why Choose Us?
            </h1>
            <div className="border-2 border-gold w-36 mt-2 mb-4" />
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 text-DarkPurple2">
            <TextBlock
              icon={commitmentIcon}
              title="Commitment"
              text="we agree to and meet our commitments, meaning that we deliver what we promise, every day, for every client"
            />
            <TextBlock
              icon={clientIcon}
              title="Client Needs"
              text="we anticipate our clients' needs and are forthright in our views, to ensure the best outcome for you"
            />
            <TextBlock
              icon={valueIcon}
              title="Value"
              text="Our experts focus on creating value: we give our clients up to date ideas and valuable insights and advice that they can trust"
            />
          </div>
        </div>
      </section>
      {/* services section */}
      <section>
        <div className="max-w-7xl mx-auto mt-14 flex flex-col">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-DarkPurple2">
              Our Services
            </h1>
            <div className="border-2 border-gold w-36 mt-2 mb-4" />
          </div>
          <div>
            <p className="text-DarkPurple2 text-center text-xl mb-4">
              We are providing a range of outsourced services, so you can keep
              your focus on growing your business. Our services include:
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
      </section>
      <OurPartners />
      <Contact />
    </>
  );
}

export default Home;
