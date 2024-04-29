import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Root() {
  return (
    <div className="flex flex-col min-h-screen  ">
      <Header />
      <div className="flex-grow mb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
