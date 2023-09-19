import { store } from '@/context/store';
import {FormEvent} from 'react';

export default async function Submiter(event: FormEvent) {
    event.preventDefault();
    const reply = store((state)=> state.setResponse);
    reply("Troquei o texto");
}