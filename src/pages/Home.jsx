import Hero from "../components/Hero";
import PartnersSection from "../components/PartnersSection";
import ObjectivesSection from "../components/ObjectivesSection";

import ContactCard from "../components/ContactCard";
import WhyUsSection from "../components/WhyUsSection";
import ServicesSection from "../components/ServicesSection";

function Home() {
  return (
    <>
      <Hero />
      {/* Our Objectives section */}
      <section className="mt-6">
        <ObjectivesSection />
      </section>
      {/* why us section */}
      <section>
        <WhyUsSection />
      </section>
      {/* services section */}
      <section>
        <ServicesSection />
      </section>
      <PartnersSection />
      <ContactCard />
    </>
  );
}

export default Home;
