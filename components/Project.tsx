"use client";

import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title,description, tags, imageUrl} : ProjectProps) {
  
    const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
        ref={ref}
        style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section 
            className="group bg-gray-100 max-w-[42rem] border 
            border-black/5 rounded-lg overflow-hidden 
            mb-3 hover:bg-gray-200 transition
            sm:h-[20rem] sm:relative sm:mb-8 last:mb-0 sm:group-even:pl-8"> 

                <div className='flex flex-col h-full py-4 pb-7 px-5  
                sm:pt-10 sm:pr-2 sm:max-w-[50%] sm:pl-10 sm:group-even:ml-[18rem]'>

                    <h3 className='text 2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap mt-4 mb-2 gap-2 sm:mt-2'>
                        {tags.map((tag, index) => (
                            <li key={index}
                            className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                            >{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} 
                alt='project i worked on' 
                quality='95'
                className='rounded-t-lg shadow-2xl mx-auto 
                object-cover object-top h-[20rem] w-[25rem]
                sm:-right-40 sm:w-[28.25rem]

                group-even:sm:right-[initial] 
                group-even:sm:-left-40 sm:absolute top-8 
                group-even:sm:transition

                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-hover:transition

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:group-hover:transition

                group-even:right-[initial] group-even:-left-40 
                '/>
                
            </section>
        </motion.div>
  )
}