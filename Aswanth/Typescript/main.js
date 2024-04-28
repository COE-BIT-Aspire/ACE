var a;
var b;
var c = ['a', 1, true];
var color;
(function (color) {
    color[color["asro"] = 1] = "asro";
    color[color["absol"] = 2] = "absol";
    color[color["vicky"] = 3] = "vicky";
})(color || (color = {}));
;
var g = color.asro;
console.log(g);
