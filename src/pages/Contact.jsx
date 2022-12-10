import React from 'react'

function Contact() {
  return (
    <div>

      <h1 className='text-center my-5 font-medium text-gray-700 text-2xl'>Feel Free To Contact us</h1>
      <iframe
        className='mx-auto  w-full'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3025.4074324317544!2d84.46114432728287!3d27.935091045212012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1670665094179!5m2!1sen!2snp"
        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <form
        method='post'
        action='https://formspree.io/f/xwkzgapk'
        className='w-80 mx-auto space-y-3 flex flex-col my-10'
      >

        <input type="text" name="username" id="username" required
          placeholder='Username'
          className='outline-none border-2 border-neutral-200 px-2 py-1 rounded-md focus:border-sky-500'
        />

        <input type="email" name="email" id="email" required
          placeholder='Email'
          className='outline-none border-2 border-neutral-200 px-2 py-1 rounded-md focus:border-sky-500'
        />

        <textarea name="message" id="message" cols="30" rows="5" required
          className='outline-none border-2 border-neutral-200 px-2 py-1 rounded-md focus:border-sky-500'
        ></textarea>
        <button className='self-end bg-sky-500 text-white px-5 py-1.5 rounded-md shadow-lg shadow-sky-300 hover:brightness-105'>Send</button>

      </form>


    </div>
  )
}

export default Contact