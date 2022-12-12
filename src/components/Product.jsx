import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice'

function Product({ id, name, image, price, category, gridView, description }) {

    return (
        <Link to={`/singleproduct/${id}`}
            className={`reveal md:m-5 lg:m-7  rounded-md overflow-hidden  relative hover:brightness-105  ${gridView ? 'm-1' : 'm-3 flex  border py-2 border-gray-200 flex-col md:flex-row justify-between'}`}
        >
            <figure className={`relative w-full ${gridView ? '' : 'p-3 md:w-4/12 '}`}>
                <img src={image} alt=""
                    className={`rounded-md`}
                />
                {gridView && <figcaption className='flex justify-between py-2 px-3 capitalize space-x-2'>
                    <span>
                        {name}
                    </span>
                    <span >
                        {/* {price} */}
                        <FormatPrice price={price} />
                    </span>
                </figcaption>}
            </figure>
            {gridView && <div className="absolute top-3 right-3 bg-white/75 backdrop-blur-md text-neutral-600 uppercase px-2.5 rounded-full py-1.5 text-xs">
                {category}
            </div>}
            {!gridView && <div className='flex flex-col items-start md:w-7/12 px-4 text-gray-800 py-2'>

                <h4 className='text-xl'>{name}</h4>
                <h5 className='mt-2'><FormatPrice price={price} /></h5>
                <h6 className='line-clamp-2 mb-3'>{description}</h6>
                <button className='ring-1 ring-sky-600 hover:shadow-lg hover:shadow-sky-200 text-gray-700 p-2 rounded-sm hover:text-white hover:bg-sky-500 hover:ring-0 mt-auto w-full md:w-fit'>
                    Read More
                </button>

            </div>}
        </Link>
    )
}

export default Product