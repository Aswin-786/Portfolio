import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AnimatePresence, motion } from "framer-motion";
import { man } from '../assets/index.js'

const About = () => {
  const [text] = useTypewriter({
    words: ['Front-End Developer'],
    loop: {},
  })

  return (

    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, type: 'spring' }} className="w-full md:h-[100vh]  relative grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-8 pt-10 "
        id="home"
      >
        <div className="w-full h-420 flex items-center justify-center m-auto">
          <div className="md:w-275 md:h-340 w-[200px] h-[280px] relative dark:bg-navBar bg-emerald-200 rounded-md">
            <img
              src={man}
              alt="profile pic"
              className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-3xl text-slate-300 dark:text-slate-800 ">Hi I'm <span className='text-4xl text-white dark:text-navBar font-bold'>ASWIN</span></h1>
          <h2 className="text-xl md:text-2xl text-slate-300 dark:text-slate-800 py-5 ">I'm a {''} {text}<span className='text-red-500'><Cursor /></span></h2>
          <p className="md:text-lg text-base text-textBase dark:text-gray-700 text-justify">
            I am a driven and disciplined individual who took a risk by leaving the shipyard industry after a year and a half to pursue my passion for front-end
            development. Through self-study, I have acquired expertise <span className='text-textLight dark:text-gray-500 text-[18px] '>
            React.js, Redux, Firebase, and more </span> . I take pride in my portfolio, which features several successful projects that
            showcase my skills in creating user-friendly websites. My love of coding logic problems drives me to continuously improve my abilities.
            Ultimately, I am committed to developing beautiful, functional websites that enhance the user experience.
          </p>
        </div>
      </motion.section>
    </AnimatePresence>

  )
}

export default About