import React from 'react';
import error404 from '../assets/error-404.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='m-20 bg-[#f1f5e8] text-center container mx-auto p-10 rounded-lg'>
            <img src={error404} alt="Error 404" className='mx-auto max-w-sm' />
            <h1 className='text-5xl my-5'>Oops, page not found!</h1>
            <p className='mb-6 text-xl'>The page you are looking for is not available.</p>
            <Link to="/">
                <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl'>Go Back!</button>
            </Link>
        </div>
    );
};

export default ErrorPage;