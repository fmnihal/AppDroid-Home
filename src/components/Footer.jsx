import React from 'react';
import {Facebook} from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-8 text-white'>
            {/* <h1>Footer</h1> */}
            <div className='flex justify-around'>
                <div>
                    <img src="../assets/logo.png" alt="" />
                    <h1>HERO.IO</h1>
                </div>
                <div>
                    <h1>Social Links</h1>
                    <ul className='flex gap-2'>
                        <li><Twitter color="#ffffff" /></li>
                        <li><Linkedin color="#ffffff" /></li>
                        <li><Facebook color="#fafafa" /></li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;