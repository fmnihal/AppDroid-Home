import React from 'react';
import {Facebook} from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-8 text-white'>
            <div className='w-11/12 mx-auto flex justify-between h-16'>
                <Link className='flex gap-2 items-center'>
                    <img src={logoImg} alt="" className='h-10' /> <h1 className='font-bold'>AppDroid</h1>
                </Link>
                <div className='space-y-3'>
                    <h1 className='text-xl'>Social Links</h1>
                    <ul className='flex'>
                        <li className='mr-3'><Twitter color="#ffffff" /></li>
                        <li className='mr-2'><Linkedin color="#ffffff" /></li>
                        <li><Facebook color="#fafafa" /></li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;