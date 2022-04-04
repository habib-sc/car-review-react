import React from 'react';
import useReviews from '../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container mx-auto mb-10'>
            <div>
                <h1 className='text-3xl text-center my-10 text-indigo-500 font-bold uppercase'>What Peoples Says!</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    {
                        reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;