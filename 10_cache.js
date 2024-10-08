function cacheFunction(fn) {
    const cache = {};

    return function(...args) {
        const key = args.join('');

        if (cache[key]) {
            console.log('Взято из кеша', cache[key])
            return cache[key];
        }

        const result = fn(...args);
        console.log('Посчитала функция = ', result)
        cache[key] = result;

        return result;
    }
}

function factorial(n) {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cacheFactorial = cacheFunction(factorial);

cacheFactorial(5);
cacheFactorial(4);
cacheFactorial(3);
cacheFactorial(4);
cacheFactorial(5);
cacheFactorial(1);
