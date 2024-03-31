import { store } from 'react-easy-state'

// class Element {
//     X: number;
//     Y: number;
// }

// class GlobalStore {
//     elements: Element[]
//     addElement: (el: Element) => {}
// }

export const globalStore = store({ 
    elements: {}, 
    addElement: (el) => { globalStore.elements[el.id] = el },
});