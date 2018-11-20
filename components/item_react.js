import React from "react";

export const Item = ( ({deleteItem, changeData, done, taskText}) => (
    <li className = "checkbox_item_li">
                <label className="radio">
                    <span className="delete_sp"
                    onClick={deleteItem}>
                        ×
                    </span>

                    <input className="checkbox_item_input"
                    type="checkbox"
                    checked={done}
                    onChange={changeData}>
                    </input>

                    <span className="check"></span>
                    <p>{taskText}</p>
                </label>
            </li>
    )
)