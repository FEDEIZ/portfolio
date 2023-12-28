import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import technomerch from "@/public/tecnomerch.png";
import yvy from "@/public/yvy.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Huawei - Seed For the Future",
    location: "Beijing & Shenzen, China",
    description:
      "I was chosen as a scholarship recipient for the Huawei training program. I learned the fundamentals of 5G telecommunications and IoT.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Graduated Electronic Engineer - Universidad Nacional de Tucuman(FACET)",
    location: "Tucuman, Argentina",
    description:
      "I graduated after 6 years of studying with an average of 8 out of 10. I immediately found a job as maintenance manager at a wastewater effluent plant.",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2018",
  },

  {
    title: "Network Manager - 'Conectar Igualdad Program' of Ministry of Education of Tucuman",
    location: "Tucuman, Argentina",
    description:
      "Management of the internal network of the school establishment. Administration of computer equipment and technical support.",
    icon: React.createElement(CgWorkAlt),
    date: "2017",
  },

  {
    title: "Maintenance Manager (Ssr) - Sociedad de Aguas del Tucuman (SAT)",
    location: "Tucuman, Argentina",
    description:
      "I was in charge of a maintenance team, carrying out an engineering plan to keep the equipment operational 24 hours a day.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },

  {
    title: "Full Stack Developer - Henry Bootcamp",
    location: "Remote, Argentina",
    description:
      "I graduated after studying for 9 months as a full stack developer from Henry Bootcamp. I have made an individual web application and another as a team with Scrum as a framework.",
      icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Tech Lead (Ssr) - Fundacion Plan 21",
    location: "Remote, Argentina",
    description:
      "I'm now the tech lead of an amazing project called YvY - Web App for regenerative agriculture. My stack includes React, Vite js, TypeScript, Material UI, Express, Postgress, Docker and IBM Cloud.",
    icon: React.createElement(FaNodeJs),
    date: "2023 - present",
  },
  {
    title: "Backend Teacher Sopport (Jr)- Coder House Bootcamp",
    location: "Remote, Argentina",
    description:
      "Teaching support in Back End course classes. Correction of works. In charge of a group of students.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;



export const projectsData = [
  
  {
    title: "YvY",
    description:
      "As a tech in the Fundación Plan 21 Company, I developed modules for the free sustainable agriculture application, unique and free in Latin America.",
    tags: ["React", "TypeScript", "Vite.js", "Material UI", "Redux", "IBM Cloud", "Docker", "Type ORM"],
    imageUrl: yvy,
    url: "https://yvyapp.plan21.org",
    github: "https://github.com/Open-YvY/Open-YvY"
  },
  {
    title: "Techno-Merch",
    description:
      "I Worked as a back end developer with an amazing team to develop a fully customized ecommerce model with React, Redux Node Js and Postgres hosted on your own server",
    tags: ["React.js", "Redux-Toolkit", "PostgreSQL", "CSS", "Express", "Node Js"],
    imageUrl: technomerch,
    url: "https://tecnomerch.christianvillegas.com",
    github:"https://github.com/PT07G05-Henry/PT07G05-Henry.github.io"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Express",
  "Web Sockets",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Material UI",
  "OOP",
  "Leadership",
  "Advance English",
  "Electronic Engineer Specialist"
] as const;