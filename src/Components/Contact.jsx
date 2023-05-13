import React from 'react'
import WorldMap from './WorldMap'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Links from './Links';

const Contact = () => {

  const ref = useRef();
  const [error, setError] = React.useState(null)
  // email
  const handleSumbit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_5o77yvl', 'template_qq6uzek', ref.current, 'akjK39wGQ4giHC2LF')
      .then((result) => {
        console.log(result.text);
        setError(true)
      }, (error) => {
        console.log(error.text);
        setError(false)
      })
    e.target.reset()
  }

  return (
    <>
      <div
        id='contacts'
        className='flex flex-col md:flex-row md:items-center mt-20  gap-4 text-white '>
        <div className='flex flex-1 justify-end mr-4'>
          <form
            ref={ref}
            onSubmit={handleSumbit}
            className='flex flex-col w-full'>
            <h2 className='text-3xl p-2 mb-2 text-gray-300 font-semibold dark:text-primary'>Contact</h2>
            <input
              className='my-2 md:p-3 p-1 bg-gray-300 dark:bg-gray-900 dark:text-white outline-transparent border-transparent rounded-md text-sxl text-black'
              type='text'
              placeholder='name'
              name='name'
              required
            />
            <input
              className='my-2 md:p-3 p-1 bg-gray-300 dark:bg-gray-900 dark:text-white outline-transparent border-transparent rounded-md text-sxl text-black '
              type='email'
              placeholder='email'
              name='email'
              required
            />
            <textarea
              className='my-2 md:p-3 p-1 bg-gray-300 dark:bg-gray-900 dark:text-white outline-transparent border-transparent rounded-md text-black min-h-[100px]'
              placeholder='enter'
              name='message'
              required
            >
            </textarea>
            <button type='submit' class="w-full md:w-auto outline-transparent border-transparent relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0">
                send
              </span>
            </button>
            <div className='py-2 text-sm text-red-600 text-center h-5'>
              <p>
                {error && `Your message has been sent. I'll get back to you soon :`}
              </p>
            </div>
          </form>
        </div>
        <div className='flex-1 mt-3'>
          <WorldMap />
        </div>
      </div>
      <Links />
    </>
  )
}

export default Contact