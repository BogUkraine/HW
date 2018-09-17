/*
<button id=”button”></button>
button.onclick = function() {
 alert(1);
}
button.onclick = function() {
 alert(2);
}

Если нажать на кнопку, то выведется 2 в сообщении.
Это событие перезаписывается, поэтому первая функция не имеет смысла.
К тому же события добавляются через анонимную функцию,
что значит, удалить их нельзя.

Можно сделать так:
<button id="button" onclick="alert(2)"></button>

А лучше так:
<button id=”button”></button>
<script>
    function func(){
        alert(2);
    }

    button.addEventListener("click", func);
</script>
*/

/*
<form onclick="console.log('form')">FORM
 <div onclick=" console.log('div')">DIV
 <p onclick=" console.log('p')">P</p>
 </div>
</form>

1. Если нажать на p, то произойдет "всплытие"
p, div, form. От дочернего к родительскому элементу.

2. Как сделать в обратном порядке?

var elems = document.querySelectorAll('form,div,p');

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", func, true);
}

function func(){
    alert(this.tagName);
}

Это называется погружением.

3. При клике на p отрабатывает только один console.log
достаточно вызвать метод stopPropagation();

<form onclick="console.log('form')">FORM
 <div onclick="console.log('div')">DIV
 <p onclick="console.log('p')">P</p>
 </div>
</form>
Вопрос...
*/