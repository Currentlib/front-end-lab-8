function isPrime(num1) {
    if (num1 <= 1) return false;
    for(var i=2; i<num1; i++)
        if(num1%i == 0) return false;
    return true;
}
