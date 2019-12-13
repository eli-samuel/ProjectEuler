function checkPrime(n) {
    for (var j=2; j<=n/2+1; j++) {
        if (n%j == 0) {
            return false;
        }
    }
    return true;
}

let prime = 1, p = 1;
while (prime != 10001) {
    p++;

    console.log(p + "\t" + checkPrime(p));
    if (checkPrime(p)) prime++;
}

console.log(p + " is the " + prime + "th prime number.")
