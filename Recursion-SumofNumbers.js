
function sumTo(num){
    if(num<=1)
        return num;
    else
      return  num + sumTo(num-1);
}
console.log(sumTo(3));

