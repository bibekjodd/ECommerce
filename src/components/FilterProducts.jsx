import React, { useEffect, useRef, useState } from 'react'
import { useProductContext } from '../context/productContext';
import { TiTick } from 'react-icons/ti'


function FilterProducts() {
    const [category, setCategory] = useState('all');
    const [company, setCompany] = useState('all');
    const [color, setColor] = useState('all');
    const [search, setSearch] = useState('');

    const { companies, colors, categories, setState, state, products } = useProductContext();
    useEffect(() => {
        // console.log(categories)
        let filteredProducts = products
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                return product.category === category
            })
        }

        if (company !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                return product.company === company
            })
        }

        if (search !== '') {
            filteredProducts = filteredProducts.filter(product => {
                return (product.name.toLowerCase().includes(search.toLowerCase()) || product.company.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))
            })
        }

        if (color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.colors.includes(color))
        }

        setState({
            ...state,
            filteredProducts
        })

    }, [category, company, search, color])

    // const [categories, setCategories] = useState([
    //     'all', 'mobile', 'laptop', 'computer', 'accessories', 'watch'
    // ])

    return (
        <section className='w-64 hidden md:flex flex-col text-gray-900 space-y-10'>
            <input type="text" name="" id="" placeholder='Search'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                className='outline-none ring-1 ring-gray-300 p-1.5 focus:ring-gray-400 rounded-sm'
            />

            {/* category */}
            <div className='flex flex-col items-start space-y-2'>
                <h3 className='text-xl'>Category</h3>

                {categories.map((productCategory, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setCategory(productCategory)
                        }}
                        className={`px-1 capitalize border-b-2 ${category === productCategory ? 'text-gray-900 border-gray-400 ' : 'border-transparent text-gray-500'}`}>
                        {productCategory}
                    </button>
                ))}
            </div>


            {/* brand */}
            <h3>Brands</h3>
            <select
                onChange={(e) => {
                    setCompany(e.target.value)
                }}
                className='p-1 ring-1 ring-gray-300 rounded-sm text-gray-600 outline-none'
                name="" id="">
                {companies.map((company, i) => (
                    <option
                        key={i}
                        value={company}>{company.charAt(0).toUpperCase() + company.slice(1)}</option>
                ))}

            </select>

            {colors && <div className='flex items-center space-x-2 flex-wrap'>
                {colors.map((productColor, i) => (
                    <button
                        onClick={() => {
                            setColor(productColor)
                        }}
                        key={`colors${i}`}
                        className={`${productColor !== 'all' ? 'h-4 aspect-square rounded-full' : 'mr-1'}`}
                        style={{
                            background: productColor === 'all' ? '' : productColor
                        }}
                    >
                        {productColor === 'all' ? 'All' : color === productColor ? <TiTick className='text-white' /> : ''}
                    </button>
                ))}
            </div>}

            <button
                onClick={() => {
                    setState({
                        ...state,
                        filteredProducts: products
                    })
                    setColor('all')
                    setCategory('all')
                    setCompany('all')
                }}
                className='self-start text-white bg-rose-500 p-2 rounded-md'>
                Clear All Filters
            </button>

        </section>
    )
}

export default FilterProducts