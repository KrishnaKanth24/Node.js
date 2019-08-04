//Understanding Callback 

//Before that understanding keyword let
//let and const is a block level scope
var x1 = 10;
// Here x is 10
{ 
  let x1 = 2;
  // Here x is 2
}
// Here x is 10

//example2 
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5

//callback example
let x = function(){
    cons    ole.log("i am called from inside a function");
}

let y = function(callback){
    console.log("this is the first function");
    callback(); 
}

console.log(y(x));

//callback another example
let add = function(a,b){
    return a+b;
}

//above code can also be written as 
function add(x, y){
    return x + y;
}

//you can give add(10,29);
//or you can give var me = add
// me(10,49);

function addFive(x, addreference){
    return addreference(x,5); 
}

let multiply = function(a,b){
    return a*b;
}

let calc = function(num1, num2, callback){
    if(typeof callback ==="function"){
     return callback(num1, num2);
}}  

console.log(calc(10,20,add));

//you are passing function definition and declaration itself 
//but also inside the calc function it will check whether callback function 
console.log(calc(10,20, function(a,b){
    return a-b;
            })
           )

//CLASSES AND OBJECTS

class User{
     constructor(first, last, address){
         this.firstname = first;
         this.lastname = last;
         this.address = address;
     }
    getContents(){
        let contents = "${this.firstname} ${this.lastname} is my full name";
        return contents;
    }
}

var krishna = new User("krsh","kant","chennai");
console.log(krishna);
console.log(krishna.getContents());


















