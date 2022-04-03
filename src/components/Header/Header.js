import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='border-b border-b-indigo-200'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <h2 className='text-xl font-bold text-indigo-600 uppercase'>Car Review Point</h2>
                </div>
                <nav>
                    <ul className='flex'>
                        <li className='ml-4 py-[15px]'><NavLink to="/" className={({ isActive })=> isActive ? "py-4 px-1 border-b-2 border-b-indigo-400 bg-indigo-200" : "py-2 px-1"}>Home</NavLink></li>
                        <li className='ml-4 py-[15px]'><NavLink to="/reviews" className={({ isActive })=> isActive ? "py-4 px-1 border-b-2 border-b-indigo-400 bg-indigo-200" : "py-2 px-1"}>Reviews</NavLink></li>
                        <li className='ml-4 py-[15px]'><NavLink to="/blogs" className={({ isActive })=> isActive ? "py-4 px-1 border-b-2 border-b-indigo-400 bg-indigo-200" : "py-2 px-1"}>Blogs</NavLink></li>
                        <li className='ml-4 py-[15px]'><NavLink to="/about" className={({ isActive })=> isActive ? "py-4 px-1 border-b-2 border-b-indigo-400 bg-indigo-200" : "py-2 px-1"}>About</NavLink></li>
                        <li className='ml-4 py-[15px]'><NavLink to="/contact" className={({ isActive })=> isActive ? "py-4 px-1 border-b-2 border-b-indigo-400 bg-indigo-200" : "py-2 px-1"}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;