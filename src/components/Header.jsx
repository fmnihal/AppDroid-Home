import React, {useState} from 'react';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';

const Header = () => {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const handleLinkClick = () => {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };
    
    const NavLinks = ({ isMobile = false }) => (
        <ul className={`menu menu-vertical lg:menu-horizontal p-0 gap-8 text-lg font-medium`}>
            <li className={isMobile ? '' : ''}><Link to="/" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Home</Link></li>
            <li className={isMobile ? '' : ''}><Link to="/apps" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Apps</Link></li>
            <li className={isMobile ? '' : ''}><Link to="/installation" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Installation</Link></li>
        </ul>
    );
    
    return (
        <header className="py-4 bg-white shadow-md sticky top-0 z-50">
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 cursor-pointer">
                        <img src={logoImg} alt="AppDroid Logo" className='h-10' />
                        <h1 className='text-purple-600'>AppDroid</h1>
                    </Link>
                </div>
                
                <nav className="hidden lg:flex flex-1 justify-center">
                    <NavLinks />
                </nav>

                <div className='flex items-center'>
                    <button 
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)} 
                        className="p-2 mr-4 text-gray-700 focus:outline-none lg:hidden cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    
                    <Link to='https://github.com/fmnihal' className="hidden lg:block"> 
                        <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl cursor-pointer'>
                            <Github /> Contribute
                        </button>
                    </Link>
                </div>
            </div>

            <div className={`
                fixed top-0 right-0 h-full w-64 bg-white shadow-xl 
                transform transition-transform duration-300 ease-in-out 
                z-[100] p-6 pt-6 lg:hidden
                ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                     <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 cursor-pointer" onClick={handleLinkClick}>
                        <img src={logoImg} alt="AppDroid Logo" className='h-8' />
                        <h1 className='text-purple'>AppDroid</h1>
                    </Link>
                    <button 
                        onClick={() => setIsDrawerOpen(false)} 
                        className="p-1 text-gray-700 hover:text-red-500 cursor-pointer"
                        aria-label="Close Menu"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                <NavLinks isMobile={true} />
                
                <div className='mt-8 pt-4 border-t border-gray-200'>
                    <Link to='https://github.com/fmnihal' onClick={handleLinkClick}>
                        <button className='w-full btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl cursor-pointer'>
                            <Github /> Contribute
                        </button>
                    </Link>
                </div>
            </div>

            {isDrawerOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-40 z-40 lg:hidden cursor-pointer" 
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
            )}
            
        </header>
    );
};
export default Header;