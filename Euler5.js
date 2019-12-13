function multiple(n) {
    for (let i=2; i<=20; i++) {
        if (n%i != 0) return false;
    }
    return true;
}

var n = 0;
while (!multiple(n+=20)) {
    console.log(n);
}

console.log(n + " is evenly divisible by all of the numbers from 1 to 20");
