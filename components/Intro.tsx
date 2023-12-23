'use client'
import Image from 'next/image'
import React from 'react'
import photo_cv from '@/public/photo_cv.jpeg'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'

export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);

  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <section ref={ref} id='home' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center'>
            <div className='relative'>
              <motion.div
              initial={{opacity: 0, scale:0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.2
              }}
              >
                <Image src="https://res.cloudinary.com/dponswbct/image/upload/v1703369649/portfolio/lyshwlijw5tcxlebbsnq.jpg" 
                width='192' 
                height='192' 
                quality='100' 
                priority={true}
                className='h-36 w-36 rounded-full 
                object-cover border-[0.35rem] border-white shadow-xl' 
                alt='profile_photo'/>

              </motion.div>
                <motion.span 
                className='absolute bottom-1 right-1 text-3xl' 
                initial={{opacity: 0, scale:0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  duration: 0.7,
                  delay: 0.1
                }}
                >
                
                  👋
                </motion.span>
            </div>
        </div>
        <motion.h1 
        initial={{opacity: 0, y:100}}
        animate={{opacity: 1, y: 0}}
        className='mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, I'm Federico.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> and {" "}
        <span className="font-bold">electronic engineer</span> with{" "}
        <span className="font-bold">3 years</span> of software development experience. I enjoy
        building <span className="italic">web apps & api rest</span>. My focus is{" "}
        <span className="underline">Node js (Typescript)</span>.
        </motion.h1>
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white 
            px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 
            active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight  
            className='opacity-70 group-hover:translate-x-2 transition'/>
          </Link>

          <a
            className="group bg-white px-7 py-3 
            flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-110 
            active:scale-105 transition borderBlack"
            href="./CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload
            className='opacity-60 group-hover:translate-y-2 transition' />
          </a>
          <div className='flex flex-row space-x-2'>
            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 
              rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
              active:scale-105 transition borderBlack"
              href="https://linkedin.com/in/federicoiz93"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center 
              gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
              active:scale-105 transition borderBlack"
              href="https://github.com/fedeiz"
              target="_blank"
            >
              <FaGithubSquare />
            </a>

          </div>
        </motion.div>
    </section>
  )
}
