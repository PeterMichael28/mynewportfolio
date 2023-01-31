import { motion } from 'framer-motion';
import React from 'react'



const BackgroundCircles = () => {
  return (
      <motion.div className='relative flex justify-center items-center mt-32'
          initial={ {
            opacity:0
          } }
          animate={ {
              scale: [ 1, 2, 2, 3, 1 ],
              opacity: [ 0.1, 0.2, 0.4, 0.8, 0.8, 1.0 ]
            
          } }
          transition= {{
              duration:2.5
          }}
      >
          <div className='absolute border border-[#757373] rounded-full h-[200px] w-[200px] mt-44 animate-ping' />
          <div className='absolute border border-[#545353] rounded-full h-[300px] w-[300px] mt-44 animate-ping' />
          <div className='absolute border border-[#535252] rounded-full h-[450px] w-[450px] mt-44 animate-ping' />
          <div className='absolute border border-[#f7ab0a] rounded-full h-[600px] w-[600px] opacity-10 mt-44 animate-pulse' />
          <div className='absolute border border-[#333] rounded-full h-[750px] w-[750px] mt-44 animate-ping' />
    </motion.div>
  )
}

export default BackgroundCircles