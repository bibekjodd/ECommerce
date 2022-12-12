import React from 'react'
import { useProductContext } from '../context/productContext'
import { FiLoader } from 'react-icons/fi'
import Product from './Product';
import { RiErrorWarningLine } from 'react-icons/ri';


function FeaturedProducts() {
    const { isLoading, featuredProducts, isError } = useProductContext();

    return (
        <>
            {
                isError ?
                    <p className='flex items-center justify-center space-x-2 text-rose-500 my-5'>
                        <RiErrorWarningLine />
                        <span>Couldn't get featured Products at the moment</span>
                    </p>
                    : <div className='bg-gray-100/50 py-5 px-5'>
                        <section className='my-5 space-y-5 max-w-screen-lg mx-auto '>
                            <div className='px-5'>
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
                                            gridView={true}
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
                    </div>}
        </>
    )
}

export default FeaturedProducts