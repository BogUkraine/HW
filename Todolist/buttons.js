const hide_but = document.querySelector(".hide_button");
const show_but = document.querySelector(".show_button");

const show_button = show_but.addEventListener('click', () => {
    for(let i = 1; i < ul_checked.childNodes.length; i++){
        ul_checked.childNodes[i].style.visibility = 'visible';
    }
    bool_hid_button = true;
    show_but.style.visibility = 'hidden';
    hide_but.style.visibility = 'visible';
}, false);

const hide_button = hide_but.addEventListener('click', () => {
    for(let i = 1; i < ul_checked.childNodes.length; i++){
        ul_checked.childNodes[i].style.visibility = 'hidden';
    }
    bool_hid_button = false;
    show_but.style.visibility = 'visible';
    hide_but.style.visibility = 'hidden';
}, false);

export {hide_button, show_button};