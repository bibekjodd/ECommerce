import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { useLocation, useNavigate } from 'react-router-dom';


import Navoptions from './Navoptions';

function Nav({ mobileNav, setMobileNav }) {

    return (
        <>
            {mobileNav && <button
                onClick={() => { setMobileNav(false) }}
                className='absolute  top-5 right-5 z-50 text-2xl ' ><GrClose /></button>}
            <nav className={`${mobileNav ? '' : 'hidden'} md:flex items-center text-gray-700  ${mobileNav ? 'bg-white h-screen overflow-y-scroll scrollbar-hide absolute top-0 left-0 w-full flex-col items-center justify-center space-y-5 flex' : ' space-x-5'}`}>

                <Navoptions
                    className=''
                    path='/'
                    text='Home'
                    setMobileNav={setMobileNav}
                />

                <Navoptions
                    className=''
                    path='/about'
                    text='About'
                    setMobileNav={setMobileNav}
                />

                <Navoptions
                    className=''
                    path='/contact'
                    text='Contact'
                    setMobileNav={setMobileNav}
                />

                <Navoptions
                    className=''
                    path='/products'
                    text='Products'
                    setMobileNav={setMobileNav}
                />

                <Navoptions
                    className='text-2xl'
                    path='/cart'
                    Icon={BsCart2}
                    setMobileNav={setMobileNav}
                />


            </nav>
        </>
    )
}


export default Nav