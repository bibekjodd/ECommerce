import React, { useState } from 'react'

function ProductImages({ images }) {

    const [index, setIndex] = useState(0);
    return (
        images && <section className='flex items-center  justify-between self-start md:py-10'>
            <div className='flex flex-col items-center space-y-2 w-3/12 p-2'>
                {images.map((image, index) => (
                    <img
                        key={index} 
                        loading='lazy'
                        onClick={() => { setIndex(index) }}
                        src={image.url} alt=""
                        className='w-32 aspect-video object-cover cursor-pointer rounded-sm'
                    />

                ))}

            </div>
            <img src={images[index].url} alt="product image" loading='lazy'
                className='w-9/12 rounded-sm m-2'
            />
        </section>
    )
}

export default ProductImages