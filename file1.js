let oceans = [
    "Pacific",
    "Atlantic",
    "Indian",
    "Arctic",
    "Antarctic",
];

function a(start, endnumber, steppingNumber) {
    var currentNumber = start;
    var sum = 0;

    for (; currentNumber > endnumber;) {
        sum += currentNumber;
        currentNumber -= steppingNumber;
    }
    return sum;
}
console.log(a(1000, 100, 20));