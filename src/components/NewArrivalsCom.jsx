import React from 'react'

function NewArrivalsCom() {
    return (
        <div className="w-full flex flex-wrap h-screen">
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <div className="bg-black h-1/2">
                    <p className="text-white">hello1</p>
                </div>
                <div className="flex w-full h-1/2">
                    <div className="bg-blue-500 w-1/2 h-full">
                        <p className="text-white">hello2</p>
                    </div>
                    <div className="bg-green-500 w-1/2 h-full">
                        <p className="text-white">hello3</p>
                    </div>
                </div>
            </div>
            <div className="bg-red-500 w-full md:w-1/2 h-1/2 md:h-full">
                <p className="text-white">hello4</p>
            </div>
        </div>

    )
}

export default NewArrivalsCom
