function add(a, b) {
    return a + b;
}

const [,, num1, num2] = process.argv;
const a = parseInt(num1);
const b = parseInt(num2);

console.log(add(a, b));
