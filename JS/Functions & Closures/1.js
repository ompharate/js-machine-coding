// Write a function that runs only once, no matter how many times it is called.

function once(fn) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
        console.log("recalculating")
        result = fn.apply(this,args);    
        called = true;
    }
    return result;
 }
}

function add(a,b) {
    return a+b;
}

let heavyCalculation = once(add);

console.log(heavyCalculation(5,8))
console.log(heavyCalculation(5,8));