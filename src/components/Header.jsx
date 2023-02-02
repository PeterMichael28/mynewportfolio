import { motion } from "framer-motion";


import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";





function Header() {
 return (
  <header className="flex items-center justify-between px-5 sticky top-0 left-0 max-w-6xl mx-auto z-20 py-2">
   <motion.div 
   className=""
   initial={{
    x:-500,
    opacity: 0,
    scale: 0.5
    }}
    
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    
    transition={{duration:1}}
    >


    
    <SocialIcon
        url="https://github.com/PeterMichael28"
     network="github"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'50px', margin: '0', padding: '0'}}
     className='cursor-pointer hover:text-[#f7ab0a]/40 transition-all duration-300'
    />

    <SocialIcon
    url=""
     network="twitter"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'40px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />

    <SocialIcon
    url=""
     network="facebook"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'40px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />

    <SocialIcon
    url="https://www.linkedin.com/in/michael-peter-41800a239"
     network="linkedin"
     bgColor="transparent"
     fgColor="grey"
     style={{width:'40px', margin: '0', padding: '0'}}
     className='cursor-pointer'
    />
   </motion.div>

   <motion.div 
    initial={{
        x:500,
        opacity: 0,
        scale: 0.5
        }}
        
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        
        transition={{duration:1}}
   >
   
 
    <SocialIcon
     network="email"
     url="#contact"
     bgColor="transparent"
     fgColor="grey"
     className='cursor-pointer'
    />
  
    <p className="hidden md:inline text-sm text-gray-400">
    <a href='#contact'>
     Get In Touch
    </a>
    </p>
   
    
   </motion.div>
  </header>
 );
}

export default Header;
