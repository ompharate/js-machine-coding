// Remove duplicates from an array without using Set.

// #1 Using Object

const arr = [4,5,6,7,8,4,7]

function removeDuplicates(arr) {
    const seen = {}
    const result = []

    for (let item of arr) {
        if (!seen[item]) {
            seen[item] = true;
            result.push(item)
        }
    }
    return result;
}

console.log(removeDuplicates(arr))


// # using filter

const result = arr.filter((item,index)=> arr.indexOf(item) === index)
console.log(result)