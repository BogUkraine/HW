var array = [
    "This is a list item",
    "Another list item",
    "Yup, another item",
    "Another list item2",
    "This is blablabla"
];

var listElem = [];

const btn = document.querySelector('.form_button');
const textBox = document.querySelector('.textBox');

const createListItem = (textp) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const ul = document.querySelector('.check_elements_ul');
    const delete_span = document.createElement('span');

    item.setAttribute('class', 'checkbox_item_li');
    label.setAttribute('class', 'radio');
    label.setAttribute('for', 'checkboxN' + (ul.childNodes.length - 1));
    input.setAttribute('class', 'checkbox_item_input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'checkboxN' + (ul.childNodes.length - 1));
    span.setAttribute('class', 'check');
    span.setAttribute('id', 'del_span' + (ul.childNodes.length - 1));
    delete_span.setAttribute('class', 'delete_sp');

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
    ul.appendChild(item);
    console.log(item);
}

btn.addEventListener('click', () => {
    createListItem("");
}, false);

for(let i = 0; i < array.length; i++){
    createListItem(array[i]);
    console.log(array[i]);
}
