import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection({ data }) {
    return (
        <div className='bg-white py-7 md:py-10 pb-20'>
            <main className='grid  grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto  '>

                <section className='flex flex-col items-start justify-center  m-5 '>
                    <span className=' text-gray-500 text-sm'>WELCOME TO</span>
                    <h3 className='text-4xl mt-1 font-medium text-gray-800'>
                        {data}
                    </h3>
                    <p className='text-gray-500 my-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est rem beatae dolor a repudiandae enim et, quisquam sequi nisi, ab vel illo consectetur. Eius itaque odit dicta placeat veniam!
                    </p>
                    <Link to='/products' className='btn'>
                        SHOW NOW
                    </Link>
                </section>


                <section className='relative z-10 md:m-5 -order-1 md:order-1'>
                    <img
                        loading='lazy'
                        src="/images/hero.jpg" alt=""
                        className='rounded-sm z-30' />

                    {/* animation */}
                    <div className='absolute space-y-5 origin-center scale-75 -translate-y-5 md:scale-100 top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-2 -z-10  '>
                        <div className='bg-purple-300/70 
                          aspect-square  rounded-full blur-xl origin-center animate-hero animation-delay-4000 ' />
                        <div className='bg-sky-300/70 
                          aspect-square  rounded-full blur-xl origin-center animate-hero animation-delay-6000' />
                        <div className='bg-fuchsia-300/70 
                          aspect-square  rounded-full blur-xl origin-center animate-hero ' />
                        <div className='bg-yellow-300/70 
                          aspect-square  rounded-full blur-xl origin-center animate-hero animation-delay-2000' />
                    </div>


                </section>


            </main>
        </div>
    )
}

export default HeroSection