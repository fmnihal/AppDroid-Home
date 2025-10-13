import React from 'react';

const Header = () => {
    return (
        <div className='w-full py-4'>
            {/* <h1>Header</h1> */}
            <div className='w-11/12 flex justify-around'>
                <div>
                    <img src="../assets/logo.png" alt="" />
                    <h1 className='text-purple'>HERO.IO</h1>
                </div>
                <ul className='flex'>
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