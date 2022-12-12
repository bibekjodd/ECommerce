import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct'
import FormatPrice from '../components/FormatPrice';

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  // const products = JSON.parse(localStorage.getItem('cartItems')) || [];
  // const products = []
  // console.log(products)
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(products));
  }, [products])

  let total = 0;
  for (let product of products)
    total += product.price;


  return (
    <div className='mt-3 mb-20'>

      <div className=' max-w-screen-lg px-4 mx-auto flex flex-col'>
        {products.length === 0 ? <div className='space-y-5 flex flex-col items-start'>
          <p className=''>No items on the cart</p>
          <Link to='/products'
            className='btn px-5'
          >
            See Products
          </Link>
        </div>
          :
          <>
            <p className='my-3 sm:px-2 md:px-3 text-lg'>
              {products.length} item{products.length > 1 ? 's' : ''} on the cart
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
              {products.map(product => (
                <CartProduct
                  key={product.id}
                  product={product}
                  setProducts={setProducts}
                />
              ))}
            </div>
            <div className='px-4 my-5 flex justify-between'>

              <button
                onClick={() => {
                  setProducts([])
                }}
                className='bg-rose-500 text-white px-3 py-2 rounded-md hover:brightness-110 shadow-lg shadow-rose-200'
              >
                Clear Cart
              </button>

              <Link to='/products'
                className='btn'
              >
                See Products
              </Link>
            </div>

            <div className='ml-auto mt-5 bg-neutral-100/70 p-3 rounded-md'>
              <div className='flex justify-between space-x-7'>
                <p className='text-neutral-600'>
                  Subtotal:
                </p>
                <p className='font-medium'><FormatPrice price={total} /></p>
              </div>

              <div className='flex justify-between space-x-7'>
                <p className='text-neutral-600'>
                  Shipping Fee:
                </p>
                <p className='font-medium'><FormatPrice price={(total * 1.2345) / 100} /></p>
              </div>

              <div className='h-0.5 bg-gray-400 rounded-full w-full my-2' />

              <div className='flex justify-between space-x-7'>
                <p className='text-neutral-600'>
                  Order Total:
                </p>
                <p className='font-medium'>{<FormatPrice price={total + (total * 1.2345) / 100} />}</p>
              </div>

            </div>

          </>
        }
      </div>

    </div>
  )
}

export default Cart