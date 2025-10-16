import React, {useState, useEffect} from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from '../utils.js';

const AppDetails = () => {
    
    const { appId } = useParams();
    
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const fetchAppDetails = async () => {
            try {
                const response = await fetch('/appsData.json'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const foundApp = data.find(item => item.id === parseInt(appId, 10));
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

    const handleInstallClick = () => {
        const id = parseInt(appId, 10);
        let installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        if (isInstalled) {
            installedApps = installedApps.filter(appId => appId !== id);
        } else {
            if (!installedApps.includes(id)) {
                installedApps.push(id);
            }
        }
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        setIsInstalled(prev => !prev);
    };

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

    const appSize = app.size ? `${app.size} MB` : 'Unknown Size';
    const author = app.companyName || 'AppDroid';
    const fallbackIcon = app.title ? app.title.charAt(0).toUpperCase() : '?';

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="p-2 bg-white rounded-md shadow-lg border border-gray-200">
                    <p className="text-sm font-semibold text-[#001931]">{payload[0].payload.name}</p>
                    <p className="text-xs text-gray-600">{`${formatNumber(payload[0].value)} Reviews`}</p>
                </div>
            );
        }
        return null;
    };

    const chartData = app.ratings || [];

    const sortedChartData = [...chartData].sort((a, b) => {
        const starA = parseInt(a.name.split(' ')[0]);
        const starB = parseInt(b.name.split(' ')[0]);
        return starB - starA; 
    });

    
    return (
        
        <div className='max-w-7xl mx-auto px-4 py-8 my-10'>
            <div className='flex flex-col md:flex-row gap-8 items-start'>
                
                <div className='flex-shrink-0'>
                    {app.image ? (
                        <img 
                            src={app.image} 
                            alt={`${app.title} icon`} 
                            className='h-85 object-cover' 
                        />
                    ) : (
                        <div className='h-32 w-32 rounded-3xl shadow-xl border-4 border-gray-100 bg-gray-300 flex items-center justify-center'>
                            <span className='text-6xl font-bold text-gray-700'>{fallbackIcon}</span>
                        </div>
                    )}
                </div>
                
                <div className='flex-grow'>
                    <h1 className='text-5xl font-extrabold text-[#001931]'>{app.title}</h1>
                    <p className='text-gray-600 mt-2 text-xl'>Developed by <span className='text-purple-600'>{author}</span></p>
                    
                    <hr className='my-7 border-gray-300' />
                    <div className='flex justify-start'>
                        <div className='w-[170px]'>
                            <img src={downloadIcon} alt="" />
                            <p className='mt-3 text-xl'>Downloads</p>
                            <h1 className='text-[40px] font-bold'>{formatNumber(app.downloads)}</h1>
                        </div>
                        <div className='w-[170px]'>
                            <img src={ratingIcon} alt="" />
                            <p className='mt-3 text-xl'>Average Ratings</p>
                            <h1 className='text-[40px] font-bold'>{app.ratingAvg}</h1>
                        </div>
                        <div className='w-[170px]'>
                            <img src={reviewIcon} alt="" />
                            <p className='mt-3 text-xl'>Total Reviews</p>
                            <h1 className='text-[40px] font-bold'>{app.reviews}</h1>
                        </div>
                    </div>

                    <button onClick={handleInstallClick} className={`w-full md:w-auto btn transition duration-200 text-white border-none text-xl font-semibold rounded-lg mt-7 px-10 py-3 ${
                            isInstalled 
                                ? 'bg-gray-500 hover:bg-gray-600 cursor-default' 
                                : 'bg-[#00d390] hover:bg-[#00c080]'
                        }`} disabled={isInstalled}
                    >
                        {isInstalled ? 'Installed' : `Install Now (${appSize})`}
                    </button>
                </div>
            </div>
            
            <hr className='my-10 border-gray-300' />
            <div className="p-8 rounded-2xl border border-gray-100">
                <h2 className='mb-6 text-3xl text-[#001931] font-bold'>Ratings</h2>
                <div className="h-64 w-full" tabIndex="-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={sortedChartData}
                            layout="vertical"
                            barCategoryGap="50%"
                            margin={{ top: 0, right: 30, left: -10, bottom: 0 }} 
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                axisLine={false}
                                tickLine={false}
                                stroke="#4b5563"
                                tickFormatter={(value) => formatNumber(value)}
                            />
                            <YAxis
                                type="category"
                                dataKey="name" 
                                axisLine={false}
                                tickLine={false}
                                stroke="#4b5563"
                                fontSize={14}
                                padding={{ top: 0, bottom: 0, left: 0, right: 0 }} 
                            />
                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={false}
                            />
                            <Bar
                                dataKey="count"
                                fill="#f97316"
                                radius={[4, 4, 4, 4]}
                                barSize={32}
                                activeBar={{ fill: '#ff8533' }} 
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <hr className='my-10 border-gray-300' />
            <h1 className='mb-6 text-3xl text-[#001931] font-bold'>Description</h1>
            <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
                {app.description || "No detailed description is available for this application."}
            </p>
        </div>
    );
};
export default AppDetails;