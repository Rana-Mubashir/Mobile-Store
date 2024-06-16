import React from 'react'
import Models from '../components/ModelsCom'
function ModelsPage() {

    const data = ['Samsung', 'Iphone', 'Lenovo', 'Vivo', 'Itel', 'Nokia'];
    return (
        <div>
            <h1 className='text-4xl text-center'>Models</h1>
            <div className="flex justify-center items-center gap-10 flex-wrap">
                {
                    data.map((model, index) =>
                        <Models
                            key={index}
                            title={model}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ModelsPage
