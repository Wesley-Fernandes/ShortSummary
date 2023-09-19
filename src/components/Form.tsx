'use client'

import Button from './Button'
import InputSearch from './InputSearch'
import axios from 'axios'
import { store } from '@/context/store'
import { FormEvent, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import Modal from './Modal'

export default function Form() {
  const [socket, setSocket] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const { setResponse, removeResponse, setStatus } = store()

  const userSOCKET = store((state) => state.socket)
  const backend = "https://shorts-summary.onrender.com";

  async function Submiter(event: FormEvent) {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      search: { value: string }
    }

    const search = target.search.value
    const id = String(search).split('/')[4]

    if (!id) {
      setError('Link inserido é invalido.')
      return
    }

    const api = backend.concat(`/summary/${id}`)

    axios
      .post(api, {
        register: socket.id,
      })
      .then((response) => {
        setStatus('Explicando...')
        setResponse(response.data)
        return
      })
      .catch((error) => {
        setStatus('Pausado')
        setError(error.message)
        return
      })
  }

  useEffect(() => {
    if (!socket || !socket.connected) {
      const newSocket = io(backend)

      newSocket.on('status', (status) => {
        setStatus(status)
      })

      setSocket(newSocket)
    }
    if (socket && socket.connected) {
      socket.disconnect()
      setSocket(null)
    }
  }, [])
  return (
    <form
      onSubmit={Submiter}
      className="flex gap-2 max-w-[516px] items-center justify-center"
    >
      <InputSearch />
      <Button />
      <Modal status={error != ''} text={error} setError={setError} />
      <button type="reset" className="hidden"></button>
    </form>
  )
}
