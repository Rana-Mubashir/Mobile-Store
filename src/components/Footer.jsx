import React from 'react'

function Footer() {
    return (
        <div className='mt-8'>
            <footer className="flex flex-wrap justify-between items-center p-5 bg-gray-200 h-auto md:h-64">
                <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center md:items-start">
                    <div className="mb-3">
                        <img src="Images/Logo.png" alt="" className="w-24 h-auto" />
                    </div>
                    <div>
                        <h6 className="text-left hover:underline cursor-pointer">@lorem</h6>
                    </div>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-serif mb-2 hover:underline cursor-pointer text-center md:text-left">About us</h3>
                    <ul className="text-center md:text-left">
                        <li><a href="#" className="hover:underline cursor-pointer">Lorem</a></li>
                        <li><a href="#" className="hover:underline cursor-pointer">Portfolio</a></li>
                        <li><a href="#" className="hover:underline cursor-pointer">Careers</a></li>
                        <li><a href="#" className="hover:underline cursor-pointer">Contact us</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-serif mb-2 hover:underline cursor-pointer text-center md:text-left">Contact us</h3>
                    <p className="text-sm hover:underline cursor-pointer text-center md:text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, placeat!
                    </p>
                    <p className="text-sm hover:underline cursor-pointer text-center md:text-left">+92 3441979106</p>
                </div>
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                    <div className="text-2xl space-x-4">
                        <i className="fab fa-facebook hover:underline cursor-pointer"></i>
                        <i className="fab fa-instagram-square hover:underline cursor-pointer"></i>
                        <i className="fab fa-linkedin hover:underline cursor-pointer"></i>
                        <i className="fab fa-twitter-square hover:underline cursor-pointer"></i>
                    </div>
                </div>
            </footer>
            <hr />
            <footer className="bg-gray-200 h-12 flex items-center justify-center text-center hover:underline cursor-pointer">
                <div>
                    &copy; 2021 Lorem All Rights Reserved
                </div>
            </footer>
        </div>
    )
}

export default Footer
