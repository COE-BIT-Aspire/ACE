//enum - group of constants
var direction;
(function (direction) {
    direction[direction["North"] = 0] = "North";
    direction[direction["South"] = 1] = "South";
    direction[direction["East"] = 2] = "East";
    direction[direction["West"] = 3] = "West";
})(direction || (direction = {}));
console.log(direction.South);
