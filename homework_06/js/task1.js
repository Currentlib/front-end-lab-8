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
        square = (Math.sqrt(half*(half-a)*(half-b)*(half-c))).toFixed(2);
        if ((square*100)%10==0 && (square*10)%10==0) {
            square = Number(square).toFixed(0);
        } else if ((square*100)%10==0) {
            square = Number(square).toFixed(1);
        }
        console.log("Type of triangle is " + type + " triangle and square is " + square);
    } else console.log("Incorrect data");
} else console.log("Incorrect data");
