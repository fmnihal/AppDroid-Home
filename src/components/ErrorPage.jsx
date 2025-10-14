import React from 'react';
import error404 from '../assets/error-404.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='m-20 bg-[#f1f5e8] text-center container mx-auto p-10 rounded-lg'>
            <img src={error404} alt="Error 404" className='mx-auto max-w-sm' />
            <h1 className='text-5xl my-5'>Oops, page not found!</h1>
            <p className='mb-6'>The page you are looking for is not available.</p>
            <Link to="/">
                <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none'>Go Back!</button>
            </Link>
        </div>


        // <div className='m-20 bg-[#f1f5e8] text-center container mx-auto p-10 rounded-lg'> 
        //     <img src={error404} alt="Error 404" className='mx-auto max-w-sm'/> {/* NEW: Added centering/max-width to image */}
        //     <h1 className='text-5xl mt-5'>Oops, page not found!</h1>
        //     <p className='mb-6'>The page you are looking for is not available.</p> {/* NEW: Added margin-bottom */}
        //     {/* CHANGED: Added onClick handler to navigate home */}
        //     <button 
        //         onClick={() => navigate('/')} 
        //         className='btn bg-purple-600 text-white hover:bg-purple-700 border-none px-6 py-2 rounded-lg'
        //     >
        //         Go Home
        //     </button>
        // </div>
    );
};

export default ErrorPage;