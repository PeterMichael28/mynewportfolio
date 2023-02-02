import { useState } from 'react'

import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {AiOutlineCopyright } from "react-icons/ai";


function App() {
 

  return (
    <div className='bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden  scrollbar-track-gray-400/40 scrollbar-thumb-[#f7ab0a]/60 scrollbar-thin'>
  
    <main>      
      {/* Header */ }
      <Header />
      {/* Hero */ }
      <Hero />
      {/* About */ }
      <About />
      {/* Experience */ }
      <Experience />
      {/* Skills */ }
      <Skills />
      {/* Projects */ }
      <Projects />
      {/* Contact Me */}
      <Contact />
    </main>

      <footer className='snap-start flex items-center justify-center space-x-2 py-3'>
        <AiOutlineCopyright />
        <p className='text-sm'>2023 Peter Michael</p>
      </footer>
  </div>
  )
}

export default App
