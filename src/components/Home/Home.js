import React from 'react';
import carImg from '../../assets/images/car-1.jpg';

const Home = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-fixed'>
            <div className="container mx-auto h-[90vh] flex justify-between items-center">
                <div className='w-[60%]'>
                    <h1 className='text-3xl md:text-6xl xl:text-8xl text-indigo-600 uppercase font-bold'>Are you thinking to buy a car?</h1>
                    <h1 className='text-2xl md:text-5xl xl:text-7xl uppercase'>Just see our reviews befor you buy a car</h1>
                    <button className='bg-indigo-500 px-4 md:px-6 xl:px-8 py-1 md:py-3 xl:py-4 rounded text-white uppercase mt-5'>View Reviews</button>
                </div>
                <div>
                    <img src={carImg} alt="" className='h-64 md:h-96 xl:h-[600px] rounded-lg'/>
                </div>
            </div>
        </div>
    );
};

export default Home;