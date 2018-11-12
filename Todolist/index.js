import axios from "axios";

import "./homework_1.css";
import {add_button} from "./button_add.js";
import {hide_button, show_button}  from "./buttons.js";
import {createListItem} from "./list.js";

import {rendering} from "../components/index_react.js";


axios.get('https://learn-front-end-api-212606.appspot.com/api/v1/todos')
  .then(function (response) {
    if(response.data.success){
        response.data.todos.forEach(element => {
            createListItem(element);
        });
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

window.addEventListener('load', () => {
    add_button();
    hide_button();
    show_button();
    rendering();
});