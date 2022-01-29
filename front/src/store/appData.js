import {browserStore} from './browserStore'
// import { writable } from 'svelte/store';
// import { writable } from 'svelte/store';

// export const appState = writable([]);

const DefaultUserData = {};
const DefaultAppData = {
    theme:"",
    pbible:"kjv",
    sbible:"",
    chpters:[]
};
// export const appState = browserStore('appState', DefaultAppData);
export const userData = browserStore('userData', DefaultUserData);
export const appData = browserStore('appData', DefaultAppData);
