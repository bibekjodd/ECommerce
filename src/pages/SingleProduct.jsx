import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiLoader } from 'react-icons/fi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom'
import FormatPrice from '../components/FormatPrice';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import ProductImages from '../components/ProductImages';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import RatingStar from '../components/RatingStar';
import AddToCart from '../components/AddToCart';
const API = 'https://api.pujakaitem.com/api/products';

function SingleProduct() {
    const [state, setState] = useState({
        isError: false,
        isLoading: false,
        product: null
    })
    const { id } = useParams();

    const getSingleProduct = async () => {
        try {
            setState({ ...state, isLoading: true })
            const res = await axios.get(`${API}?id=${id}`);
            setState({
                isError: false,
                isLoading: false,
                product: res.data
            })
        } catch (error) {
            setState({
                isError: true,
                isLoading: false,
                product: null
            })
        }
    }


    useEffect(() => {
        getSingleProduct();
    }, [])

    return (
        <div className='text-gray-800 mb-20 flex flex-col items-center'>
            {state.isError ?
                <h1 className='flex items-center  justify-center text-rose-600 space-x-1'>
                    <RiErrorWarningLine /> <span>Product with this id does not exist</span>
                </h1>
                :
                state.isLoading ?
                    <FiLoader className='animate-spin text-4xl text-center mx-auto my-10' />
                    :
                    <>
                        <div className='px-4 lg:px-10 text-lg space-x-0.5 py-2 self-start'>
                            <Link to='/'>Home</Link>
                            <span>/</span>
                            <Link to={`/singleproduct/${id}`}
                                className='text-sky-700'
                            >
                                {id}
                            </Link>
                        </div>
                        {state.product && <div className='max-w-screen-lg mx-auto my-5 grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-2 md:space-x-10 items-center md:m-4 '>
                            {/* images */}
                            <ProductImages images={state.product?.image} />
                            {/* details  */}
                            <section className='space-y-5 px-4'>

                                <h1 className='text-2xl'>
                                    {state.product?.name}
                                </h1>

                                {/* <p></p> */}
                                <RatingStar stars={(state.product?.stars) > 5 ? 5 : state.product?.stars} />


                                <p>{state.product?.reviews} reviews</p>


                                <div className='font-medium'>
                                    MRP:
                                    <del>
                                        <FormatPrice price={state.product?.price + 420 * 100} />
                                    </del>
                                </div>

                                <p className='text-green-600 font-medium'>Deal of the Day:
                                    <FormatPrice price={state.product?.price} />
                                </p>

                                <p className='text-gray-700'>
                                    {state.product?.description}
                                </p>


                                <div className='flex items-center justify-between text-gray-700'>
                                    <div className='flex flex-col items-center space-y-1'>
                                        <div className='p-1.5 bg-gray-100 rounded-full aspect-square'>
                                            <TbTruckDelivery className='text-2xl' />
                                        </div>
                                        <span className='text-sm'>Free Delivery</span>
                                    </div>
                                    <div className='flex flex-col items-center space-y-1'>
                                        <div className='p-1.5 bg-gray-100 rounded-full aspect-square'>
                                            <TbReplace className='text-2xl' />
                                        </div>
                                        <span className='text-sm'>30 days Replacement</span>
                                    </div>
                                    <div className='flex flex-col items-center space-y-1'>
                                        <div className='p-1.5 bg-gray-100 rounded-full aspect-square'>
                                            <MdSecurity className='text-2xl' />
                                        </div>
                                        <span className='text-sm'>2 Years warranty</span>
                                    </div>
                                </div>


                                <p>
                                    Available: {state.product?.stock > 0 ? <span className='text-green-600'>In Stock</span> :
                                        <span className='text-rose-500'>Not Available Now</span>
                                    }
                                </p>

                                <p>
                                    ID: {state.product?.id}
                                </p>

                                <p>
                                    Brand:  {state.product?.company}
                                </p>

                                <div className='w-full h-0.5 bg-gray-500 rounded-full' />


                                

                                {state.product.stock > 0 && <AddToCart product={state.product} />}


                            </section>
                        </div>}
                    </>

            }
        </div>
    )
}

export default SingleProduct