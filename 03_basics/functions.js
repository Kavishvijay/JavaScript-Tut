// function sum(num1, num2){
//     let res = num1+num2
//     return res

// }

// sum(2,3)

// let res = sum(2, 3);
// console.log(res);

// //console.log does not return value


// function logedin(name){
// return `${name} just loged in`
// }

// console.log(logedin("kavish"));

// function logedin(name ){
//     if(!name)
//     {
//         console.log("please enter name");
//         return
        
//     }
//      return `${name} just loged in`
//      }
    
//      console.log(logedin("")); //undefined


//we can also pass default value for parameters if argument is missing

     function logedin(name= "ram" ){
        if(!name)
        {
            console.log("please enter name");
            return
            
        }
         return `${name} just loged in`
         }
        
         console.log(logedin()); 




 

