import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer
      style={{ borderColor: '#202024', backgroundColor: '#0c0c0cc8' }}
      className="h-16 mt-16  w-screen border-t-2 bg-gray-1 flex items-center px-2 gap-2 justify-end"
    >
      <Link
        href="https://github.com/Wesley-Fernandes"
        target="_blank"
        className=" px-2 py-2 text-white rounded bg-black hover:outline hover:text-purple-1 hover:outline-purple-1"
      >
        <Github />
      </Link>

      <Link
        href="https://www.linkedin.com/in/wesley-israel-fernandes/"
        target="_blank"
        className=" px-2 py-2 text-white rounded bg-black hover:outline hover:text-purple-1 hover:outline-purple-1"
      >
        <Linkedin />
      </Link>
    </footer>
  )
}
