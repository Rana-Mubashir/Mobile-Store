import React from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../store/productSlice';
function AccessoriesBar({ data }) {
    const dispatch = useDispatch();
    function submitCategory(categry) {
        console.log("i am working")
        dispatch(setProduct(categry))
    }
    return (
        <>
            <p className='text-xl hover:underline  text-gray-700 hover:text-black cursor-pointer'
                onClick={(e) => submitCategory(e.target.innerText)}
            >{data}</p>
        </>

    )
}
export default AccessoriesBar
