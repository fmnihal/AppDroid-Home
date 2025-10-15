import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';

const Apps = () => {
    
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    // const [newAppState, setNewAppState] = useState(false);
    
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

    // MOVED: useMemo MUST be defined here, BEFORE any conditional returns (like if (loading))
    const filteredApps = useMemo(() => {
        if (!searchTerm) {
            return apps; // If no search term, return all apps
        }
        const lowerCaseSearch = searchTerm.toLowerCase();
        // Split the search term into individual words (words are separated by non-word characters or spaces)
        const searchWords = lowerCaseSearch.split(/\s+/).filter(word => word.length > 0);
        if (searchWords.length === 0) {
            return apps;
        }
        return apps.filter(app => {
            const lowerCaseTitle = app.title ? app.title.toLowerCase() : '';
            // Check if the whole search term is included anywhere in the title (Fallback/Flexibility)
            const overallMatch = lowerCaseTitle.includes(lowerCaseSearch);
            // Check if the search term starts any word in the title (Prioritization)
            const wordStartMatch = searchWords.every(word => {
                // Split the app title into words for checking
                const titleWords = lowerCaseTitle.split(/\s+/);
                // Check if ANY word in the title starts with the current search word
                return titleWords.some(titleWord => titleWord.startsWith(word));
            });
            // Return true if either the whole term is included OR if it starts any word
            // This balances strictness and flexibility.
            return overallMatch || wordStartMatch;
        });
    }, [apps, searchTerm]); // Dependency: recalculate when apps or searchTerm changes
    
    // MOVED: Handler for search input changes (doesn't have to be moved, but cleaner here)
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    // ADDED: Calculate the count of currently displayed apps
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
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                
                {/* <label className="input">
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
                    <input type="search" required placeholder="Search Apps" />
                </label> */}

                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    </svg>
                    {/* CHANGED: Connect input to state */}
                    <input 
                        type="search" 
                        required 
                        placeholder="Search Apps" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    /> 
                </label>
            </div>

            {/* CHANGED: Conditional rendering for list or empty message */}
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

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {filteredApps.map((app) => ( 
                    <Card key={app.id} app={app} />
                ))}
            </div> */}

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {apps.map((app) => (
                    <Card key={app.id} app={app} />
                ))}
            </div> */}

        </div>
    );
};

export default Apps;