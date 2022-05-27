//  closer : function along with it's lexical environment form a closer

// function a(){
//     var b =10;
//     return function c(){
//         console.log('c');
//     }
// }
// var d = a();

// d();

// ********** Temporal dead zone
// *** temporal dead zone is the time since when the let variable is hoisted and till it is initialized some value

// console.log(a);
// let a = 10;
// console.log(a);


// ********** block scope / compound statement
// *** use for (if, else, for, while)

// if(true){
//     let a =10;
//     console.log(a);
// }
// console.log(a);