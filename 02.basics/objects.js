let uid = Symbol('007');

let obj1 = {name : "kavish",
    rollno : "PCE21Cr007",
    "age" : 21,
    placementon : [3,6,20],
    [uid] : "007"
}
//types of accesing the object content...2nd one is important
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1['age']);
console.log(obj1['rollno']);
console.log(obj1.placementon);
console.log( obj1[uid]);
console.log(typeof obj1[uid]);


