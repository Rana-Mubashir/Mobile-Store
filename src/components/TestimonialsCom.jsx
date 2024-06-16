import React from 'react'
import { FaRegStar } from "react-icons/fa";
function TestimonialsCom({ name, message }) {
    return (
        <div>
            <div className="flex justify-center items-center flex-col gap-5 p-6 border rounded-lg shadow-md max-w-sm mx-auto bg-white">
                <div className="flex justify-start items-center gap-2 w-full">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        {name}
                        <i className="fa-solid fa-circle-check text-green-500"></i>
                    </h2>
                    <div className="flex items-center gap-1 ml-3">
                        <FaRegStar className='text-yellow-500 text-lg' />
                        <FaRegStar className='text-yellow-500 text-lg' />
                        <FaRegStar className='text-yellow-500 text-lg' />
                    </div>
                </div>
                <p className="text-gray-600 text-center">{message}</p>
            </div>
        </div>
    )
}

export default TestimonialsCom
