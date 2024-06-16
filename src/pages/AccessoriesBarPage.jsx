import React from 'react'
import AccessoriesBar from '../components/AccessoriesBar'

function AccessoriesBarPage() {
    const categories = ["New Arrival", "Best Seller", "Featured Products"]
    return (
        <div>
            <h1 className='text-4xl underline text-center'>Accessories</h1>
            <div className="flex items-center gap-10 p-5">
                {
                    categories.map((category, index) =>
                        <AccessoriesBar
                            data={category}
                            key={index}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default AccessoriesBarPage
