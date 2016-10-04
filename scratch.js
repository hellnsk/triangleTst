"use strict;"
function TriangleCheck (side1,side2,side3){
    var rets = ["scalene", "isosceles", "equilateral", "invalid"],
        i = 0,
        prev_sides = [],
        ret = 0;
    for(i in arguments){
        ret += ((-1 < prev_sides.indexOf(arguments[i])) ? 1 : 0);
        prev_sides[prev_sides.length] = arguments[i];
    }
    (TriangleInvalid(arguments)) && (ret = 3);
    return rets[ret];
}
function TriangleInvalid(sides){
    return (sides[0] + sides[1] < sides[2]) || (sides[0] + sides[2] < sides[1]) || (sides[1] + sides[2] < sides[0]);
}

console.log('3,4,5: ' + TriangleCheck(3,4,5));
console.log('3,3,5: ' + TriangleCheck(3,3,5));
console.log('3,4,3: ' + TriangleCheck(3,4,3));
console.log('3,3,3: ' + TriangleCheck(3,3,3));
console.log('3,8,3: ' + TriangleCheck(3,8,3));
console.log('3,3,8: ' + TriangleCheck(3,3,8));
console.log('8,3,3: ' + TriangleCheck(8,3,3));