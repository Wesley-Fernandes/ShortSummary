import { create } from 'zustand'

interface props{
    response: string;
    status: string;
    socket: any;
    setResponse: (response: string) => void;
    setStatus: (status: string) => void;
    setSocket: (socket: any) => void;
    removeResponse: () => void;
    removeStatus: () => void;
    removeSocket: () => void;
}


const store = create<props>((set) => ({
  response: "",
  status: "Pausado",
  socket: undefined,
  setResponse: (response) => set((state) => ({ response: response})),
  setSocket: (socket) => set((state) => ({socket})),
  setStatus: (status) => set((state) => ({ status: status})),
  removeResponse: () => set({response: ""}),
  removeStatus: () => set({status: ""}),
  removeSocket: () => set({socket: undefined}),
}))

export {store};