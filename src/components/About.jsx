import { motion } from 'framer-motion';
import React from 'react'

import img1 from '../assets/hero.png'
import pdf from 'mycv.pdf'



const About = () => {
  return (
      <section id='about' className='snap-start h-screen'>
          <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-3 md:px-10 justify-evenly mx-auto items-center'>
              <h3 className='absolute top-14 uppercase tracking-[15px] text-gray-400 text-2xl'>About</h3>
              <motion.div
                  initial={ { x: -200, opacity: 0 } }
                  whileInView={ { x: 0, opacity: 1 } }
                  transition={ { duration: 1 } }
                  viewport={ {once: true} }
                  className='mb-10 mt-10 '
              >
              <img src={img1} alt='alt-img' className='-mb-20 md:mb-0 w-[8rem] h-[8rem] rounded-full md:object-cover md:w-64 md:h-96 md:rounded-lg' />
                  
                </motion.div>

              <motion.div
                 initial={ { x: 200, opacity: 0 } }
                 whileInView={ { x: 0, opacity: 1 } }
                 transition={ { duration: 1 } }
                 viewport={ {once: true} }
                  className='space-y-6 px-3 md:px-10 md:w-[60%]'>

                  <h4 className='text-2xl md:text-3xl font-semibold'>Here is a <span className='underline text-[#f7ab0a]/50'>little</span>  background</h4>
          <p className='text-justify sm:text-left text-[.8rem] sm:text-sm mb-8'>I am a highly skilled frontend developer with over 2 years of experience in developing dynamic and responsive web applications. I am proficient in a variety of frontend technologies, including HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, TypeScript and other frontend tools. My strong understanding of user experience and design principles, along with my ability to work collaboratively with cross-functional teams, allows me to deliver high-quality, visually appealing, and user-friendly web applications. I am dedicated to staying up-to-date with the latest technologies and trends in the industry, and I am always eager to take on new challenges and learn new skills. I am confident in my ability to make a positive impact on any project and team I am a part of.</p>
          <div className='mt-10'>

          <a className="border border-[#F7ab0a] hover:bg-transparent py-3 text-[1rem] font-semibold px-4 hover:text-[#F7ab0a] rounded-lg bg-[#F7ab0a] text-white transition duration-[.2s] " href={pdf}download='PeterMichaelResume01.pdf'>
       Download CV
      </a>
          </div>
                </motion.div>
          </div>
    </section>
  )
}

export default About