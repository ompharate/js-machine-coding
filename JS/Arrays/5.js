
// implement array map
const arr = [1,4,7,2,5,7]
Array.prototype.myMap = function(callback) {
    let result = []
    for (let i=0;i<this.length;i++) {
        result.push(callback(this[i],i,this));
    }
    return result;
}

arr.myMap((num)=>console.log(num*0))