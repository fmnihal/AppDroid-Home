import React from 'react';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';

const Card = ({app}) => {
    
    const formatDownloads = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    };
    
    const ratingStyle = app.ratingAvg >= 4.5 
        ? 'bg-[#f1f5e8] text-[#00d390]'
        : 'bg-[#fff0e1] text-[#ff8811]';

    return (
        <div className='p-4'>
            <div className='bg-[#d9d9d9] rounded-md h-[285px] w-[285px] flex items-center justify-center overflow-hidden'>
                <img src={app.image} alt={app.title} className="h-20 w-20 object-cover" />
            </div>
            <h1 className='text-xl my-4'>{app.title}</h1>
            <div className='flex justify-between'>
                <p className={`flex items-center gap-1 p-1 rounded-sm ${ratingStyle}`}>
                    <span><img src={iconDownloads} alt="Downloads" className="h-4 w-4" /></span>
                    {formatDownloads(app.downloads)}
                </p>
                <p className={`flex items-center gap-1 p-1 rounded-sm ${ratingStyle}`}>
                    <span><img src={iconRatings} alt="Rating" className="h-4 w-4" /></span>
                    {app.ratingAvg}
                </p>
            </div>
        </div>
    );
};

export default Card;