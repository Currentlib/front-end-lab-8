function reverseNumber(num1) {
    let variable = 0;
    let minus = 1;
    if (num1<0) {
        minus = -1;
        num1 = Math.abs(num1);
    }
    if (Number.isInteger(num1)) {
        while (num1) {
            variable = variable*10 + num1%10;
            num1 = Math.floor(num1/10);
        }
    } else {
        console.log ("Not an integer");
    }
    return variable*minus;
}
