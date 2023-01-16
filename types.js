"use strict";
var user1 = {
    name: "alex",
    color: "red",
    age: 27
};
function hello(person) {
    console.log("Bonjour a toi ".concat(person.name, " et tu as ").concat(person.age, " ans."));
}
hello(user1);
