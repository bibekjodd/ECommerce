import React from 'react'
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className=' text-white mt-auto'>
            <footer className=' mt-16 bg-neutral-900 '>

                <div className='max-w-screen-xl mx-auto px-4'>
                    {/* get started */}
                    <section className='flex justify-between items-center bg-gray-50 px-7 sm:px-10 py-5 rounded-md -translate-y-1/2'>
                        <h5 className='text-black '>
                            Ready to get started?<br />
                            Talk to us today
                        </h5>
                        <button className='bg-sky-500 px-3 py-2 rounded-md shadow-lg shadow-sky-300 hover:brightness-110'>
                            Get Started
                        </button>
                    </section>

                    {/* footer all */}
                    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                        {/* title  */}
                        <div className='mx-5 my-5'>
                            <h6 className='mb-3'>
                                Bibek Jodd
                            </h6>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti.
                            </p>
                        </div>

                        {/* subscribe */}
                        <div className='mx-5 my-5 flex flex-col items-start space-y-3'>
                            <span>
                                Subscribe to get important updates
                            </span>
                            <input type="email" name="" id="" placeholder='Enter Your Email'
                                className='p-2 rounded-sm outline-none text-black w-full'
                            />
                            <button className='bg-sky-500 px-3 py-2 rounded-md shadow-lg shadow-sky-800 hover:brightness-110'>
                                Get Started
                            </button>
                        </div>

                        {/* social follow */}
                        <div className='space-y-2 mx-5 my-5'>
                            <p>Follow Us</p>
                            <div className='flex items-center text-2xl space-x-3'>
                                <a
                                    href="https://www.facebook.com/bibekbhattaraionline"
                                    target="blank"
                                    rel='noopener noreferrer'
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://www.instagram.com/bibek.js/"
                                    target="blank"
                                    rel='noopener noreferrer'
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://github.com/bibekjodd"
                                    target="blank"
                                    rel='noopener noreferrer'
                                >
                                    <FaGithub />
                                </a>

                            </div>
                        </div>
                        {/* call us */}
                        <div className='mx-5 my-5' >
                            <p>Call us</p>
                            <a href='tel:+9779824491607' className='underline'>+977 9824491607</a>
                        </div>


                    </section>

                    <section className='mx-auto w-full max-w-screen-lg grid grid-cols-2 place-items-center mt-7  p-4 space-x-7 '>
                        <p className='w-full text-left'>&copy;2022 @bibekjodd All Rights Reserved</p>
                        <div className='flex flex-col space-y-2'>
                            <Link to='/'
                                className='underline'
                            >
                                Privacy Policy
                            </Link>
                            <Link to='/'
                                className='underline'
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </section>

                </div>


            </footer>
        </div>
    )
}

export default Footer