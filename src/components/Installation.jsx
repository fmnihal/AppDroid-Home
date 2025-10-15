import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// --- Utility Functions Included Here to avoid external import errors ---

/**
 * Formats large numbers (downloads, reviews) into K (thousands) or M (millions).
 * @param {number | string} num - The number to format.
 * @returns {string} The formatted string (e.g., "1.5M").
 */
const formatNumber = (num) => {
    if (num === undefined || num === null) return 'N/A';
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

// Helper function to get installed app IDs from localStorage
const getInstalledAppIds = () => {
    return JSON.parse(localStorage.getItem('installedApps') || '[]');
};

// Helper function to remove an app ID from localStorage
const uninstallApp = (id) => {
    let installedApps = getInstalledAppIds();
    installedApps = installedApps.filter(appId => appId !== id);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
};


const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalApps, setTotalApps] = useState(0);
    const [sortType, setSortType] = useState('size'); // State for sorting

    const fetchInstalledApps = async () => {
        setLoading(true);
        try {
            const response = await fetch('/appsData.json'); 
            if (!response.ok) throw new Error('Failed to fetch app data.');
            const allApps = await response.json();

            const installedIds = getInstalledAppIds();
            const filteredApps = allApps.filter(app => installedIds.includes(app.id));

            setInstalledApps(filteredApps);
            setTotalApps(filteredApps.length);
        } catch (err) {
            console.error("Error fetching installed apps:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInstalledApps();
    }, []);

    const handleUninstall = (id) => {
        uninstallApp(id);
        fetchInstalledApps(); 
    };

    // Handler for when the sort dropdown value changes
    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    // Memoized sorting logic
    const sortedApps = useMemo(() => {
        let sortableApps = [...installedApps];

        if (sortType === 'size') {
            // Sort by size (descending - largest first)
            sortableApps.sort((a, b) => (b.size || 0) - (a.size || 0));
        } else if (sortType === 'name') {
            // Sort by name (A-Z)
            sortableApps.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        }

        return sortableApps;
    }, [installedApps, sortType]); // Dependencies: only runs when installedApps or sortType changes
    
    // Component to render a single installed app item
    const InstalledAppItem = ({ app }) => {
        const downloads = app.downloads ? formatNumber(app.downloads) : 'N/A';
        const rating = app.ratingAvg || 'N/A';
        const size = app.size ? `${app.size} MB` : 'N/A';
        const fallbackIcon = app.title ? app.title.charAt(0).toUpperCase() : '?';

        return (
            <div className="flex justify-between items-center bg-white p-4 my-3 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center">
                    {/* App Icon/Logo */}
                    <Link to={`/apps/${app.id}`} className='flex-shrink-0 mr-4'>
                        {app.image ? (
                            <img
                                src={app.image}
                                alt={`${app.title} icon`}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/48x48/f0f4f8/808080?text=App"; }}
                                className='h-12 w-12 rounded-lg object-cover'
                            />
                        ) : (
                            <div className='h-12 w-12 rounded-lg bg-gray-300 flex items-center justify-center'>
                                <span className='text-xl font-bold text-gray-700'>{fallbackIcon}</span>
                            </div>
                        )}
                    </Link>
                    
                    {/* App Details */}
                    <div>
                        <Link to={`/apps/${app.id}`} className='text-lg font-semibold text-[#001931] hover:text-purple-600 transition duration-150'>
                            {app.title}
                        </Link>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                            {/* Download Count */}
                            <span className="mr-3 flex items-center">
                                <span className='text-green-500 mr-1'>↓</span>{downloads}
                            </span>
                            {/* Rating */}
                            <span className="mr-3 flex items-center">
                                <span className='text-yellow-500 mr-1'>★</span>{rating}
                            </span>
                            {/* Size */}
                            <span className="mr-3">{size}</span>
                        </div>
                    </div>
                </div>

                {/* Uninstall Button, changed to red for clarity */}
                <button onClick={() => handleUninstall(app.id)} className='btn bg-green-500 hover:bg-green-600 text-white border-none text-md font-semibold rounded-lg px-4 py-2 transition duration-200'
                >Uninstall</button>
            </div>
        );
    };

    return (
        <div className='max-w-7xl mx-auto px-4 py-8 my-10'>
            {/* Header section matching the Figma */}
            <div className='text-center py-10 bg-gray-50 rounded-xl mb-8 shadow-inner'>
                <h1 className='text-5xl font-extrabold text-[#001931] mb-2'>Your Installed Apps</h1>
                <p className='text-gray-600 text-lg'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            {loading ? (
                <div className="text-center py-10 text-xl text-gray-600">Loading installed apps...</div>
            ) : (
                <>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-xl font-bold text-[#001931]'>{totalApps} {totalApps === 1 ? 'App' : 'Apps'} Found</h2>
                        
                        {/* Sorting UI: connected to state and handler */}
                        <div className='text-gray-600'>
                            <label htmlFor="sort-select" className="mr-2 text-sm font-medium">Sort By:</label>
                            <select 
                                id="sort-select"
                                value={sortType}
                                onChange={handleSortChange}
                                className="p-2 border rounded-lg bg-white shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="size">Size (Largest First)</option>
                                <option value="name">Name (A-Z)</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='space-y-4'>
                        {/* Renders the newly sorted array */}
                        {sortedApps.length > 0 ? (
                            sortedApps.map(app => (
                                <InstalledAppItem key={app.id} app={app} />
                            ))
                        ) : (
                            <div className="text-center py-10 text-xl text-gray-600 border border-dashed p-10 rounded-xl bg-white shadow-sm">
                                You haven't installed any apps yet. Install one from the Apps page!
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
export default Installation;