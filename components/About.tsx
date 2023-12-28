"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView("About");

  return (
    <motion.section className='mb-28 max-w-[45rem]
     text-center leading-8 sm:mb-40'
     initial={{opacity:0, y:100}}
     animate={{opacity:1, y:0}}
     transition={{delay: 0.5}}
     id='about'
     ref={ref}
     >

    <SectionHeader>About me</SectionHeader>
        
      <p className='mb-3'> 
      After graduating as an electronic engineer and working for 5 years 
      in the electronics field, I decided to take a 180 degree turn towards what I like most:{" "}
      <span className="italic">software and programming.</span> That is why I decided to pursue a 
      postgraduate degree in computer technology integration in <span className="italic">Tucuman's National University</span>{" "} 
      and take a full stack course at <span className="italic">Henry Bootcamp,</span>{" "} 
      which allowed me to start my career as a <span className="font-extrabold">Full Stack Developer and Software Engineer</span>. 
      I currently  work as a <span className="font-extrabold">Tech Lead</span> at Fundacion Plan 21 in charge of the YvY application, 
      while I look for new challenges to continue growing.
      </p>

    </motion.section>
    
  )
}
