import { Link } from "react-router-dom";
import transparentLogo from "../assets/FATTANI-logo-transparent.png";
function Header() {
  return (
    <header className="bg-DarkPurple container max-w-full mx-auto px-6 py-4 pt-6">
      <nav className="flex items-center justify-between font-semibold text-white text-lg mx-12 lg:text-xl lg:mx-32">
        <Link to="/">
          <img
            src={transparentLogo}
            alt="Logo"
            className="w-52 md:w-72 xl:ml-16"
          />
        </Link>
        <div className="flex space-x-8 lg:mx-16">
          <div className="group">
            <Link to="/">
              Home
            </Link>
            <div className="nav-footer-hover" />
          </div>

          <div className="group">
            <Link to="/about" >
              About Us
            </Link>
            <div className="nav-footer-hover" />
          </div>

          <div className="group">
            <Link to="/services">
              Services
            </Link>
            <div className="nav-footer-hover" />
          </div>

          <div className="group">
            <Link to="/contact">
              Contact Us
            </Link>
            <div className="nav-footer-hover" />
          </div>
        </div>
      </nav>
    </header>
    // <div className="w-full pb-7 flex justify-center bg-DarkPurple text-white text-xl">
    //   <img className="w-72" src={transparentLogo}></img>
    //   <div className="w-[1000px] justify-end flex mt-7 gap-6">
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/about"}>About Us</Link>
    //     <Link to={"/services"}>Services</Link>
    //     <Link to={"/contact"}>Contact</Link>
    //   </div>
    // </div>
  );
}

export default Header;
