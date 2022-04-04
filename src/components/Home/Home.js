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
            <div className="md:h-[90vh] flex flex-col md:flex-row justify-between items-center">
                <div className='w-[60%] order-2 md:order-1 mx-auto md:mx-0 text-center md:text-left'>
                    <h1 className='text-3xl md:text-6xl xl:text-8xl text-indigo-600 uppercase font-bold'>Are you thinking to buy a car?</h1>
                    <h1 className='text-2xl md:text-5xl xl:text-7xl uppercase'>Just see our reviews befor you buy a car</h1>
                    <button onClick={() => {navigate('/reviews')}} className='bg-indigo-500 px-4 md:px-6 xl:px-8 py-1 md:py-3 xl:py-4 rounded text-white uppercase mt-5'>View Reviews</button>
                </div>
                <div className='order-1 md:order-2 mx-auto md:mx-0 py-4 md:py-0'>
                    <img src={carImg} alt="" className='h-64 md:h-96 xl:h-[600px] rounded-lg'/>
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-center my-10 text-indigo-500 font-bold uppercase'>What Peoples Says!</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
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