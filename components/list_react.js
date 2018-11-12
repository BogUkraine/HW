import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {InputField, InputButton, HideButton, ShowButton} from "./buttons_react.js";
import {UncheckedUl} from  "./unchecked_list_react.js";
import {CheckedUl} from  "./checked_list_react.js";

export class List extends Component{
    render() {
        return(
            <div>
                <h2>ReactJS</h2>
                <div class = "input_button">
                    <InputField/>
                    <InputButton/>
                </div>
                <div class = "input_radio">
                    <UncheckedUl/>
                    <HideButton/>
                    <ShowButton/>
                    <CheckedUl/>
                </div>
            </div>
        );
    }
}

/*
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




export const createListItem = (todo) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const delete_span = document.createElement('span');

    item.setAttribute('class', 'checkbox_item_li');
    label.setAttribute('class', 'radio');
    input.setAttribute('class', 'checkbox_item_input');
    input.setAttribute('type', 'checkbox');
    span.setAttribute('class', 'check');
    delete_span.setAttribute('class', 'delete_sp');

    ul_unchecked.appendChild(item);
    item.appendChild(label);
    label.appendChild(delete_span);
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(p);

    if(todo != "")
        p.innerHTML = todo.text;
    else
        p.innerHTML = textBox.value;
    delete_span.innerHTML = '&times;';

    delete_span.addEventListener('click', (event) => {
        axios.delete('https://learn-front-end-api-212606.appspot.com/api/v1/todos/' + todo.id)
        .then(function (response) {
            if(response.data.success){
                item.remove();
            }
          })
        .catch(function (error) {
            console.log(error);
          });
    }, false);

    input.addEventListener('change', (event) => {
        axios.put('https://learn-front-end-api-212606.appspot.com/api/v1/todos/' + todo.id, {
            done: input.checked,
            text: todo.text
        })
        .then(function (response) {
            if(response.data.success){
                if(input.checked == true){
                    ul_checked.appendChild(item);
                    p.style.textDecoration = 'line-through';
                    p.style.opacity = '0.5';
                }
                else{
                    ul_unchecked.appendChild(item);
                    item.style.visibility = "visible";
                    p.style.textDecoration = 'none';
                    p.style.opacity = '1';
                }
            }
          })
        .catch(function (error) {
            console.log(error);
          });
    }, false);
}*/

