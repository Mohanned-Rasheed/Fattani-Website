import { Link } from "react-router-dom";
import transparentLogo from "../assets/FATTANI-logo-transparent.png";

function Footer() {
  return (
    <>
      <footer className="bg-DarkPurple">
        <div className="container max-w-6xl pb-2 mt-6 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* menu and logo */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div>
                <img src={transparentLogo} alt="" className="w-72 md:ml-3 md:mb-5" />
              </div>

              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="group">
                  <Link to={"/"}>Home</Link>
                  <div className="nav-footer-hover" />
                </div>

                <div className="group">
                  <Link to={"/about"}>About Us</Link>
                  <div className="nav-footer-hover" />
                </div>

                <div className="group">
                  <Link to={"/services"}>Services</Link>
                  <div className="nav-footer-hover" />
                </div>

                <div className="group">
                  <Link to={"/contact"}>Contact us</Link>
                  <div className="nav-footer-hover" />
                </div>
              </div>
            </div>

            {/* socials and copyright */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              <div className="font-bold">
              &copy; 2024 FATTANI & CO. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
