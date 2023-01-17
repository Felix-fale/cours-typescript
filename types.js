"use strict";
var days = [1, 2, 3, 4, 5];
console.log(days);
days.push(6);
console.log(days);
var myObject = {
    title: "alexis",
    age: 27,
    color: "crimon",
    isMajeur: true,
    sayHello: function (name) {
        console.log(name);
    }
};
console.log(myObject.title);
myObject.sayHello("alexis");
