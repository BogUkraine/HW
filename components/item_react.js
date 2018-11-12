import React, {Component} from "react";
import axios from "axios";

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: "something"
        };
      }
    render() {
        return (
            <label class = "radio">
                <span class = "delete_sp">×</span>
                <input class = "checkbox_item_input" type = "checkbox"></input>
                <span class = "check"></span>
                <p>{this.state.text}</p>
            </label>
        );
    };
};




/*
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
}, false);*/
























/*
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
}, false);*/