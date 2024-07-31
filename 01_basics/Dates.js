 let date1 = new Date();
// console.log(date1);
// console.log(date1.toDateString());
// console.log(date1.toLocaleString());

let date2 = new Date("2024-07-31");
console.log(date2);

console.log(Date.now());

console.log(date1.getMonth()+1);
console.log(`experiment for dates and today is ${date1.toLocaleDateString()}, day is ${date1.getDay()}`)


console.log(date2.toLocaleString('default',{
    weekday : "long"
}))

