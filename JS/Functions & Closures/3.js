// Implement a function that remembers previous arguments and caches results.


function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.parse(...args);

        if (cache.has(key)) {
            console.log("from cache")
            return cache.get(key);
        }

        console.log("computing again")
        let result = fn.apply(this,args);
        cache.set(key,result);
        return result;
    }

}

function add(a,b) {
    return a+b;
}

let addition = memoize(add);

console.log(addition(5,6));
console.log(addition(9,8))
console.log(addition(9,8))