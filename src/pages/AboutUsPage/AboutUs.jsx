import React from 'react';

function AboutUs() {
    return (
        <div className="bg-gray-100 p-6">
            <header className="text-center py-10 bg-white shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-gray-600 mt-4">Learn more about our company and team.</p>
            </header>
            <section className="my-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                    Our mission is to deliver high-quality products that bring value to our customers.
                    We strive to innovate and excel in everything we do.
                </p>
            </section>
            <section className="my-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <img src="https://avatars.githubusercontent.com/u/154998814?v=4" alt="Team Member" className="w-full h-48 object-cover rounded-lg shadow-md" />
                        <h3 className="mt-4 text-lg font-bold text-gray-800">Rana Mubashir</h3>
                        <p className="text-gray-600">CEO</p>
                    </div>
                    <div className="text-center">
                        <img src="https://avatars.githubusercontent.com/u/132738567?v=4" alt="Team Member" className="w-full h-48 object-cover rounded-lg shadow-md" />
                        <h3 className="mt-4 text-lg font-bold text-gray-800">Faraz Ahmad</h3>
                        <p className="text-gray-600">CTO</p>
                    </div>
                    <div className="text-center">
                        <img src="/images/team3.jpg" alt="Team Member" className="w-full h-48 object-cover rounded-lg shadow-md" />
                        <h3 className="mt-4 text-lg font-bold text-gray-800">Mike Johnson</h3>
                        <p className="text-gray-600">CFO</p>
                    </div>
                </div>
            </section>
            <section className="my-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <img src="/images/gallery1.jpg" alt="Gallery Image" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src="/images/gallery2.jpg" alt="Gallery Image" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    <img src="/images/gallery3.jpg" alt="Gallery Image" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
