import { store } from 'react-easy-state'

class Element {
    X: number;
    Y: number;
}

class GlobalStore {
    elements: Element[]
    addElement: (el: Element) => {}
}

export const globalStore: GlobalStore = store<GlobalStore>({ 
    elements: [], 
    addElement: (el) => globalStore.elements.push(el) 
});