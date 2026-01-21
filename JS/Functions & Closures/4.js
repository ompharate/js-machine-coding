// Convert a function f(a, b, c) into a curried version. (limited to 3 arguments)

function add(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}

const addition = add(1)(2)(3);
console.log(addition)



// Convert a function f(a, b, c) into a curried version. (unlimited arguments)
function sum(a) {
    let total = a;

    return function next(b) {
        console.log("b=",b)
        if(b === undefined) {
            return total;
        }
        total += b;
        return next;
    }
}

console.log(sum(1)(2)(3)(4)());  // 10
console.log(sum(5)(10)());      // 15
console.log(sum(1)(0)(2)());    // 3