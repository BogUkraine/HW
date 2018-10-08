import {createListItem} from "./list.js";
const btn = document.querySelector('.form_button');

export const add_button = () => { btn.addEventListener('click', () => {
    createListItem("");
}, false);
}