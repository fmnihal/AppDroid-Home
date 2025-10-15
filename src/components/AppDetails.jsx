import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import logoImg from '../assets/logo.png';

const AppDetails = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='flex gap-10'>
                <img src={logoImg} alt="" className='h-[100px]' />
                <div>
                    <h1>SmPlan</h1>
                    <p>Developed by app.author</p>
                    <hr className='my-7' />
                    <div className='flex justify-start'>
                        <div className='w-[150px]'>
                            <img src={downloadIcon} alt="" />
                            <p>Downloads</p>
                            <h1>8M</h1>
                        </div>
                        <div className='w-[150px]'>
                            <img src={ratingIcon} alt="" />
                            <p>Average Ratings</p>
                            <h1>4.9</h1>
                        </div>
                        <div className='w-[150px]'>
                            <img src={reviewIcon} alt="" />
                            <p>Total TReviews</p>
                            <h1>54K</h1>
                        </div>
                    </div>
                    <button className='btn bg-[#00d390] text-white border-none text-xl rounded-sm mt-7'>Install Now app.size</button>
                </div>
            </div>
            <hr className='my-10' />
            <h1 className='mb-6 text-xl text-[#001931] font-semibold'>Description</h1>
            <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
        </div>
    );
};
export default AppDetails;