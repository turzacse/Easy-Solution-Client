import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/GT3ZqHx/ppppppp.jpg" className="h-[400px] w-[500px] rounded-2xl shadow-2xl " />
                    <div>
                        <h1 className="text-5xl font-bold">Fahim Montasir Turza</h1>
                        <p className="py-6">As a driven Computer Science undergraduate student and aspiring MERN stack developer, I am on a mission to leverage technology to create real-world solutions. My journey has taken me from the classroom to the world of web development, where I've been building and learning every day.</p>
                        <Link className='text-blue-400' to='https://fahim-montasir-turza.vercel.app/'>Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;