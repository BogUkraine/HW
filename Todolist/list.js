import axios from "axios";
const textBox = document.querySelector('.textBox');
const ul_checked = document.querySelector('.show_hide_buttons');
const ul_unchecked = document.querySelector('.check_elements_ul');

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
}
