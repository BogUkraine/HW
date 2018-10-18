//Task 1//
function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
   }
   console.log(5);
   printing();

/*5 1 4 3 2
5 выводится первым числом, очевидно, потому что находится перед вызовом функции printing

Потом по порядку 1

устанавливается таймер на 1 секунду. Т.е. 2 выведется через одну секунду, отправляется в event loop

устанавливается таймер на 0 секунд, но это условно. Все равно в этом случае выражение console,log(3)
отправляется в event loop и ждет маленький промежуток времени перед тем, как исполнить команду

Пока setTimeout ждут, выводится по порядку 4

Затем 3, так как задержка меньше чем у первого setTimeout

Последним исполняется первый setTimeout с задержкой в 1 секунду.

https://www.youtube.com/watch?v=8aGhZQkoFbQ - полезный видос
*/

//Task 2//
var myname = "global";
function func() {
 console.log(myname);
 var myname = "local";
 console.log(myname);
}
func();

/* undefined
local
Предварительный (первый проход) покажет, что в коде присутствует переменная myname
Но так как она объявляется заново в функции, то LexicalEnvironment будет содержимое функции, а не window
Поэтому сначала интерпретатор покажет, что не видит переменную, ведь она объявлена дальше в самой функции
выведет undefined
Потом присвоит значение local и выведет это значение.

Другой был бы случай, если бы

var myname = "global";
function func() {
 console.log(myname);
 myname = "local";               //Убрали var
 console.log(myname);
}
func();

Тогда выведет сначала global, потом local.
*/

//Task 3//
var foo = 1;
function bar() {
 console.log(foo);
 if (!foo) {
 var foo = 10;
 }
 console.log(foo);
}
bar();

/*undefined 
10
Как и в прошлом случае. Сначала видно, что foo объявляется дважды. Поэтому когда
интерпретатор доходит до проверки, то if(!foo) по сути идентичен строке
if(foo == undefined). Тогда он заходит в проверку и присваивает переменной значени 10
*/

//Task 4//
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
    console.log(i);
    }, 0);
}

/*
Выведется 10 10раз, так как в саму функцию не передается переменная i напрямую. Переменная берется
из внешнего лексического окружения, что происходит после того, как отработает цикл.
Соответсвенно на тот момент i = 10, и из-за задержки, которую дает setTimeout она выведется 10 раз.
*/

for (var i = 0; i < 10; i++) {
    (function(i) {
    setTimeout(function() {
    console.log(i);
    }, 0);
    })(i);
}
/*0 - 9
Переменная i берется из лексического окружения функции, т.е. берется значение счетчика до начала
работы setTimeout.
*/

//Task 5//
var fullname = 'John Doe';
var obj = {
 fullname: 'Colin Ihrig',
 prop: {
 fullname: 'Aurelio De Rosa',
 getFullname: function() {
 return this.fullname;
 }
 }
};
console.log(obj.prop.getFullname()); // Aurelio De Rosa - this отвечает контексту объекта prop
var test = obj.prop.getFullname;
console.log(test());                 // John Doe - по сути потеряли контекст, поэтому выведется внешняя переменная fullname
console.log(test.call(obj.prop));    // Aurelio De Rosa - задаем контекст напрямую с помощью call. this отвечает объекту prop
console.log(test.call(obj));         // Colin Ihrid - задаем контекст напрямую. this отвечает объекту obj

//Task 6//
function createCounter() {
    var count = 1;

    return function(){
        return count++;
    };
}

var counter = createCounter();
// каждый вызов увеличивает счётчик и возвращает результат
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3
// если создать другой счётчик, то он будет работать независимо от первого
var counter2 = createCounter();
console.log( counter2() ); // 1