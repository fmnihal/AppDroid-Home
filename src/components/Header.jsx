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

        <header className="navbar bg-base-100">
            <div className="flex-1">
                {/* Link to the Home page (which is the index/default route) */}
                <Link to="/" className="btn btn-ghost text-xl">
                    AppDroid
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        {/* Link to the Apps page: /apps */}
                        <Link to="/apps">Apps</Link> 
                    </li>
                    <li>
                        {/* Link to the Installation page: /installation */}
                        <Link to="/installation">Installation</Link> 
                    </li>
                    {/* The Home page is the default, but you can also explicitly link to it */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;