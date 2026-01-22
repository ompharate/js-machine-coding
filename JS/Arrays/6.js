// implement array reduce

const arr = [1,4,7,2,5,7]

Array.prototype.myReduce = function(callback,initValue) {
    let result = initValue;

    for (let i = 0; i < this.length; i++) {
        result = callback(result,this[i],i,this)
    }

    return result;
}


console.log(arr.myReduce((acc,item,index)=>{
    return acc+item;
},0))