import { io } from "socket.io-client";
import {store} from '@/context/store'


const userSOCKET = store((state)=> state.socket)

export const socket = io('http://localhost:5252', {
    query: userSOCKET
});