import React, {Component} from "react";
import {Item} from "./item_react.js";

export const CheckedUl = ( ({taskList, classCheck, deleteData, updateData, visibility}) => {
    if(visibility){
        return(
            <ul className={classCheck}>
            {
                taskList.map((value) => {
                        return (
                            <Item taskText = {value.text}
                            key = {value.id}
                            done = {value.done}
                            deleteItem = {(e) => deleteData(e, value)}
                            changeData = {(e) => updateData(e, value)}/>
                        )
                })
            }
            </ul>
        );
    }
    return null;
})














/*
export class CheckedUl extends Component {
    render() {
        if(this.props.visibility){
            return(
                <ul className={this.props.classCheck}>
                {
                    this.props.taskList.map((value) => {
                            return (
                                <Item taskText={value.text}
                                key={value.id}
                                done={value.done}
                                deleteItem={(e) => this.props.deleteData(e, value)}
                                changeData={(e) => this.props.updateData(e, value)}/>
                            )
                    })
                }
                </ul>
            );
        }
        return null;
    };
};
*/