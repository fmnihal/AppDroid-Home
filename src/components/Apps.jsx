import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';

const Apps = () => {
    
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
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

    const filteredApps = useMemo(() => {
        if (!searchTerm) {
            return apps;
        }
        const lowerCaseSearch = searchTerm.toLowerCase();
        const searchWords = lowerCaseSearch.split(/\s+/).filter(word => word.length > 0);
        if (searchWords.length === 0) {
            return apps;
        }
        return apps.filter(app => {
            const lowerCaseTitle = app.title ? app.title.toLowerCase() : '';
            const overallMatch = lowerCaseTitle.includes(lowerCaseSearch);
            const wordStartMatch = searchWords.every(word => {
                const titleWords = lowerCaseTitle.split(/\s+/);
                return titleWords.some(titleWord => titleWord.startsWith(word));
            });
            return overallMatch || wordStartMatch;
        });
    }, [apps, searchTerm]);
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const appsFound = filteredApps.length;


    if (loading) {
        return <div className="text-center py-10 text-xl">Loading applications...</div>;
    }
    if (error) {
        return <div className="text-center py-10 text-xl text-red-600 font-semibold">{error}</div>;
    }
    
    return (
        <div className='container mx-auto bg-[#f1f5e8] mb-20 mt-15'>
            <h1 className='text-[48px] text-center'>Our All Applications</h1>
            <p className='text-center text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between mb-5 items-center'>
                <h2 className='text-2xl font-semibold'>({appsFound}) Apps Found</h2>

                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    </svg>
                    <input 
                        type="search" 
                        required 
                        placeholder="Search Apps" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    /> 
                </label>
            </div>

            {appsFound > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {filteredApps.map((app) => ( 
                        <Card key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-xl text-gray-600 border border-dashed p-10 rounded-xl bg-white shadow-sm">
                    No applications found matching "{searchTerm}".
                </div>
            )}

        </div>
    );
};
export default Apps;