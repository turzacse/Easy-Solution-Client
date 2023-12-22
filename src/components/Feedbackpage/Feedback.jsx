import React from 'react';
import Marquee from 'react-fast-marquee';
import StarRatings from 'react-star-ratings';

const Feedback = () => {
    return (
        <div>
            <Marquee>
            <div className=' grid md:grid-cols-2 lg:grid-cols-5 gap-10 my-10'>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/GT3ZqHx/ppppppp.jpg" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-bold text-blue-500">Turza</h2>
                    <p>This Web Application, Helps me more in my daily task.  I love it</p>
                    <p className="text-blue-400"></p>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/KsDC7gY/parvez.jpg" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-bold text-blue-500">Parvez</h2>
                    <p>When I perform in online coding contest. This web application is very helpfull to me to organize my task</p>
                    <p className="text-blue-400"></p>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/ByV6Hkx/Ismail-removebg-preview.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-bold text-blue-500">Ismail</h2>
                    <p>Hello</p>
                    <p className="text-blue-400"></p>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/wRx1kCJ/asfack.jpg" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-bold text-blue-500">Ashfack</h2>
                    <p>Hello</p>
                    <p className="text-blue-400"></p>
                </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/Z1fvc32/DSC-6404.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-bold text-blue-500">Anup</h2>
                    <p>Hello</p>
                    <p className="text-blue-400"></p>
                </div>
            </div>

            </div>
            </Marquee>
        </div>
    );
};

export default Feedback;