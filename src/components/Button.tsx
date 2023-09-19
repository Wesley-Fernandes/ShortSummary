'use client'
import { store } from '@/context/store'
import { Play } from 'lucide-react'
import React from 'react'

export default function Button() {
  const { status } = store()
  return (
    <button
      type="submit"
      disabled={status != "pausado"}
      className="w-[48px] h-[48px] transition-colors delay-150 ease-in-out rounded flex items-center justify-center text-white bg-purple-1 hover:bg-purple-1/40 disabled:bg-purple-1/40"
    >
      <Play />
    </button>
  )
}
