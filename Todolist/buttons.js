const hide_but = document.querySelector(".hide_button");
const show_but = document.querySelector(".show_button");
const ul_checked = document.querySelector('.show_hide_buttons');

export const show_button = () => { show_but.addEventListener('click', () => {
    ul_checked.style.display = "block";
}, false);
}

export const hide_button = () => { hide_but.addEventListener('click', () => {
    ul_checked.style.display = "none";
}, false);
}