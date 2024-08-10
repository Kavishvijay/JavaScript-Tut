let uid = Symbol('007');

let obj1 = {name : "kavish",
    rollno : "PCE21Cr007",
    "age" : 21,
    placementon : [3,6,20],
    [uid] : "007"
}
//types of accesing the object content...2nd one is important
// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1['age']);
// console.log(obj1['rollno']);
// console.log(obj1.placementon);
// console.log( obj1[uid]);
// console.log(typeof obj1[uid]);

obj1.rollno = "PCE21CR0007"
//Object.freeze(obj1)
obj1.rollno = "PCE21CR007"

//console.log(obj1);

obj1.lastname = "Vijayvargiya"


 obj1.greetings = function(){console.log("Hello!boyee");}
 obj1.greetingstwo = function(){console.log(`hey!! ${this.name} ${this.lastname}`);}
 console.log(obj1.greetings);
// console.log(obj1.greetings());
// console.log(obj1.greetingstwo());

//console.log(obj1);



