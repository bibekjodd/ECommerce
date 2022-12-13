import React from 'react'
import FormatPrice from './FormatPrice'


function CartProduct({ product, setProducts }) {
    const { id, color, price, name, image, quantity } = product;
    const removeItem = () => {
        setProducts((product) => {
            return product.filter(product => product.id !== id)
        })
    }
    return (
        <div className='sm:mx-2 md:mx-3 my-4 ring-1 ring-gray-200 ring-inset rounded-md hover:brightness-105'>
            <div className='group grid relative'>
                <img src={image} alt=""
                    className='rounded-sm w-full aspect-video object-cover'
                />
                <div className='absolute backdrop-blur-sm inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <button
                        onClick={removeItem}
                        className='bg-rose-500 text-white rounded-md px-3 py-1.5 hover:brightness-110'>
                        Remove
                    </button>
                </div>
            </div>
            <div className='p-3 capitalize'>

                <p className='text-lg'>{name}</p>
                <p>quantity: {quantity}</p>

                <div className='flex space-x-2 items-center'>
                    <span>
                        color:
                    </span>
                    <div
                        className='h-4 rounded-full aspect-square'
                        style={{ backgroundColor: color }}>
                    </div>
                </div>

                <p className=''>Price: <FormatPrice price={price} /> </p>
            </div>
        </div>
    )
}

export default CartProduct