"use strict";
var sayHello = function (name) {
    console.log("bonjour a toi ".concat(name));
};
var bestFriend = function (name) {
    return name;
};
sayHello("alexis");
console.log("".concat(bestFriend("justine")));
