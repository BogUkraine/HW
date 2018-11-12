import React, {Component} from "react";

export class InputField extends Component {
    render() {
        return (
            <input type = "text" placeholder = "What to do?" class = "textBox"/>
        );
    }
};

export class InputButton extends Component {
    render() {
        return (
            <input type = "button" value = "Button" class = "button form_button"/>
        );
    }
};
export class HideButton extends Component {
    render() {
        return (
            <button class = "button hide_button">Hide Finished Items</button>
        );
    }
};
export class ShowButton extends Component {
    render() {
        return (
            <button class = "button show_button">Show Finished Items</button>
        );
    }
};
