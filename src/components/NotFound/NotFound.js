import React from 'react';
import notFoundImg from '../../assets/images/not-found.svg';

const NotFound = () => {
    return (
        <div className='container mx-auto h-[90vh] flex justify-center items-center'>
            <div>
                <div>
                    <img src={notFoundImg} alt=""  className='h-48'/>
                </div>
                <div className='mt-5 text-center'>
                    <h2 className='text-3xl font-semibold text-indigo-600'>Opps... Sorry!</h2>
                    <p className='text-xl font-semibold'>The page not found.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;