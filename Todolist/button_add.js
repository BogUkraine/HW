import axios from "axios";
import {createListItem} from "./list.js";
const textBox = document.querySelector('.textBox');
const btn = document.querySelector('.form_button');

export const add_button = () => {btn.addEventListener('click', () => {
    axios.post('https://learn-front-end-api-212606.appspot.com/api/v1/todos', {
        text: textBox.value
    })
  .then(function (response) {
    if(response.data.success){
        createListItem(response.data.todo);
    }
    else{
        console.log("Error");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}, false);
}