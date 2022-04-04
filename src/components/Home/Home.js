import React from 'react';
import { useNavigate } from 'react-router-dom';
import carImg from '../../assets/images/car-1.jpg';
import useReviews from '../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const splicedReviews = reviews.splice(0, 3);
    const navigate = useNavigate();
    return (
        <div className='container mx-auto mb-10'>
            <div className="h-[90vh] flex justify-between items-center">
                <div className='w-[60%]'>
                    <h1 className='text-3xl md:text-6xl xl:text-8xl text-indigo-600 uppercase font-bold'>Are you thinking to buy a car?</h1>
                    <h1 className='text-2xl md:text-5xl xl:text-7xl uppercase'>Just see our reviews befor you buy a car</h1>
                    <button onClick={() => {navigate('/reviews')}} className='bg-indigo-500 px-4 md:px-6 xl:px-8 py-1 md:py-3 xl:py-4 rounded text-white uppercase mt-5'>View Reviews</button>
                </div>
                <div>
                    <img src={carImg} alt="" className='h-64 md:h-96 xl:h-[600px] rounded-lg'/>
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-center my-10 text-indigo-500 font-bold uppercase'>What Peoples Says!</h1>
                <div className='grid grid-cols-3 gap-12'>
                    {
                        splicedReviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                    }
                </div>
                <div className='flex justify-center mt-5'>
                    <button onClick={() => {navigate('/reviews')}} className='bg-indigo-500 px-4 md:px-6 xl:px-8 py-1 md:py-3 xl:py-4 rounded text-white uppercase mt-5'>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;