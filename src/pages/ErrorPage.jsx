import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='max-w-screen-lg mx-auto flex flex-col items-center  w-full py-10 mb-40 px-5' >

      <div>
        <h1 className='text-neutral-800 text-3xl'>
          <p className=''>404</p>
          <p>UH OH! You're lost.</p>
        </h1>
        <p className='text-neutral-500 mt-1 mb-10'>The page you are looking for does not exist.</p>
      </div>
      <Link
        to='/'
        className='bg-sky-500 text-white px-5 py-2 rounded-md shadow-xl  shadow-sky-300 hover:brightness-110 '>
        Go Back To Home
      </Link>
    </div>
  )
}

export default ErrorPage