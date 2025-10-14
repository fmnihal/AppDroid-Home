import React, {useEffect, useState} from 'react';
import heroImg from '../assets/hero.png';
import Card from './Card';

const Home = () => {

    const [featuredApps, setFeaturedApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalApps, setTotalApps] = useState(0);
    useEffect(() => {
        fetch('/appsData.json') // Fetch from the root, as it's in the public folder
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch app data');
                }
                return res.json();
            })
            .then(data => {
                // Slice the data to get only the first 8 apps
                setFeaturedApps(data.slice(0, 8));
                setTotalApps(data.length); // Get the total count
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading app data:", error);
                setLoading(false);
            });
    }, []);
    
    return (
        <div className='bg-[#f1f5e8]'>
            <div id='banner' className='pt-10 bg-purple text-black w-11/12 container mx-auto text-center'>
                <h1 className='mb-4 text-7xl'>We Build <span className='text-purple-700'>Productive</span> Apps</h1>
                <p className='max-w-3xl mx-auto mb-5'>At AppDroid, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='mb-5 space-x-5'>
                    <button className="btn btn-outline">Play Store</button>
                    <button className="btn btn-outline">App Store</button>
                </div>
                <img src={heroImg} alt="" className='mx-auto block' />
            </div>

            <div className='bg-purple-800 py-10 text-white w-full'>
                {/* NEW: Start a centered container to constrain content width and center text */}
                <div className='container mx-auto px-4'> 
                    {/* CHANGED: Added styling and text-center for the main stats heading */}
                    <h1 className='mb-10 text-3xl font-bold text-center'>Trusted by Millions, Built for You</h1> 
                    
                    {/* CHANGED: Added justify-around to space stats evenly */}
                    <div className='flex justify-around items-center text-center'> 
                        {/* Stat Block 1 */}
                        <div className='p-4'>
                            <p className='text-lg'>Total Downloads</p>
                            <h1 className='text-4xl font-extrabold mt-1'>209.6M</h1> {/* CHANGED: Added styling */}
                            <p className='text-green-300 text-sm mt-1'>21% More Than Last Month</p> {/* CHANGED: Added styling */}
                        </div>
                        {/* Stat Block 2 */}
                        <div className='p-4'>
                            <p className='text-lg'>Total Reviews</p>
                            <h1 className='text-4xl font-extrabold mt-1'>906K</h1> {/* CHANGED: Added styling */}
                            <p className='text-green-300 text-sm mt-1'>46% More Than Last Month</p> {/* CHANGED: Added styling */}
                        </div>
                        {/* Stat Block 3 */}
                        <div className='p-4'>
                            <p className='text-lg'>Active Apps</p>
                            <h1 className='text-4xl font-extrabold mt-1'>132+</h1> {/* CHANGED: Added styling */}
                            <p className='text-green-300 text-sm mt-1'>31 More Will Launch</p> {/* CHANGED: Added styling */}
                        </div>
                    </div>
                </div> {/* NEW: Close the centered container */}
            </div>


            {/* =================================================== */}
            {/* FEATURED APPS SECTION */}
            {/* =================================================== */}
            <div className='container mx-auto px-4 py-12'>
                <h2 className='text-4xl font-bold text-center mb-5'>Trending Apps</h2>
                <p className='text-center mb-5'>Explore All Trending Apps on the Market developed by us</p>
                {loading ? (
                    <p className='text-center text-xl'>Loading apps...</p>
                ) : (
                    // CHANGED: Adjusted grid columns to fit the width of your Card component (285px wide card)
                    // The 'grid-cols-4' ensures 4 cards per row for desktop, displaying 8 apps in two neat rows.
                    <div className='grid justify-items-center gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {featuredApps.map((app) => (
                            <Card key={app.id} app={app} /> // CHANGED: Using 'Card' component
                        ))}
                    </div>
                )}
                <div className='text-center mt-12'>
                    {/* Displaying total count from fetched data */}
                    <button className="btn btn-primary text-white px-6 py-3 rounded-lg shadow-md">
                        Show All ({totalApps})
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;