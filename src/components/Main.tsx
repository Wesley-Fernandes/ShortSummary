import React from 'react'

interface props {
  children: any
}
export default function Main({ children }: props) {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      {children}
    </main>
  )
}
