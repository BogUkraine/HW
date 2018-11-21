import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {InputField, InputButton, HideButton, ShowButton} from "./buttons_react.js";
import {CheckedUl} from  "./checked_list_react.js";

export class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrayElements: [],
            isVisible: true
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.actionHideButton = this.actionHideButton.bind(this);
        this.actionShowButton = this.actionShowButton.bind(this);
    }

    componentDidMount() {
        axios.get('https://learn-front-end-api-212606.appspot.com/api/v1/todos')
        .then( (response) => {
            if(response.data.success){
                this.setState({
                    arrayElements: response.data.todos
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    addItem() {
        const txtBox = document.getElementsByClassName('textBox')[1].value
        axios.post('https://learn-front-end-api-212606.appspot.com/api/v1/todos', {
            text: txtBox
        })
        .then((response) => {
            if(response.data.success){

            axios.get('https://learn-front-end-api-212606.appspot.com/api/v1/todos')
            .then( (response) => {
                if(response.data.success){
                    this.setState({
                        arrayElements: response.data.todos
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            }

            else{
                console.log("Error");
            }
        })
        .catch(function (error) {
                console.log(error);
        });
    }

deleteItem(event, el) {
    axios.delete('https://learn-front-end-api-212606.appspot.com/api/v1/todos/' + el.id)
    .then((response) => {
        if(response.data.success){

            axios.get('https://learn-front-end-api-212606.appspot.com/api/v1/todos')
            .then( (response) => {
                if(response.data.success){
                    this.setState({
                        arrayElements: response.data.todos
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        }
    })
    .catch(function (error) {
        console.log(error);
      });
}

    changeItem(event, el) {
        axios.put('https://learn-front-end-api-212606.appspot.com/api/v1/todos/' + el.id, {
            done: event.target.checked,
            text: el.text
        })
        .then((response) => {
            if(response.data.success){
               const arrayTemp = this.state.arrayElements.filter( (element) => {
                   if(element.id !== el.id){
                       return element;
                   }
               });

               el.done = !el.done;
               this.setState({
                   arrayElements: [el, ...arrayTemp]
               });
            }
          })
        .catch(function (error) {
            console.log(error);
          });
    }

    actionHideButton() {
        this.setState({
            isVisible: false
        })
    }

    actionShowButton(){
        this.setState({
            isVisible: true
        })
    }

    render() {
        const arrayChecked = this.state.arrayElements.filter((element) => {
            if(element.done === true){
                return element;
            }
        })
        const arrayUnchecked = this.state.arrayElements.filter((element) => {
            if(element.done === false){
                return element;
            }
        })
        return(
            <div>
                <h2>ReactJS</h2>

                <div className="input_button">
                    <InputField/>
                    <InputButton postData={this.addItem}/>
                </div>

                <div className="input_radio">
                    <CheckedUl isChecked={false}
                    taskList={arrayUnchecked}
                    deleteData={this.deleteItem}
                    updateData={this.changeItem}
                    visibility={true}/>

                    <HideButton action={this.actionHideButton}/>

                    <ShowButton action={this.actionShowButton}/>

                    <CheckedUl isChecked={true}
                    taskList={arrayChecked}
                    deleteData={this.deleteItem}
                    updateData={this.changeItem}
                    visibility={this.state.isVisible}/>

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById("root")
);

































/*
    addItem() {
        const txtBox = document.getElementsByClassName('textBox')[1].value
        axios.post('https://learn-front-end-api-212606.appspot.com/api/v1/todos', {
            text: txtBox
        })
        .then((response) => {
            if(response.data.success){

                const arrayTemp = response.data.todo;
                this.setState({
                    arrayElements: [arrayTemp, ... this.state.arrayElements]
                });
            }
            else{
                console.log("Error");
            }
        })
        .catch(function (error) {
                console.log(error);
        });
    }


    deleteItem(event, el) {
        axios.delete('https://learn-front-end-api-212606.appspot.com/api/v1/todos/' + el.id)
        .then((response) => {
            if(response.data.success){
                const arrayTemp = this.state.arrayElements.filter((element) => {
                    if(element.id !== el.id){
                        return element;
                    }
                });
                this.setState({
                    arrayElements: arrayTemp
                })
            }
          })
        .catch(function (error) {
            console.log(error);
          });
    }
*/
