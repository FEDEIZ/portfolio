"use client";
import React from 'react'
import SectionHeader from './SectionHeader'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {

    const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true
    }}
    >
        <SectionHeader>Contact Me</SectionHeader>
        <p className='text-gray-700 -mt-6'>
            Please contact me directly at {" "}
            <a className='underline' href='mailto:ing.finterladi@gmail.com'>ing.finterlandi@gmail.com
            </a>{" "}
            or through this form.
        </p>
        <form className='mt-10 flex flex-col' 
        action={async formData => {
            await sendEmail(formData);
        }}>
            <input 
            name='senderEmail'
            placeholder='Your email' 
            className='px-4 h-14 rounded-lg borderBlack' 
            type="email" 
            required 
            maxLength={500}/>
            <textarea name='message' required maxLength={1000} placeholder='Your message...' className='h-52 my-3 rounded-lg borderBlack p-4'/>
            <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 
            active:scale-105'>
                Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{" "}</button>
        </form>
    </motion.section>
  )
}
