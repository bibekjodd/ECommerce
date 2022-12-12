import React, { useState } from 'react'
import FilterProducts from '../components/FilterProducts'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import { useProductContext } from '../context/productContext'
import { FiLoader } from 'react-icons/fi'
import { RiErrorWarningLine } from 'react-icons/ri'


function Products() {
  const { isLoading, isError } = useProductContext();
  const [gridView, setGridView] = useState(true);

  return (
    <div className='my-5'>
      {
        isError ?
          <div className='flex items-center justify-center space-x-1 text-rose-600'>
            <RiErrorWarningLine className='text-lg' />
            <p>Oops! Can't get Products at the moment</p>
          </div> :
          isLoading ?
            <div >
              <FiLoader className='text-4xl mx-auto my-5 animate-spin' />

            </div>
            : <div className='max-w-screen-lg flex items-start mx-auto px-4 mb-20'>
              <FilterProducts />
              <section className='w-full'>
                <Sort setGridView={setGridView} gridView={gridView} />
                <ProductList gridView={gridView} />
              </section>
            </div>
      }
    </div>
  )
}

export default Products