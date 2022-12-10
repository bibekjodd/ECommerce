import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import Nav from './Nav';


function Header() {
    const navigate = useNavigate();
    const [mobileNav, setMobileNav] = useState(false);



    return (
        <header className='sticky z-50 flex select-none  items-center justify-between px-4 sm:px-5 py-3 lg:px-10  bg-white/40 filter backdrop-blur-2xl  top-0 left-0 shadow-sm shadow-gray-200/50'>
            <Link
                onClick={() => {
                    setMobileNav(false);
                }}
                to='/'
                className='text-2xl text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-sky-400 font-semibold'
            >
                JODD STORE
            </Link>

            <div>
                <button
                    onClick={() => { setMobileNav(true) }}
                    className='md:hidden'>
                    <AiOutlineMenu className='text-2xl ' />
                </button>
                <Nav mobileNav={mobileNav} setMobileNav={setMobileNav} />
            </div>

        </header>
    )
}

export default Header