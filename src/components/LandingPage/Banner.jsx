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
                <p className="py-6 ">Easy Solution" is a straightforward and user-friendly to-do list application designed to streamline task management. This application simplifies organizing tasks, enabling users to create, track, and manage their daily activities efficiently. With a clean and intuitive interface, Easy Solution offers a user-friendly experience, allowing individuals to easily add, edit, prioritize, and mark tasks as completed.</p>
                <Link to="/dashboard"><button className="btn bg-warning">Explore More!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;