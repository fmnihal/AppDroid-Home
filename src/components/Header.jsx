// import React, {useState} from 'react';
// import logoImg from '../assets/logo.png'
// import { Link } from 'react-router-dom';
// import { Github, Menu, X } from 'lucide-react';


// const Header = () => {
    
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     // const toggleDrawer = () => {
//     //     setIsDrawerOpen(!isDrawerOpen);
//     // };
//     const handleLinkClick = () => {
//         if (isDrawerOpen) {
//             setIsDrawerOpen(false);
//         }
//     };
    
//     const NavLinks = ({ isMobile = false }) => (
//         <ul className={`menu menu-vertical lg:menu-horizontal p-0 gap-8 text-lg font-medium ${isMobile ? 'space-y-2' : ''}`}>
//             <li><Link to="/" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Home</Link></li>
//             <li><Link to="/apps" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Apps</Link></li>
//             <li><Link to="/installation" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Installation</Link></li>
//         </ul>
//     );
    
//     return (
//         <header className="py-4 bg-white">
//             <div className='w-11/12 mx-auto flex justify-between items-center'>
//                 <div className="flex items-center gap-2">
//                     <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
//                         <img src={logoImg} alt="" className='h-10' />
//                         <h1 className='text-purple'>AppDroid</h1>
//                     </Link>
//                 </div>
//                 <nav className="hidden flex-1 md:flex justify-center">

//                     <NavLinks></NavLinks>
//                 </nav>

//                 <div className='flex items-center lg:hidden'>
//                     <button 
//                         onClick={toggleDrawer} 
//                         className="p-2 mr-4 text-gray-700 focus:outline-none"
//                     >
//                         {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                     <Link to='https://github.com/fmnihal' className="hidden sm:block"> 
//                         <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl'>
//                             <Github /> Contribute
//                         </button>
//                     </Link>
//                 </div>
//             </div>

//             {isDrawerOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden" 
//                     onClick={() => setIsDrawerOpen(false)}
//                 ></div>
//             )}

//         </header>
//     );
// };
// export default Header;




// import React, {useState} from 'react';
// import logoImg from '../assets/logo.png'
// import { Link } from 'react-router-dom';
// import { Github, Menu, X } from 'lucide-react';


// const Header = () => {
    
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
//     // Function to close the drawer, used by all internal links and the close button.
//     const handleLinkClick = () => {
//         if (isDrawerOpen) {
//             setIsDrawerOpen(false);
//         }
//     };
    
//     // Fixed: Reduced mobile vertical spacing from 'space-y-2' to 'space-y-1'.
//     const NavLinks = ({ isMobile = false }) => (
//         <ul className={`menu menu-vertical lg:menu-horizontal p-0 gap-8 text-lg font-medium ${isMobile ? 'space-y-1' : ''}`}>
//             <li><Link to="/" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Home</Link></li>
//             <li><Link to="/apps" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Apps</Link></li>
//             <li><Link to="/installation" className="text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Installation</Link></li>
//         </ul>
//     );
    
//     return (
//         // ADJUSTMENT 1: Reduced py-4 to py-3 for shorter overall header height
//         <header className="py-3 bg-white shadow-md sticky top-0 z-50">
//             <div className='w-11/12 mx-auto flex justify-between items-center'>
//                 <div className="flex items-center gap-2">
//                     <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 cursor-pointer">
//                         <img src={logoImg} alt="AppDroid Logo" className='h-10' />
//                         <h1 className='text-purple'>AppDroid</h1>
//                     </Link>
//                 </div>
                
//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex flex-1 justify-center">
//                     <NavLinks />
//                 </nav>

//                 {/* Mobile Toggle Button and Desktop/Tablet Contribute Button */}
//                 <div className='flex items-center'>
//                     {/* Mobile Menu Toggle */}
//                     <button 
//                         onClick={() => setIsDrawerOpen(!isDrawerOpen)} 
//                         className="p-2 mr-4 text-gray-700 focus:outline-none lg:hidden cursor-pointer"
//                         aria-label="Toggle Menu"
//                     >
//                         {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
                    
//                     {/* The Contribute Button (Desktop/Large Screen) */}
//                     <Link to='https://github.com/fmnihal' className="hidden lg:block"> 
//                         <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl cursor-pointer'>
//                             <Github /> Contribute
//                         </button>
//                     </Link>
//                 </div>
                
