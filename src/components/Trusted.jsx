import React from 'react'
import { IoLogoSlack } from 'react-icons/io'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import { SlSocialSpotify } from 'react-icons/sl'
import { SlLayers } from 'react-icons/sl'
import { GiConcentricCrescents } from 'react-icons/gi'


function Trusted() {
    return (
        <section className='bg-gray-100/50 px-4 py-7'>
            <div className='text-center mb-3'>
                Trusted By 1000+ Companies
            </div>

            <div className='max-w-screen-lg  flex justify-between mx-auto items-center rounded-md flex-wrap'>
                <div className='m-3 text-3xl sm:text-4xl text-gray-700'>
                    <IoLogoSlack />
                </div>

                <div className='m-3 text-3xl sm:text-4xl text-gray-700'>
                    <AiFillCodeSandboxCircle />
                </div>

                <div className='m-3 text-3xl sm:text-4xl text-gray-700'>
                    <SlSocialSpotify />
                </div>

                <div className='m-3 text-3xl sm:text-4xl text-gray-700'>
                    <SlLayers />
                </div>

                <div className='m-3 text-3xl sm:text-4xl text-gray-700'>
                    <GiConcentricCrescents />
                </div>

            </div>

        </section>
    )
}

export default Trusted