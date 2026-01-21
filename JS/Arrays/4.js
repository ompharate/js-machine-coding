// intersection of two arrays

// #1 using filter
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(intersection(array1, array2)); // Output: [4, 5]

// # using obj 

function inter(arr1, arr2) {
    let freq = {}
    let result = []

    for (let item of arr1) {
      
            freq[item] = (freq[item] ||  0) + 1
        
    }

    for (let y of arr2) {
        if(freq[y]>0) {
            result.push(y)
            freq[y]--;
        }
    }

    return result;

}

console.log(inter(array1,array2))