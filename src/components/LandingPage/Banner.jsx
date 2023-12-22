import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="hero lg:p-40 bg-base-300 text-gray-800 glass" >
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/z6QQzHV/Project-Management-tool-banner-711x400.png" className="w-1/2 rounded-3xl shadow-2xl " />
                <div className="flex-1">
                <h1 className="text-5xl font-bold ">
                Provide The easy Solution
                </h1>
                <p className="py-6 ">Effortlessly Organize Your Tasks! Introducing TaskMan, Your Ultimate Task Management Solution. Seamlessly plan, prioritize, and track your to-dos with our intuitive interface. Collaborate effortlessly, set deadlines, and stay on top of your goals. Boost productivity and efficiency. Join Now for a streamlined task management experience!</p>
                <Link to="/dashboard"><button className="btn glass">Explore!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;