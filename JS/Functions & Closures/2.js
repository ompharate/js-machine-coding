// Create a private counter using closures with increment() and getValue().

function counter() {
    let count = 0;

    return {
        increment() {
        count++;
        return count;
    },
    
      decrement() {
        count--;
        return count;
    },
    
      getValue() {
        return count;
    }
    } 

}

let {increment,decrement,getValue} = counter();

console.log(increment())
console.log(increment())
console.log(decrement())
console.log(getValue())