import React, { useEffect, useState } from 'react'
import { BsGridFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useProductContext } from '../context/productContext'

function Sort({ setGridView, gridView }) {
   const { state, filteredProducts, setState } = useProductContext();


   return (
      <div className='flex items-center justify-between px-7'>


         <div className='flex space-x-3'>
            <button
               onClick={() => { setGridView(true) }}
               className={`p-2 rounded-sm  ${gridView ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
               <BsGridFill />
            </button>
            <button
               onClick={() => { setGridView(false) }}
               className={`p-2 rounded-sm  ${!gridView ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
               <AiOutlineMenu />
            </button>
         </div>

         <p>{filteredProducts.length} total products</p>

         <select
            onChange={(e) => {
               const value = e.target.value;
               let tempProducts = filteredProducts
               tempProducts = tempProducts.sort((a, b) => {
                  if (value === 'lowest') {
                     if (a.price < b.price)
                        return -1;
                  }
                  else if (value === 'highest') {
                     if (a.price > b.price)
                        return -1;
                  }
               })

               setState({
                  ...state,
                  filteredProducts: tempProducts
               })

            }}
            className='border-2 border-gray-300 p-1.5 rounded-md outline-none'
            name="price" id="price">
            <option value="default"
               className='p-1.5'
            >Default</option>
            <option value="highest"
               className='p-1.5'
            >Price(highest)</option>

            <option value="lowest"
               className='p-1.5'
            >Price(lowest)</option>
         </select>

      </div>
   )
}

export default Sort