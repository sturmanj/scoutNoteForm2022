import { writable } from 'svelte/store';

export const data = writable({
  scout: '',
  eventId: '',
  notes: ''
})

