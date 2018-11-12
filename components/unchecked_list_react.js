import React, {Component} from "react";
import {Item} from "./item_react.js";

const array = [];
//const new_array = array.map(function(items) {
export class UncheckedUl extends Component {
   /* refreshing = () => {
        /*axios.get('https://learn-front-end-api-212606.appspot.com/api/v1/todos')
        .then(function (response) {
            if(response.data.success){
                response.data.todos.forEach(element => {
                    createListItem(element);
                });
            }
            //console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });*/
   // };*/

    render() {
        return (
            <ul>
                <Item/>
            </ul>
        );
    };
};

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
  */