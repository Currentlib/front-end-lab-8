var type, square;
var a = Number(prompt("Input length of first side: "));
var b = Number(prompt("... second side: "));
var c = Number(prompt(".. third side: "));
var half = (a+b+c)/2;

if (a>0 && b>0 && c>0) {
    if ((a<b+c) && (b<a+c) && (c<a+b)) {
        if (a==b && b==c && a==c) {
            type = "equilateral";
        } else if (a==b || b==c || a==c) {
            type = "isosceles";
        } else if (((a*a)==((b*b)+(c*c))) || ((b*b)==((a*a)+(c*c))) || ((c*c)==((a*a)+(b*b)))) {
            type = "right";
        } else if (a!=b && b!=c && a!=c) {
            type = "scalene";
        }
        square = Math.sqrt(half*(half-a)*(half-b)*(half-c));
        console.log("Type of triangle is " + type + " triangle and square is " + square.toFixed(2));
    } else console.log("Incorrect data");
} else console.log("Incorrect data");
