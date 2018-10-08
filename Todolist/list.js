var bool_hid_button = false;
var bool_checked = false;

const textBox = document.querySelector('.textBox');
const ul_checked = document.querySelector('.show_hide_buttons');
const ul_unchecked = document.querySelector('.check_elements_ul');

export const createListItem = () => {(textp) => {
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

    if(textp != "")
        p.innerHTML = textp;
    else
        p.innerHTML = textBox.value;
    delete_span.innerHTML = '&times;';

    delete_span.addEventListener('click', (event) => {
        console.log("delete_span");
        item.remove();
        if(ul_checked.childElementCount == 0){
            hide_but.style.visibility = 'hidden';
            show_but.style.visibility = 'hidden';
            bool_hid_button = false;
        }
    }, false);

    input.addEventListener('change', (event) => {
        if(input.checked == true){
            ul_checked.appendChild(item);
            p.style.textDecoration = 'line-through';
            p.style.opacity = '0.5';

            if(!bool_hid_button){
                show_but.style.visibility = 'visible';
                item.style.visibility = "hidden";
            }
            else
                item.style.visibility = "visible";
        }
        else{
            ul_unchecked.appendChild(item);
            item.style.visibility = "visible";
            p.style.textDecoration = '';
            p.style.opacity = '1';

            if(ul_checked.childElementCount == 0){
                hide_but.style.visibility = 'hidden';
                show_but.style.visibility = 'hidden';
                bool_hid_button = false;
            }
        }
    }, false);
}
}
