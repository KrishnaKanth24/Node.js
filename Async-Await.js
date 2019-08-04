function one(a){
    return new Promise(
         resolve => {
            setTimeout(function(){
                //one function executed
                //var b = a *2
                resolve(a*2);
            },2000);
        }
    )
}

function two(b){
    return new Promise(
        resolve =>{
            setTimeout(function(){
                //two function executed
                resolve(b*3)
            },30);
        }
    )
}

function three(c){
    return new Promise(
        resolve =>{
            setTimeout(function(){
                //three function executed
                resolve(c*4);
            },2500);
        }
    )
}

//async functions always returns a promise 
//https://alligator.io/js/async-functions/
/*
async function hello() {
  return 'am i returning a promise?';
}
const b = hello();
b.then(x => console.log(x)); // Hello Alligator!
//or
hello().then(x => console.log(x)); // Hello Alligator!
*/
function all(){
       one(2)
        .then(x=>{
          console.log("what is getting printed here  "+x);
           two(x)
            .then(y =>{
              console.log("round 2 " +y);
               three(y)
                .then(result => {
                  console.log("the result is "+ result);
                  
              })
          })
      })
      
      //var y = await two(x);
      //var result =await three(x,y);
    //console.log(await one(2));
    //console.log(await two());
    
    
    //return result;
}
all();
//    .then(x =>console.log("the result is "+x));

//if you all the functions inside function 'all' to run in parallel and but control returns to the function 'all' only when all promises are resolved

/*
async function msg() {
  const [a, b, c] = await Promise.all([one(), two(), three()]);

  console.log(`${ a } ${ b } ${ c }`);
  }
*/