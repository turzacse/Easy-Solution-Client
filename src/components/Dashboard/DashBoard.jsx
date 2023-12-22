import { NavLink, Outlet } from "react-router-dom";
import Footer from "../LandingPage/Footer";


const DashBoard = () => {
    return (
        <div>
            <div className="lg:flex">
            <div className="lg:w-44  bg-green-500 text-2xl font-bold">
                <ul className="menu [&_li>*]:rounded-none ">
                    <li><NavLink to='/'  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} >Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/todo"  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        Task Lists</NavLink>
                    </li>    
                    <li>
                        <NavLink to="/dashboard/profile"  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        Profile</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/dashboard/create"  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        Create a Task</NavLink>
                    </li> 
                    
                </ul>
            </div>
            <div className="lg:flex-1">
                <Outlet></Outlet>
                <div>
                    {/* <img className="w-full max-h-screen" src="https://i.ibb.co/3s2RL7c/Technology-Improve-Productivity-1200x900.jpg" alt="" /> */}
                </div>
            </div>
        
        </div>
        
        <Footer></Footer>
        </div>
    );
};

export default DashBoard;