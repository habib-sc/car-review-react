import { StarIcon } from '@heroicons/react/solid';
const starRating = (ratingNum) => {
    let stars = [];
    for(let i= 0; i < ratingNum; i++) {
        stars.push(<StarIcon key={i} className='text-orange-500 h-6'></StarIcon>);
    }
    return (
        <div className='flex'>{stars}</div>
    );
};

export default starRating;