import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

type GithubBtnProps = {
    githubUrl: string
}

export default function GithubBtn({githubUrl}: GithubBtnProps) {
  return (
    <a
    className="bg-white p-4 text-gray-700 flex items-center 
    gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
    active:scale-105 transition borderBlack"
    href={githubUrl}
    target="_blank"
  >
    <FaGithubSquare />
  </a>
  )
}
