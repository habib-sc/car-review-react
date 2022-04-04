import React from 'react';
import car2 from '../../assets/images/car-2.jpg';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='p-3 flex justify-center'>
                    <img src={car2} alt=""  className='h-48 md:h-80 rounded-lg'/>
                </div>
                <div className='p-3 md:text-left w-[100%] md:w-[50%]'>
                    <h2 className='text-3xl font-bold text-indigo-500 mb-2 uppercase text-center md:text-left'>Welcome to Car Review Point</h2>
                    <p> We are truly passionate about cars and this is how it all started. The Journey started in 2018, and since then we have helped more than 500 customers to buy their dream car. In the beginning we stared with only one display center in Baridhara Dhaka, Now we are proud to say that we have all together three display center in three different locations.</p>
                    <p>
                    Over the years we have learned how to source best quality cars from around the world. Initially we only imported our cars from Japan. Now we are also importing our cars from different European countries. We hold one of the largest vehicle stock collections in Bangladesh.
                    </p>
                </div>
            </div>
            <div className='p-3'>
                <p>
                We want to redefine the way, people buy and pre order a vehicle. We are in a mission to help customers to choose the right and quality vehicle by offering them free consultation, car review, authentic information, wide range of vehicle selection and finally quality vehicles.
                </p>
            </div>
        </div>
    );
};

export default About;