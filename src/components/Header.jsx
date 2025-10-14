import React from 'react';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';


const Header = () => {
    return (
        <header className="py-4 px-8 bg-white">
            <div className='w-11/12 mx-auto flex justify-between items-center'>
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
                <Link to='https://github.com/fmnihal'>
                <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none'><Github /> Contribute</button>
                </Link>
            </div>
            
        </header>
    );
};

export default Header;