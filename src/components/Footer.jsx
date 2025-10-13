import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-8'>
            {/* <h1>Footer</h1> */}
            <div className='flex justify-around'>
                <div>
                    <img src="../assets/logo.png" alt="" />
                    <h1 className='text-white'>HERO.IO</h1>
                </div>
                <div>
                    <h1>Social Links</h1>
                    <ul className='flex'>
                        <li>X</li>
                        <li>in</li>
                        <li>Fb</li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;