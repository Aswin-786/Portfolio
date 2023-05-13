import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { RxSun } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import useTheme from './hooks/useTheme';
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  const [mode, setMode] = useTheme()
  const [isActive, setIsActive] = React.useState(false);

  return (

    <AnimatePresence>
      <nav className="w-full px-2 z-50  fixed inset-x-0 top-2 flex justify-center items-center">
        <div className=" w-full md:w-[90%] bg-navBar dark:bg-slate-200 p-4 rounded-2xl flex justify-center items-center">
          <p className="text-xl text-slate-100 dark:text-black font-medium">Aswin</p>
          <div className="hidden md:flex items-center gap-5 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium ml-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400 cursor-pointer duration-100 ease-in"
            >
              Home
            </a>
            <a
              href="#Journey"
              className="text-base text-textBase font-medium ml-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="text-base text-textBase font-medium ml-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
            >
              Projects
            </a>
            <a
              href="#contacts"
              className="text-base text-textBase font-medium ml-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
            >
              Contact
            </a>
            <a
              href="#skills"
              className="text-base text-textBase font-medium ml-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
            >
              Skills
            </a>
            <motion.button
              whileTap={{ rotate: 360 }}
              transition={{ duration: 1.5 }}
              className=' bg-none text-black text-3xl mx-3 p-1 outline-transparent border-transparent rounded-full'
              onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            >
              {
                mode === 'dark' ?
                  <motion.div animate={{ rotate: 360 }}
                    transition={{ duration: 50 }}
                    className=''>
                    <RxSun />
                  </motion.div>
                  :
                  <div className='text-white'>
                    <IoMoon />
                  </div>
              }
            </motion.button>
            <a
              href="https://drive.google.com/file/d/1uku_k9-HXmEdh6bUzKWD6HE4sPg4y9Au/view"
              target='_blank'
              className="ml-auto text-base text-textBase font-medium hover:text-primary hover:dark:text-slate-300 hover:bg-slate-200 hover:dark:bg-primary dark:text-slate-700 dark:hover:text-slate-400 dark:hover:border-opacity-50  cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in "
            >
              Resume
            </a>
          </div>
          <motion.div
            whileTap={{ scale: 0.6 }}
            onClick={() => setIsActive(!isActive)}
            className='block md:hidden ml-auto cursor-pointer'>
            <IoMenu className='text-2xl text-textBase' />
          </motion.div>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="p-4 w-275 bg-navBar dark:bg-slate-200 rounded-lg fixed top-24  flex flex-col items-center justify-evenly gap-6"
            >
              <a
                href="#home"
                className="text-base text-textBase font-medium py-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Home
              </a>
              <a
                href="#Journey"
                className="text-base text-textBase font-medium ml-2  py-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400 cursor-pointer duration-100 ease-in"
              >
                Journey
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium  py-2  hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium   py-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>
              <a
                href="#skills"
                className="text-base text-textBase font-medium   py-2 hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Skills
              </a>
              <a
                href="https://drive.google.com/file/d/1uku_k9-HXmEdh6bUzKWD6HE4sPg4y9Au/view"
                target='_blank'
                className="text-base text-textBase font-medium  py-2  hover:text-slate-100 dark:text-slate-700 dark:hover:text-slate-400  cursor-pointer border border-textBase px-2 rounded-xl hover:border-gray-100 duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Resume
              </a>
              <motion.button
                whileTap={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
                className=' bg-none text-black text-3xl mx-3 outline-transparent border-transparent '
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
              >
                {
                  mode === 'dark' ?
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 50 }}
                      className=''>
                      <RxSun />
                    </motion.div>
                    :
                    <div className='text-white'>
                      <IoMoon />
                    </div>
                }
              </motion.button>
            </motion.div>
          )}
        </div>
      </nav>
    </AnimatePresence>
  )
}

export default Navbar