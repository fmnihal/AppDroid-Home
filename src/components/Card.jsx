import React from 'react';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import { Link } from 'react-router';

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

    return (
        // <div className='p-4 bg-white'>
        //     <div className='bg-[#d9d9d9] rounded-md flex items-center justify-center overflow-hidden'>
        //         <img src={app.image} alt={app.title} className="h-40 w-40 object-cover" />
        //     </div>
        //     <h1 className='text-xl my-4 font-medium'>{app.title}</h1>
            // <div className='flex justify-between'>
            //     <p className='flex items-center gap-1 px-3 py-2 rounded-sm bg-[#f1f5e8] text-[#00d390]'>
            //         <span><img src={iconDownloads} alt="Downloads" className="h-4 w-4" /></span>
            //         {formatDownloads(app.downloads)}
            //     </p>
            //     <p className='flex items-center gap-1 px-3 py-2 rounded-sm bg-[#fff0e1] text-[#ff8811]'>
            //         <span><img src={iconRatings} alt="Rating" className="h-4 w-4" /></span>
            //         {app.ratingAvg}
            //     </p>
            // </div>
        // </div>







        <Link to={`/apps/${app.id}`} className='block hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 rounded-lg'>
            <div className='p-4 h-full bg-white'>
                {/* Image Container */}
                <div className='bg-[#d9d9d9] rounded-md h-[200px] flex items-center justify-center overflow-hidden'>
                    <img src={app.image} alt={app.title} className="h-40 w-40 object-cover" />
                </div>
                
                <h1 className='text-xl my-4 font-medium text-[#001931]'>{app.title}</h1>
                
                {/* <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-1 px-3 py-2 rounded-sm bg-[#f1f5e8] text-[#00d390]'>
                        <img src={iconDownloads} alt="" />
                        {formatDownloads(app.downloads)}
                    </p>
                    <p className='flex items-center gap-1 px-3 py-2 rounded-sm bg-[#fff0e1] text-[#ff8811]'>
                        <img src={iconRatings} alt="" />
                        {app.ratingAvg}
                    </p>
                </div> */}

                <div className='flex justify-between'>
                    <p className='flex items-center gap-1 px-3 py-2 rounded-sm bg-[#f1f5e8] text-[#00d390]'>
                        <span><img src={iconDownloads} alt="Downloads" className="h-4 w-4" /></span>
                        {formatDownloads(app.downloads)}
                    </p>
                    <p className='flex items-center gap-1 px-3 py-2 rounded-sm bg-[#fff0e1] text-[#ff8811]'>
                        <span><img src={iconRatings} alt="Rating" className="h-4 w-4" /></span>
                        {app.ratingAvg}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;