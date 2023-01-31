import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

import img1 from '../assets/dp2.jpg'





const Hero = ( ) => {
    const [ text, count ] = useTypewriter( {
        words: [
            "Hello, You are Welcome",
            "I am Michael",
            "A Frontend Developer"
        ],
        loop: true,
        delaySpeed: 3000
    })
  return (
   <section id="hero" className="snap-center">
    <div className="h-screen flex flex-col items-center justify-center space-y-1 overflow-hidden">
     <BackgroundCircles />

     <img
      src={img1}
      alt="image"
      
      className="w-36 h-36 rounded-full object-cover mx-auto"
     />
      <h2 className="text-sm uppercase text-gray-500 tracking-[10px] md:tracking-[15px] font-semibold">
       Software Developer
      </h2>
     <div className=''>
      <h2 className="text-center text-3xl lg:text-6xl font-semibold px-6">
       <span className="text-[1.8rem] md:text-[3rem]">{text}</span>
       <Cursor
        cursorColor="#f7ab0a"
        cursorBaing={true}
       />
      </h2>
     </div>

     <div className='pt-5 relative z-20'>
    <a href='#about'> <button className='hero-btn'>About</button></a>
     
     <a href='#experience'> <button className='hero-btn'>Experience</button></a>
     
     <a href='#skills'> <button className='hero-btn'>Skills</button></a>
     
     <a href='#projects'><button className='hero-btn'>Projects</button></a>
      
     </div>
    </div>
   </section>
  );
}

export default Hero