import React from 'react'
import TestimonialsCom from '../components/TestimonialsCom'
function TestimonialsPage() {
    const testimonials = [
        {
            name: 'Alex',
            message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti fugit sed perferendis, minus odit dolore necessitatibus mollitia, ratione deleniti nemo commodi. Corrupti dolore aspernatur nesciunt possimus eveniet aut culpa minus.'
        },
        {
            name: 'Sara',
            message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti fugit sed perferendis, minus odit dolore necessitatibus mollitia, ratione deleniti nemo commodi. Corrupti dolore aspernatur nesciunt possimus eveniet aut culpa minus.'
        },
        {
            name: 'James',
            message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti fugit sed perferendis, minus odit dolore necessitatibus mollitia, ratione deleniti nemo commodi. Corrupti dolore aspernatur nesciunt possimus eveniet aut culpa minus.'
        },
    ]
    return (
        <div className=''>
            <h1 className='text-5xl text-center m-10 '>OUR HAPPY CUSTOMERS</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {testimonials.map((data, index) => (
                    <TestimonialsCom
                        key={index}
                        name={data.name}
                        message={data.message}
                    />
                ))}
            </div>
        </div>
    )
}

export default TestimonialsPage
