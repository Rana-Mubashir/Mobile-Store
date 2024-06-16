import React from 'react'
import { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
function Navbar({navItems}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4">
            <div className="flex justify-between w-full md:w-auto">
                <div className="text-xl font-bold mx-4">LOGO</div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            <div className={`flex-col md:flex-row md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto`}>
                <ul className="flex flex-col md:flex-row font-semibold justify-center space-x-0 md:space-x-4">
                    {
                        navItems && (navItems.map((item,index)=>
                            <li className="text-lg" key={index}><a href="#" className="text-black no-underline hover:underline py-2 md:py-0">{item}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex-1 flex items-center space-x-4 justify-end mt-4 md:mt-0">
                <div className=" bg-gray-200 flex items-center gap-2 p-1 ">
                    <input
                        type="text"
                        placeholder="By device, brand or item"
                        className="font-light p-2 rounded bg-gray-200  border-none focus:outline-none"
                    />
                    <FaSearch className=" cursor-pointer" />
                </div>
                <MdShoppingCart className="text-2xl cursor-pointer" />
                <button className="btn bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Navbar
