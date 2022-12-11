import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

function AddToCart({ product }) {
    const { id, colors, stock } = product;
    const [activeColor, setActiveColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    return (
        <div>
            <div className='flex items-center space-x-2'>
                <span>Colors:</span>
                {product &&
                    product.colors.map(color => (
                        <button
                            onClick={() => { setActiveColor(color) }}
                            key={color}
                            style={{
                                backgroundColor: color,
                            }}
                            className={`h-4 aspect-square rounded-full `}>
                            {activeColor === color && <TiTick className='text-white' />}
                        </button>
                    ))
                }
            </div>


            <div className='flex space-x-2 items-center'>
                <button
                    disabled={amount === 1}
                    onClick={() => {
                        amount > 1 ? setAmount(amount - 1) : setAmount(1)
                    }}
                    className='p-2 disabled:opacity-50'>
                    <AiOutlineMinus className='text-xl' />
                </button>

                <span>{amount}</span>

                <button
                    disabled={amount === stock}
                    onClick={() => {
                        amount < stock ? setAmount(amount + 1) : setAmount(stock)
                    }}
                    className='p-2 disabled:opacity-50 '>
                    <AiOutlinePlus className='text-xl' />
                </button>
            </div>
            <button className='bg-sky-500 px-5 py-2 rounded-md text-white shadow-lg shadow-sky-300 hover:brightness-110'>
                Add to Cart
            </button>
        </div>
    )
}

export default AddToCart