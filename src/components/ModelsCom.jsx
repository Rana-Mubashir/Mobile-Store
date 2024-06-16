import React from 'react'

function Models({title}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center  border border-black rounded-xl m-8 p-4 cursor-pointer ">
                <img
                 src="https://www.iphones.pk/wp-content/uploads/2022/05/iPhone-13-Pro-Max-Alpine-Green-Pakistan.jpg"
                 className=' h-44'
                  alt="" 
                  />
                <p className='text-2xl'>{title}</p>
            </div>
        </>
    )
}

export default Models
