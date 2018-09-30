import { createListItem } from "./list.js";
import {add_button} from "./button_add.js";
import {hide_button, show_button}  from "./buttons.js";

var array = [
    "This is a list item",
    "Another list item",
    "Yup, another item",
    "Another list item2",
    "This is blablabla"
];

window.addEventListener('load', () => {
    createListItem();
    add_button();
    hide_button();
    show_button();

    for(let i = 0; i < array.length; i++){
        createListItem(array[i]);
    }
});