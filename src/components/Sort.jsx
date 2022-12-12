import React, { useEffect, useState } from 'react'
import { BsGridFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useProductContext } from '../context/productContext'

function Sort({ setGridView, gridView }) {
   const { state, filteredProducts, setState } = useProductContext();

   const sortProducts = (e) => {
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
         else if (value === 'a-z') {
            if (a.name.toLowerCase() < b.name.toLowerCase())
               return -1;
         }
         else if (value === 'z-a') {
            if (a.name.toLowerCase() > b.name.toLowerCase())
               return -1;
         }
      })

      setState({
         ...state,
         filteredProducts: tempProducts
      })

   }


   return (
      <div className='flex items-center justify-between px-2 md:px-6 lg:px-8'>


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
               sortProducts(e)
            }}
            className='border-2 border-gray-300 p-1.5 rounded-md outline-none'
            name="price" id="price">
            <option value="default"
               className='p-1.5 hidden'
            >Default</option>
            <option value="highest"
               className='p-1.5'
            >Price (highest)</option>

            <option value="lowest"
               className='p-1.5'
            >Price (lowest)</option>

            <option value="a-z"
               className='p-1.5'
            >Name (a-z)</option>

            <option value="z-a"
               className='p-1.5'
            >Name (z-a)</option>
         </select>

      </div>
   )
}

export default Sort