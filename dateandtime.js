let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toJSON());
console.log(typeof mydate);

let date1 = new Date(2003, 2, 25)
console.log(date1.toDateString())

let date2 = new Date("2003-03-25")
console.log(date2.toDateString())

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(date1.getTime());

console.log(date2.getDate());
console.log(date2.getMonth()+1);

date2.toLocaleString('default',{
    weekday: "long",
})
