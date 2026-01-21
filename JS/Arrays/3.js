// group by key

const people = [
  { name: "Alice", city: "Pune" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Pune" },
  { name: "David", city: "Mumbai" },
  { name: "Eva", city: "Delhi" }
];


function groupByKey(key,arr) {
    return arr.reduce((acc,obj)=>{
        const groupKey = obj[key];

        if(!acc[groupKey]) {
            acc[groupKey] = []
        }

        acc[groupKey].push(obj)

        return acc;

    },{})
}

console.log(groupByKey("city",people))