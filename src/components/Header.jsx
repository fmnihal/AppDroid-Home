import React from 'react';
import logoImg from '../assets/logo.png'

const Header = () => {
    return (
        <div className='w-full py-4'>
            {/* <h1>Header</h1> */}
            <div className='w-11/12 flex justify-around items-center'>
                <div className='flex items-center gap-2'>
                    <img src={logoImg} alt="" className='h-10' />
                    <h1 className='text-purple'>HERO.IO</h1>
                </div>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>Apps</li>
                    <li>Installation</li>
                </ul>
                <button className='bg-purple text-white'>Contribute</button>
            </div>
        </div>
    );
};

export default Header;