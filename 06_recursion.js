function factorial(number) {
    if (number <= 1) {
        return number;
    }

    return number * factorial(number - 1);
}

console.log(factorial(5));

// ----------------------------------------------------------

function fibonachi(n) {
    if (n <= 1) {
        return n;
    }

    return fibonachi(n - 1) + fibonachi(n - 2);
}

function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fibonachi(7));
console.log(fib(7));
