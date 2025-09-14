function factorial(n) {
    n = parseInt(n);
    if (isNaN(n) || n < 0) {
        return 1;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const [,, num] = process.argv;
console.log(factorial(num));
