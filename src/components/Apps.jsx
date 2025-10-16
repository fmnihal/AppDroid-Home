import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import AppError from '../assets/App-Error.png';
import { Link } from 'react-router';

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
            <p className='text-center text-xl my-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between mb-5 items-center px-5'>
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5'>
                    {filteredApps.map((app) => ( 
                        <Card key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className='text-center'>
                    <img src={AppError} alt="" className='mx-auto mt-15 mb-12' />
                    <h1 className='text-5xl mb-6'>Oops..App Not Found</h1>
                    <p className='mb-4 text-xl'>The app you are requesting is not on our app. Try another app.</p>
                    <Link to="/">
                        <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl'>Go Back!</button>
                    </Link>
                </div>
            )}

        </div>
    );
};
export default Apps;