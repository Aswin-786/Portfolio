import React from 'react'
import { motion } from 'framer-motion';
import { SocialLinks } from '../Data/Data'

const Links = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center justify-evenly w-full pt-24"
    >
      <h2 className="text-gray-300 dark:text-primary text-3xl p-2 mb-2 font-semibold  capitalize">Follow me on</h2>
      <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
        {SocialLinks &&
          SocialLinks.map((n) => (
            <motion.a
              whileTap={{ scale: 0.8 }}
              href={n.link}
              key={n.id}
              target='_blank'
              className="w-full md:w-auto px-3 md:px-8 py-5 outline-none text-textBase dark:text-gray-900 hover:text-black hover:dark:text-slate-200 border border-zinc-800 rounded-2xl hover:bg-slate-300 hover:dark:bg-primary duration-100 hover:transition-all delay-100 ease-in-out cursor-pointer flex items-center justify-center gap-3 md:my-4 sm:my-2"
            >
              {n.iconSrc}
              <p className="text-lg  ">{n.name}</p>
            </motion.a>
          ))}
      </div>
    </section>
  )
}

export default Links