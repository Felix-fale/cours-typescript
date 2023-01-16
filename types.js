var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["lundi"] = 1] = "lundi";
    Weekdays[Weekdays["mardi"] = 2] = "mardi";
    Weekdays[Weekdays["mercredi"] = 3] = "mercredi";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays[0]);
console.log(Weekdays[1]);
// tuples
var identity = ["alexis", 27];
console.log(identity);
