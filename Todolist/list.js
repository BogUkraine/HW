var array = [
    "This is a list item",
    "Another list item",
    "Yup, another item",
    "Another list item2",
    "This is blablabla"
];

var checkList = [];

for(let i = 0; i < array.length; i++){
    checkList[i] = document.createElement("p");
    checkList[i].innerText
}

const createListItem = () => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const p = document.createElement('p');

    const ul = document.querySelector('.check_elements_ul');
    const li = document.querySelector('.check_elements_li');

}