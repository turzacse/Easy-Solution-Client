import React from 'react';

const Benifit = () => {
    return (
        <div className='md:mx-10 mx-2 mt-10'>
            <div>
                <h2 className='md:text-5xl text-3xl font-bold text-orange-500 text-center'>Who Benifited</h2>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/yyY4VXn/student.webp" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-bold text-blue-500">Students</h2>
                        <p className="text-blue-400"></p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/ZzrJ3fG/programmer.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-bold text-blue-500">Programmer</h2>
                        <p className="text-blue-400"></p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/gvPY0Xh/teacher.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-bold text-blue-500">Teacher</h2>
                        
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[200px] h-[200px] rounded-full ' src="https://i.ibb.co/vznmyfd/doctor.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-bold text-blue-500">Doctor</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Benifit;