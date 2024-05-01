import {
    commitmentIcon,
    clientIcon,
    valueIcon,
  } from "../util/icons";

import TextBlock from "./TextBlock";
const WhyUsSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-DarkPurple2">Why Choose Us?</h1>
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
  );
};
export default WhyUsSection;
