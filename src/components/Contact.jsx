import { motion } from 'framer-motion';
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form";







const Contact = () => {

    
    // const { register, handleSubmit} = useForm<Inputs>();
    // const onSubmit: SubmitHandler<Inputs> = ( data ) => {
    //     // console.log(data);
    //     window.location.href =`mailto:enitanpeters28@gmail?subject=${data.subject}&body=Hi, I am ${data.name}.  ${data.message} (from ${data.email})`;
    // } 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => window.location.href =`mailto:enitanpeters28@gmail?subject=${data.subject}&body=Hi, I am ${data.name}.  ${data.message} (from ${data.email})`;
        
  
    // console.log(watch("example"))

  return (
      <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="contact"
      className="snap-start min-h-screen overflow-x-hidden"
     >
      <div className="flex flex-col relative h-screen text-center md:text-left  max-w-[900px]  px-3 xl:px-10 justify-center mx-auto items-center ">
       <h3 className="absolute top-16 font-semibold uppercase tracking-[10px] text-gray-500 text-xl">
       Contact Me
       </h3>

       <h3 className='text-xl font-semibold mt-16'>I have got just what you need. <span className='underline decoration-[#f7ab0a]/50 text-[#f7ab0a]/50'> Lets Talk</span></h3>

       <div className='mt-4 space-y-3'>
        <div className='flex items-center space-x-4'>
            <BsFillTelephoneFill className='w-6 h-6 text-[#f7ab0a]' />
            <p className='text-sm font-semibold md:text-base text-gray-300'>+2348036314163</p>
        </div>
        <div className='flex items-center space-x-4'>
            <MdEmail className='w-6 h-6 text-[#f7ab0a]'  />
            <p className='text-sm font-semibold md:text-base text-gray-300'>enitanpeters28@gmail.com</p>
        </div>
        <div className='flex items-center space-x-4'>
            <MdLocationOn className='w-6 h-6 text-[#f7ab0a]'   />
            <p className='text-sm font-semibold md:text-base text-gray-300'>Ibadan, Oyo State, Nigeria</p>
        </div>
       </div>

       <form className='flex flex-col justify-center space-y-2 mt-5 px-2' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex space-x-2'>
            <input {...register("name")} type="text" placeholder='Name' className='contact-input' />
            <input {...register("email")} type="email" placeholder='Email' className='contact-input' />
        </div>
        <input {...register("subject")} type="text" placeholder='Subject' className='contact-input' />
        <textarea {...register("message")} placeholder='Message' className='contact-input' rows={5} />

        <button type='submit' className='bg-[#f7ab0a] py-3 px-10 text-neutral-800 rounded-md text-lg font-bold uppercase tracking-[1px]'>Submit</button>
       
       </form>
        </div>  
        </ motion.section>
  )
}

export default Contact

// onSubmit={handleSubmit(onSubmit)}