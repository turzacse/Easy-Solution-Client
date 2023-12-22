import { Outlet } from "react-router-dom";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
// import Home from "./Home";
// import Navbar from "./LandingPage/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;