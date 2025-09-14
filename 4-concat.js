const [,, arg1, arg2] = process.argv;

if (arg1 === undefined) {
    console.log("No argument");
} else if (arg2 === undefined) {
    console.log(`${arg1} is undefined`);
} else {
    console.log(`${arg1} is ${arg2}`);
}
