(function() {
    var n = 2;
    var arr = [];
    var sum = 0;

    for (n=2; n<500000; n++) {
        sum = 0;
        for (var i=0; i<n.toString().length; i++) {
            sum += Math.pow(n.toString()[i], 5);
        }
        console.log(n);
        if (sum === n) {
            arr.push(sum);
        }
    }

    console.log(arr);
    console.log(arr.reduce((acc, curr) => acc + curr));
})();
