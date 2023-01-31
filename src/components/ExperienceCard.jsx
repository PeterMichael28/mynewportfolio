import React from 'react'
import img1 from '../assets/bootstrap.png'

import { motion } from 'framer-motion';



const ExperienceCard = ({images, lists, img, title, company, timeRange}) => {
  return (
    <article className='flex flex-col rounded-l items-center space-y-3 flex-shrink-0 w-[360px] md:w-[450px] snap-center bg-[#292929] px-6 md:px-2 py-4 md:py-2 md:pt-4 mt-16 md:mt-24 mb-3 opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-pointer overflow-hidden rounded-md'>
          <motion.div
                  initial={ {opacity: 0, y:-100} }
                  whileInView={ { opacity: 1, y:0 } }
                  transition={ { duration: 1.5 } }
                  viewport={{once: true}}
          >
              
          <img src={img1}alt='experience logo' className='w-[6rem]  rounded-full object-center' />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-xl'>{title}</h4>
            <p className='font-bold text-sm mt-1 text-gray-300'>{company}</p>
              <div className='flex space-x-2 my-1'>
                {
                  images.map((img1, i) => (<img key={i} src={img1} alt='ok' className='w-8 h-8 md:h-10 md:w-10 rounded-full' />) )
                }
                
                {/* <Image src={img1} alt='ok' className='w-8 h-8 md:h-10 md:w-10 rounded-full' />
                <Image src={img1} alt='ok' className='w-8 h-8 md:h-10 md:w-10 rounded-full' />
                <Image src={img1} alt='ok' className='w-8 h-8 md:h-10 md:w-10 rounded-full' /> */}
            </div>
            <p className='uppercase py-2 text-gray-300 text-[.7rem] '>{timeRange}</p>
            <ul className='list-disc space-y-2 text-[.75rem] '>
              {lists.map((list, i) => (<li key={i}>{list} </li>))}
            
            {/* <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li> */}
            </ul>
            
        </div>
    </article>
  )
}

export default ExperienceCard