//Singleton objects := objects created with new keyword without any values
let tinderuser = new Object();

//adding values to singleton object 
tinderuser.id = "kv12"
tinderuser.isloggedin = false
tinderuser.name = {userfullname :{
name: "kavish",
lastname: "vijay"
}}

//console.log(tinderuser.name.userfullname?.lastname);

//joining two objects using spread operator...
let obj1 = {1: "a", 2:"b"}
let obj2 = {3: "a", 4:"b"}

let obj3 = {...obj1, ...obj2}
console.log(obj3);

//joining two objects using assign function Objects.assign(target,source)
let obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

