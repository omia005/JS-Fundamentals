const [,, arg] = process.argv;
if (arg !== undefined && !isNaN(parseInt(arg)) && parseInt(arg).toString() === arg) {
    console.log(`My number: ${parseInt(arg)}`);
} else {
    console.log("Not a number");
}
