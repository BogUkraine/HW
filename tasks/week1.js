typeof undefined    //undefined
typeof 1            //number
typeof true         //boolean
typeof "foo"        //string
typeof {}           //object
typeof []           //object
typeof null         //object

"1" + 2             //12 as string
1 + "2"             //12 as string
1 + "2" - 0         //12 as number
"1" - 0 + 2         //3
null == undefined   //true
null == 0           //false
"a" > "b"           //false
"a" > "A"           //true

var a = 1; !!a      //true
a = 0; !!a          //false
a = "1"; !!a        //true
a = true; !!a       //true
a = {b: 1}; !!a     //true*/
///////////////////////////////////
 //       Task 2
///////////////////////////////////
/*var array = [1, 4, 7];
function myFunction(arr) {
    return arr.map(function(item, index, arr) {
        return (item*item);
    });
}
var newArr = myFunction(array);
alert(newArr);
*/
//////////////////////////////////
//          Task 3
/////////////////////////////////

var rooms = {
    room1: [
    { name: 'room1 name1' },
    { name: 'room1 name2' },
    { name: 'room1 name3' },
    { name: 'room1 name4' }
    ],
    room2: [
    { name: 'room2 name1' },
    { name: 'room2 name2' },
    { name: 'room2 name3' },
    { name: 'room2 name4' }
    ],
    room3: [
    { name: 'room3 name1' },
    { name: 'room3 name2' },
    { name: 'room3 name3' },
    { name: 'room3 name4' }
    ]
};
var namesArray = rooms => {
    var roomsList = Object.values(rooms); // массив комнат
    var allPersonList = roomsList.reduce(function(acc, naxtValue) {
        var newAcc = acc.concat(naxtValue);
        return newAcc;
    }, []); // массив людей
    var namesList  = allPersonList.map(function(person) {
        return person.name;
    });
    return namesList;
};

console.log(namesArray(rooms));