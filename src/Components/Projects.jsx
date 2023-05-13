import React from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { Project } from '../Data/Data'
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {

  return (
    <AnimatePresence>
      <section
        className="flex flex-wrap items-center justify-evenly py-24 gap-4"
        id="projects"
      >
        {Project &&
          Project.map((n, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, ease: 'easeInOut', duration: 0.4 }}
              viewport={{ once: true }}
              id='projects'
              className='w-full xs:w-[255px] md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 cursor-pointer mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 hover:scale-105 hover:transition-all transition-all ease-in-out '>
              <div
                key={n.id}
                className="relative px-5 py-2.5 transition-all ease-in duration-75 text-yellow-50 bg-gray-900 rounded-md p-2 xs:min-w-[250px] xs:max-w-[200px] min-w-[275px] md:max-w-[275px]  "
              >
                <p className="text-lg t text-gray-300 font-medium uppercase text-center ">
                  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                </p>
                <img
                  src={n.imageSrc}
                  className="w-full h-full object-cover rounded-md my-4"
                  alt=""
                />
                <div className="flex flex-col flex-1 items-center ">
                  <p className="text-lg text-gray-400">
                    Technologies
                    <span className="block text-sm text-gray-500">
                      {n.techs}
                    </span>
                  </p>
                  <div className='mt-2 flex items-center justify-center'>
                    <a
                      href={n.github}
                      className='mr-8'
                      target="_blank"
                      rel="noopener noreferrer">
                      <motion.div
                        whileTap={{ scale: 0.5 }}
                        whileHover={{ scale: 0.8 }}>
                        <IoLogoGithub className="text-textBase text-3xl mt-3 cursor-pointer" />
                      </motion.div>
                    </a>
                    <a
                      href={n.live}
                      target="_blank"
                      rel="noopener noreferrer">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium outline-none text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                          <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 text-yellow-50 bg-gray-900 rounded-md group-hover:bg-opacity-0 outline-none">
                            Live Demo
                          </span>
                        </button>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </section>
    </AnimatePresence>
  )
}

export default Projects