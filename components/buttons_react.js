import React from "react";

export const InputField = ( ({}) => (
    <input type="text"
    placeholder="What to do?"
    className="textBox"/>
));

export const InputButton = ( ({postData}) => (
    <input type="button"
    value="Button"
    className="button form_button"
    onClick={postData}/>
));

export const HideButton = ( ({action}) => (
    <button className="button hide_button"
    onClick={action}>
        Hide Finished Items
    </button>
));

export const ShowButton = ( ({action}) => (
    <button className="button show_button"
    onClick={action}>
        Show Finished Items
    </button>
));
