import officeImg from "../assets/FATTANI-office.png";
import smallLogo from "../assets/FATTANI-small-logo-transparent.png";

const ObjectivesSection = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20 mb-20">
        <div className="flex flex-col items-left">
          <h1 className="text-4xl font-bold text-DarkPurple2">
            Our Objectives
          </h1>
          <div className="border-2 border-gold w-64 mt-2 mb-4" />
        </div>

        <div className="text-DarkPurple2 flex">
          <div className="flex flex-col space-y-10 max-w-3xl">
            <div className="flex items-center space-x-2 ">
              <img src={smallLogo} alt="objectives" className="h-12" />
              <p className="text-xl font-semibold">
                Good professional co-operation between consultants, management
                and those charged with governance.
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <img src={smallLogo} alt="objectives" className="h-12" />
              <p className="text-xl font-semibold">
              Our Professional reports which stand up to scrutiny by the
              shareholders and regulators.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <img src={smallLogo} alt="objectives" className="h-12" />
              <p className="text-xl font-semibold">
              Independent and objective feedback on currently applicable
              guidelines and controls covered with the scope of work.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={officeImg}
              alt="office"
              className="h-108 -mt-14 mx-8 rounded-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    );
    }
export default ObjectivesSection;