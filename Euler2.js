function fib(n) {
    return Math.round((Math.pow((1+Math.sqrt(5))/2., n) - Math.pow((1-Math.sqrt(5))/2., n))/Math.sqrt(5));
}

var num = 0, ans = 0, i = 0;

while (num<4000000) {
    num = fib(i)
    if (num%2 === 0) {
        ans += num;
    }
    i++;
}

console.log(ans);
