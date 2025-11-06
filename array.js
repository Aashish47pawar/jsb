const arr = [0,1,2,34,5]
const str = ["shaktiman","spiderman"]

const arr2 = new Array(1,2,3,4)
console.log(str[1]);

arr.push(10)
arr.pop();
console.log(arr);

arr.unshift(10)
console.log(arr)
arr.shift();
console.log(arr)
console.log(arr.includes(2))
console.log(arr.indexOf(34))

console.log(arr);
const arr3 = arr.join()
console.log(typeof arr3);

const myn1 = arr.slice(1,2)

console.log(myn1);
console.log(arr);

const myn2 = arr.splice(1,3)
console.log(myn2)
console.log(arr)
