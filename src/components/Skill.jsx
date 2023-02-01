import { motion } from 'framer-motion';
import React from 'react'





const Skill = ({ img, text}) => {
    return (
      <div className='group relative flex cursor-pointer'>
    <div
    
     className='rounded-full '>
        <img src={img} alt='logo' className='rounded-full border border-gray-500  object-cover h-[60px] w-[60px] xl:w-[85px] xl:h-[85px] filter group-hover:grayscale transition duration-500 ease-in-out' />
    </div>
            

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-[70px] w-[70px] xl:w-[85px] xl:h-[85px] rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold opacity-100 text-black'>{text}</p>
            </div>
        </div>
      </div>
  )
} 

export default Skill