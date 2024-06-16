import React from 'react'
import { CiHeart } from "react-icons/ci";
function AccessoriesCom({ product }) {
    return (
        <div>
            <div className="flex flex-col gap-8 p-5 bg-gray-300 rounded-xl w-72 h-96">
                <div className="text-end m-5 ">
                    <CiHeart />
                </div>
                <div className="flex justify-center items-center flex-col gap-5">
                    <img src="Images/Iphone 14 pro.png" alt="" />
                    <p>{product.name}</p>
                    <h1>{product.price}</h1>
                    <button className="">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default AccessoriesCom
