import { writable } from 'svelte/store';
import zonasFamilias from '../datos/zonasFamilias';

const daDrags = {}

zonasFamilias.forEach(f=>{ daDrags[f.id]=writable({id: f.id, x:0,y:0}) })

export { daDrags };