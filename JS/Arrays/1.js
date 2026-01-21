// Flatten a deeply nested array.


// const result = arr.flat(Infinity)
// console.log(result)

// polifill for flat method
let arr = [2,3,4,5,[23,4,5]]

function flatten(arr) {
    let result = []

    for (let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flatten(item))
        } else {
            result.push(item);
        }
    }

    return result;

}

console.log(flatten(arr))