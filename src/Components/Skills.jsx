import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center text-sm rounded-full py-2 px-3 font-semibold dark:bg-slate-900  cursor-pointer absolute
      md:text-sm md:py-1.5 md:px-3  md:dark:bg-slate-900 md:dark:text-white p-8 md:dark:shadow-slate-900 md:bg-slate-200 md:text-gray-900 md:shadow-slate-300 
      sm:bg-transparent sm:dark:bg-transparent sm:dark:text-gray-900 sm:text-whit sm:font-bold sm:text-[12px] sm:
      xs:bg-transparent xs:dark:bg-transparent xs:dark:text-gray-900 xs:text-white xs:font-bold xs:text-[10px]'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (

    <div id='skills'>
      <AnimatePresence>
        <h2 className='text-3xl mb-2 text-gray-300 font-semibold dark:text-primary text-center'>Skills</h2>
        <div className='flex md:w-[40vw] md:h-[40vw] md:flex  xs:hidden sm:w-[] sm:h-[] xs:w-[80vw] xs:h-[80vw] relative items-center rounded-full justify-center bg-circularLight dark:bg-circularDark left-1/2 -translate-x-1/2 overflow-hidden'>
          <motion.div
            className='flex items-center justify-center  rounded-full font-semibold dark:bg-slate-900 dark:text-white md:p-8 dark:shadow-slate-900 bg-slate-200 text-gray-900 shadow-slate-300 cursor-pointer md:text-sm xs:text-[10px] xs:p-2'
            whileHover={{ scale: 1.05 }}>
            web
          </motion.div>
          <Skill name="Git" x='14vw' y='-10vw' />
          <Skill name="HTML" x='0vw' y='6vw' />
          <Skill name="CSS" x='0vw' y='-6vw' />
          <Skill name="JavaScript" x='-12vw' y='0vw' />
          <Skill name="Firebase" x='0vw' y='12vw' />
          <Skill name="React Js" x='11vw' y='0vw' />
          <Skill name="Bootstrap" x='0vw' y='-12vw' />
          <Skill name="Tailwind Css" x='12vw' y='10vw' />
          <Skill name="Java" x='-14vw' y='-10vw' />
          <Skill name="C" x='0vw' y='-18vw' />
          <Skill name="Web Design" x='0vw' y='18vw' />
          <Skill name="Redux" x='-12vw' y='10vw' />
        </div>
        <div className='hidden md:w-[40vw] md:h-[40vw] md:hidden  xs:flex sm:w-[] sm:h-[] xs:w-[80vw] xs:h-[80vw] relative items-center rounded-full justify-center bg-circularLight dark:bg-circularDark left-1/2 -translate-x-1/2 overflow-hidden'>
          <motion.div
            className='flex items-center justify-center  rounded-full font-semibold dark:bg-slate-900 dark:text-white md:p-8 dark:shadow-slate-900 bg-slate-200 text-gray-900 shadow-slate-300 cursor-pointer md:text-sm xs:text-[10px] xs:p-2'
            whileHover={{ scale: 1.05 }}>
            web
          </motion.div>
          <Skill name="Git" x='13vw' y='-12vw' />
          <Skill name="HTML" x='0vw' y='10vw' />
          <Skill name="CSS" x='0vw' y='-10vw' />
          <Skill name="JavaScript" x='-30vw' y='0vw' />
          <Skill name="Firebase" x='0vw' y='21vw' />
          <Skill name="React Js" x='30vw' y='0vw' />
          <Skill name="Bootstrap" x='0vw' y='-21vw' />
          <Skill name="Tailwind Css" x='27vw' y='16vw' />
          <Skill name="Java" x='-27vw' y='-16vw' />
          <Skill name="C" x='0vw' y='-34vw' />
          <Skill name="Web Design" x='0vw' y='33vw' />
          <Skill name="Redux" x='-27vw' y='16vw' />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Skills