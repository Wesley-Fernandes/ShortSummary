import React from 'react'
interface props {
  status: boolean
  text: string
  setError: (error: string) => void
}
export default function Modal({ status, text, setError }: props) {
  const actived =
    'w-screen h-screen absolute bg-black/50 top-0 flex items-center justify-center z-10'
  return (
    <>
      {status ? (
        <div className={actived}>
          <div className="animate__animated animate__zoomIn border border-purple-1 w-[300px] p-3 bg-gray-950">
            <h2 className="w-full text-center font-bold text-2xl text-purple-1">
              ERRO
            </h2>
            <p className="flex-1 h-[200px] overflow-y-scroll scroller text-white/50">
              {text}
            </p>
            <div className="mt-2">
              <button
                onClick={() => {
                  setError('')
                }}
                className="w-full bg-purple-1 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
