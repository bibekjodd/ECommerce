import React from 'react'
import { Link } from 'react-router-dom'

function Product({ id, name, image, price, category }) {
    return (
        <Link to={`/singleproduct/${id}`}
            className='m-3 md:m-5 lg:m-7 rounded-md overflow-hidden bg-white'
        >
            <figure>
                <img src={image} alt="" />
                <figcaption className='flex justify-between py-2 px-3'>
                    <span>
                        {name}
                    </span>
                    <span>
                        {category}
                    </span>
                </figcaption>
            </figure>
        </Link>
    )
}

export default Product