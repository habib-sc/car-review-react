
import React from 'react';
import starRating from '../../utilities/starRating';

const ReviewCard = (props) => {
    const { name, text, rating, img } = props.review;
    const ratingNum = parseInt(rating);
    return (
        <div className='shadow-xl border border-gray-300 rounded-lg p-5 text-center'>
            <img src={img} alt="" className='rounded-full h-12 mx-auto'/>
            <h3 className='text-xl font-semi-bold my-2'>{name}</h3>
            <div className='flex items-center justify-center mb-2'>{rating}<span className='mr-2'>/5</span>
                {ratingNum &&
                    starRating(ratingNum)
                }
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ReviewCard;