//             </div>

//             {/* NEW: Mobile Drawer Menu */}
//             <div className={`
//                 fixed top-0 right-0 h-full w-64 bg-white shadow-xl 
//                 transform transition-transform duration-300 ease-in-out 
//                 z-[100] p-6 pt-6 lg:hidden
//                 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
//             `}>
//                 {/* ADJUSTMENT 2 & 3: Reduced vertical padding/margin in the top section */}
//                 <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
//                      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 cursor-pointer" onClick={handleLinkClick}>
//                         <img src={logoImg} alt="AppDroid Logo" className='h-8' />
//                         <h1 className='text-purple'>AppDroid</h1>
//                     </Link>
//                     <button 
//                         onClick={() => setIsDrawerOpen(false)} 
//                         className="p-1 text-gray-700 hover:text-red-500 cursor-pointer"
//                         aria-label="Close Menu"
//                     >
//                         <X size={24} />
//                     </button>
//                 </div>
                
//                 <NavLinks isMobile={true} />
                
//                 <div className='mt-8 pt-4 border-t border-gray-200'>
//                     <Link to='https://github.com/fmnihal' onClick={handleLinkClick}>
//                         <button className='w-full btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl cursor-pointer'>
//                             <Github /> Contribute
//                         </button>
//                     </Link>
//                 </div>
//             </div>

//             {/* NEW: Overlay for when the drawer is open */}
//             {isDrawerOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black opacity-40 z-40 lg:hidden cursor-pointer" 
//                     onClick={() => setIsDrawerOpen(false)}
//                 ></div>
//             )}
            
//         </header>
//     );
// };
// export default Header;



























import React, {useState} from 'react';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';


const Header = () => {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    // Function to close the drawer, used by all internal links and the close button.
    const handleLinkClick = () => {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };
    
    // ADJUSTMENTS 1, 2, 3: Reduced vertical spacing for a tighter mobile menu.
    const NavLinks = ({ isMobile = false }) => (
        // Removed `space-y-1` here as we are controlling spacing on the <li> and Link directly.
        <ul className={`menu menu-vertical lg:menu-horizontal p-0 gap-8 text-lg font-medium`}>
            {/* Added my-1 for a small vertical margin between list items, and py-1 for smaller internal link padding */}
            <li className={isMobile ? 'my-1' : ''}><Link to="/" className="py-1 text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Home</Link></li>
            <li className={isMobile ? 'my-1' : ''}><Link to="/apps" className="py-1 text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Apps</Link></li>
            <li className={isMobile ? 'my-1' : ''}><Link to="/installation" className="py-1 text-gray-700 hover:text-blue-600 active:text-blue-800 cursor-pointer" onClick={handleLinkClick}>Installation</Link></li>
        </ul>
    );
    
    return (
        // Reduced py-4 to py-3 for shorter overall header height
        <header className="py-3 bg-white shadow-md sticky top-0 z-50">
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 cursor-pointer">
                        <img src={logoImg} alt="AppDroid Logo" className='h-10' />
                        <h1 className='text-purple'>AppDroid</h1>
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 justify-center">
                    <NavLinks />
                </nav>

                {/* Mobile Toggle Button and Desktop/Tablet Contribute Button */}
                <div className='flex items-center'>
                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)} 
                        className="p-2 mr-4 text-gray-700 focus:outline-none lg:hidden cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    
                    {/* The Contribute Button (Desktop/Large Screen) */}
                    <Link to='https://github.com/fmnihal' className="hidden lg:block"> 
                        <button className='btn bg-purple-600 text-white hover:bg-purple-700 border-none text-xl cursor-pointer'>
                            <Github /> Contribute
                        </button>
                    </Link>
                </div>
                
            </div>

            {/* NEW: Mobile Drawer Menu */}
            <div className={`
                fixed top-0 right-0 h-full w-64 bg-white shadow-xl 
                transform transition-transform duration-300 ease-in-out 
                z-[100] p-6 pt-6 lg:hidden
                ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                {/* Reduced vertical padding/margin in the top section */}
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

            {/* NEW: Overlay for when the drawer is open */}
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