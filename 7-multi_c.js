const [,, x] = process.argv;
const num = parseInt(x);
if (isNaN(num)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < num; i++) {
        console.log("C is fun");
    }
}
