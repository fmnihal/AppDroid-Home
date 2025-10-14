import React, { useState, useEffect } from 'react';
import Card from './Card';

const Apps = () => {
    
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the JSON file from the public folder
                const response = await fetch('/appsData.json'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setApps(data);
            } catch (err) {
                console.error("Failed to fetch app data:", err);
                setError("Failed to load application data. Check console for details.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return <div className="text-center py-10 text-xl">Loading applications...</div>;
    }
    if (error) {
        return <div className="text-center py-10 text-xl text-red-600 font-semibold">{error}</div>;
    }
    
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-[48px]'>Our All Applications</h1>
            <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <h2>132 Apps</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {apps.map((app) => (
                    <Card key={app.id} app={app} />
                ))}
            </div>

        </div>
    );
};

export default Apps;