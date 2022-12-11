import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice'

function Product({ id, name, image, price, category }) {


    return (
        <Link to={`/singleproduct/${id}`}
            className='m-3 md:m-5 lg:m-7 rounded-md overflow-hidden bg-white relative hover:brightness-105'
        >
            <figure>
                <img src={image} alt="" />
                <figcaption className='flex justify-between py-2 px-3'>
                    <span>
                        {name}
                    </span>
                    <span>
                        {/* {price} */}
                        <FormatPrice price={price} />
                    </span>
                </figcaption>
            </figure>
            <div className="absolute top-3 right-3 bg-white/75 backdrop-blur-md text-neutral-600 uppercase px-3 rounded-full py-1.5 text-sm">
                {category}
            </div>
        </Link>
    )
}

export default Product