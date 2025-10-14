import React from 'react';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        // <div className='w-full py-4'>
        //     {/* <h1>Header</h1> */}
        //     <div className='w-11/12 flex justify-around items-center'>
        //         <div className='flex items-center gap-2'>
        //             <img src={logoImg} alt="" className='h-10' />
        //             <h1 className='text-purple'>HERO.IO</h1>
        //         </div>
        //         <ul className='flex gap-4'>
        //             <li>Home</li>
        //             <li>Apps</li>
        //             <li>Installation</li>
        //         </ul>
        //         <button className='bg-purple text-white'>Contribute</button>
        //     </div>
        // </div>

        // <header className="navbar bg-base-100">
        <header className="flex justify-between items-center w-11/12 mx-auto py-4 px-8 bg-white">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                    <img src={logoImg} alt="" className='h-10' />
                    <h1 className='text-purple'>AppDroid</h1>
                </Link>
            </div>
            <nav className="flex-1 flex justify-center">
                <ul className="menu menu-horizontal p-0 gap-8 text-lg font-medium">
                    <li><Link to="/" className="text-gray-700 hover:text-blue-600 active:text-blue-800">Home</Link></li>
                    <li><Link to="/apps" className="text-gray-700 hover:text-blue-600 active:text-blue-800">Apps</Link></li>
                    <li><Link to="/installation" className="text-gray-700 hover:text-blue-600 active:text-blue-800">Installation</Link></li>
                </ul>
            </nav>
            <div className="flex-none">
                <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none'>Contribute</button>
            </div>
        </header>
    );
};

export default Header;