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
          <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronic Engineer</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        At the same time, I completed a postgraduate degree in computer technology integration from the National University of Tucumán. I am currently a <span className="font-extrabold">Specialist Electronic Engineer and Full Stack Developer.</span>{" "}
        My main core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js (typescript), and Postgress or MongoDb and cloud solutions as IBM Cloud, Google Cloud or AWS
        </span>
        . I am also familiar with Nest Js framework and the best programming patterns (OOP). I am always looking to
        learn new technologies and upgrading my programming skills. I am currently looking for a{" "}
        <span className="font-semibold">full-time position</span> as a software
        developer, while I serve as <span className="font-semibold">Tech Lead in the YvY project of Fundacion Plan 21</span> 
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy my family moments, playing the guitar and hanging out with friends.
      </p>
    </motion.section>
    
  )
}
