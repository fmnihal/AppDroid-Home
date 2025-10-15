import React, {useState, useEffect} from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
// import logoImg from '../assets/logo.png';
import { useParams } from 'react-router-dom';

const AppDetails = () => {
    
    const { appId } = useParams();
    
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Helper function to format large numbers (FIX: Moved inside the component)
    const formatNumber = (num) => {
        if (num === undefined || num === null) return 'N/A';
        // Ensure num is a number before comparison
        if (typeof num !== 'number') num = parseFloat(num);
        if (isNaN(num)) return 'N/A';
        
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    useEffect(() => {
        const fetchAppDetails = async () => {
            try {
                // Fetch the entire JSON data
                const response = await fetch('/appsData.json'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // 2. Find the specific app based on the ID
                const foundApp = data.find(item => item.id === parseInt(appId, 10)); // Use parseInt if IDs are numbers
                if (foundApp) {
                    setApp(foundApp);
                } else {
                    setError(`App with ID "${appId}" not found.`);
                }
            } catch (err) {
                console.error("Failed to fetch app data:", err);
                setError("Failed to load application data. Check console for details.");
            } finally {
                setLoading(false);
            }
        };
        fetchAppDetails();
    }, [appId]);
    if (loading) {
        return <div className="text-center py-20 text-2xl font-semibold">Loading App Details...</div>;
    }
    if (error || !app) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl text-red-600 mb-4">Error Loading App</h1>
                <p className="text-xl">{error || "The requested application could not be loaded."}</p>
            </div>
        );
    }

    // Dynamic content extraction using the 'app' object
    const downloads = formatNumber(app.downloads);
    const ratingAvg = app.ratingAvg || 'N/A';
    // Using the 'reviews' field from the sample data
    const totalReviews = formatNumber(app.reviews); 
    const appSize = app.size ? `${app.size} MB` : 'Unknown Size'; // Formatting size
    const author = app.companyName || 'AppDroid'; // Using companyName as author
    const fallbackIcon = app.title ? app.title.charAt(0).toUpperCase() : '?';
    
    return (
        // <div className='w-11/12 mx-auto my-20'>
        //     <div className='flex gap-10'>
        //         <img src={logoImg} alt="" className='h-[100px]' />
        //         <div>
        //             <h1>SmPlan</h1>
        //             <p>Developed by app.author</p>
        //             <hr className='my-7' />
                    // <div className='flex justify-start'>
                    //     <div className='w-[150px]'>
                    //         <img src={downloadIcon} alt="" />
                    //         <p>Downloads</p>
                    //         <h1>8M</h1>
                    //     </div>
                    //     <div className='w-[150px]'>
                    //         <img src={ratingIcon} alt="" />
                    //         <p>Average Ratings</p>
                    //         <h1>4.9</h1>
                    //     </div>
                    //     <div className='w-[150px]'>
                    //         <img src={reviewIcon} alt="" />
                    //         <p>Total TReviews</p>
                    //         <h1>54K</h1>
                    //     </div>
                    // </div>
        //             <button className='btn bg-[#00d390] text-white border-none text-xl rounded-sm mt-7'>Install Now app.size</button>
        //         </div>
        //     </div>
        //     <hr className='my-10' />
        //     <h1 className='mb-6 text-xl text-[#001931] font-semibold'>Description</h1>
        //     <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
        // </div>












        // Using max-w-7xl and mx-auto for responsive centering
        <div className='max-w-7xl mx-auto px-4 py-8 my-10'>
            <div className='flex flex-col md:flex-row gap-8 items-start'>
                {/* App Icon/Logo */}
                <div className='flex-shrink-0'>
                    {app.image ? (
                        <img 
                            src={app.image} 
                            alt={`${app.title} icon`} 
                            className='h-75 shadow-md object-cover' 
                        />
                    ) : (
                        <div className='h-32 w-32 rounded-3xl shadow-xl border-4 border-gray-100 bg-gray-300 flex items-center justify-center'>
                            <span className='text-6xl font-bold text-gray-700'>{fallbackIcon}</span>
                        </div>
                    )}
                </div>
                
                {/* Details Section */}
                <div className='flex-grow'>
                    <h1 className='text-5xl font-extrabold text-[#001931]'>{app.title}</h1>
                    <p className='text-gray-600 mt-2 text-lg'>Developed by {author}</p>
                    
                    <hr className='my-7 border-gray-300' />
                    
                    {/* Stats Grid */}
                    {/* <div className='grid grid-cols-3 gap-6 text-center'>
                        <div className='p-4 bg-white rounded-xl shadow-md'>
                            <img src={downloadIcon} alt="" />
                            <p className='text-sm text-gray-500'>Downloads</p>
                            <h1 className='text-2xl font-bold text-[#001931]'>{downloads}</h1>
                        </div>
                        <div className='p-4 bg-white rounded-xl shadow-md'>
                            <img src={ratingIcon} alt="" />
                            <p className='text-sm text-gray-500'>Average Rating</p>
                            <h1 className='text-2xl font-bold text-[#001931]'>{ratingAvg}</h1>
                        </div>
                        <div className='p-4 bg-white rounded-xl shadow-md'>
                            <img src={reviewIcon} alt="" />
                            <p className='text-sm text-gray-500'>Total Reviews</p>
                            <h1 className='text-2xl font-bold text-[#001931]'>{totalReviews}</h1>
                        </div>
                    </div> */}
                    
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
                            <p>Total Reviews</p>
                            <h1>54K</h1>
                        </div>
                    </div>
                    
                    {/* Install Button */}
                    <button className='w-full md:w-auto btn bg-[#00d390] hover:bg-[#00c080] transition duration-200 text-white border-none text-xl font-semibold rounded-lg mt-7 px-10 py-3'>
                        Install Now ({appSize})
                    </button>
                </div>
            </div>
            
            <hr className='my-10 border-gray-300' />
            
            {/* Description Section */}
            <h1 className='mb-6 text-3xl text-[#001931] font-bold'>Description</h1>
            <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
                {app.description || "No detailed description is available for this application."}
            </p>
        </div>
    );
};
export default AppDetails;