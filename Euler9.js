function pythag() {
    var a=1, b=1, c=1;

    while (true) {
        for (a = 1; a < 500; a++) {
            for (b = 1; b < 500; b++) {
                console.log(a + "\t" + b + "\t" + c);
                if (Math.sqrt((Math.pow(a,2) + Math.pow(b,2)))%1 === 0) {
                    c = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)));
                    if (a+b+c === 1000) return [a, b, c];
                }
            }
        }
    }
}

console.log(pythag().reduce((acc, curr) => acc * curr));
