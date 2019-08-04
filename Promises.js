//difference between callback and promises

//u need to install Promise module 
var Promise = require('Promise');
var fs = require('fs');

//using callbacks
//fs.readFile("Filestream.txt","utf-8",function(err,data){
//console.log(data);
//})

//using promises
//what does it say is when readFile is completed
//it will execute .then function
//when defining promises then method itself returns a promise
fs.readFile("Filestream.txt","utf-8")
   .then(function(err,data){
    console.log(data);
    })
    //.then(function(){console.log("file printed")})

//i am getting error because callback function of readFile doesnot return a promise 
//check for that also 
