import React from 'react'
import { useProductContext } from '../context/productContext'
import { FiLoader } from 'react-icons/fi'
import Product from './Product';


function FeaturedProducts() {
    const { isLoading, featuredProducts } = useProductContext();

    return (
        <div className='bg-gray-100/50 py-5 px-5'>
            <section className='my-5 space-y-5 max-w-screen-lg mx-auto '>
                <div className=''>
                    <p className='text-gray-600'>Check Now!</p>
                    <h1 className='text-2xl font-medium '>Our Featured Products</h1>
                </div>
                {isLoading ?
                    <div className=''>
                        <FiLoader className='animate-spin text-3xl mx-auto' />
                    </div>
                    :
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {featuredProducts.map(({ id, name, image, price, category }) => (
                            <Product
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                price={price}
                                category={category}
                            />
                        ))}
                    </div>}
            </section>
        </div>
    )
}

export default FeaturedProducts