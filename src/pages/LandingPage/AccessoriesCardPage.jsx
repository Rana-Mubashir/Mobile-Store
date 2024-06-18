import React, { useState,useEffect } from 'react'
import AccessoriesCom from '../../components/AccessoriesCom';
import { useSelector } from 'react-redux';

function AccessoriesCardPage() {
    
    const data = [
        {
            name: 'Apple iPhone 14 Pro Max',
            price: '$900',
            category: 'New Arrival',
        },
        {
            name: 'Blackmagic pocket Cinema',
            price: '$900',
            category: 'New Arrival',
        },
        {
            name: 'Apple Watch Series 9 GPS 41mm',
            price:'$900',
            category: 'Featured Products',
        },
        {
            name: 'Apple iPhone 14 Pro Max',
            price: '$900',
            category: 'Featured Products',
        },
        {
            name: 'Samsung Galaxy Watch6',
            price: '$900',
            category: 'Best Seller',
        },
        {
            name: '>Airpods Max Silver',
            price: '$900',
            category: 'Best Seller',
        },
        {
            name: '>Airpods Max Silver',
            price: '$900',
            category: 'Best Seller',
        },
        {
            name: '>Airpods Max Silver',
            price: '$900',
            category: 'Best Seller',
        }
    ]
    const category=useSelector((state)=>state.product.productToFind)
    console.log(category)
    const [products, setProducts] = useState('');
    useEffect(() => {
        if (!category) {
            setProducts(data);
        }
        else {
            setProducts(() => data.filter((product) => product.category === category))
        }
    })
    return (
        <>
        <div className='flex gap-8 justify-center items-center flex-wrap p-5 '>
            {
                products.length > 0 && products.map((data, index) =>
                    <AccessoriesCom
                    key={index}
                    product={data}
                    />
                )
            }
        </div>
        </>
    )
}
export default AccessoriesCardPage
