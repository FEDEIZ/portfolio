"use client"
import React, { useRef } from 'react'
import SectionHeader from './SectionHeader'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <section id="projects" ref={ref} className='scroll-mt-28 mb-28'>
        <SectionHeader>My Projects</SectionHeader>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}



