import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'


function Services() {
    return (
        <section className='px-4 bg-white '>

            <div className='py-7 max-w-screen-lg text-gray-700 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>

                <div className=' bg-gray-100/50 m-3 flex items-center p-3 rounded-md lg:row-span-2'>
                    <div className='bg-white rounded-full aspect-square h-10 grid place-items-center'>
                        <TbTruckDelivery className='text-sky-600 text-xl ' />
                    </div>
                    <p className='px-2'>Super Fast and Free Delivery</p>
                </div>

                <div className='bg-gray-100/50 m-3 flex items-center p-3 rounded-md '>
                    <div className='bg-white rounded-full aspect-square h-10 grid place-items-center'>
                        <MdSecurity className='text-sky-600 text-xl ' />
                    </div>
                    <p className='px-2'>Non-contact shipping</p>
                </div>

                <div className='bg-gray-100/50 m-3 flex items-center p-3 rounded-md lg:row-span-2'>
                    <div className='bg-white rounded-full aspect-square h-10 grid place-items-center'>
                        <RiSecurePaymentLine className='text-sky-600 text-xl ' />
                    </div>
                    <p className='px-2'>Super Secure Payment System</p>
                </div>

                <div className='bg-gray-100/50 m-3 flex items-center p-3 rounded-md '>
                    <div className='bg-white rounded-full aspect-square h-10 grid place-items-center'>
                        <GiReceiveMoney className='text-sky-600 text-xl ' />
                    </div>
                    <p className='px-2'>Money-back Guaranteed</p>
                </div>


            </div>


        </section>
    )
}

export default Services