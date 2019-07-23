var array2 = [[1,2,4],[4,5,6]];
console.log(array2);
console.log("using concat function");
var array1 = [];
    for(var i=0; i<array2.length; i++){
        array1 = array1.concat(array2[i]);
    }
console.log(array1);

console.log("using double for loop with push function");
function array2to1(array2){
    var array_new = [];
    for(var i=0; i<array2.length; i++){
        for(var j=0; j<array2[i].length; j++){
            array_new.push(array2[i][j]);
            //array_new =array2[i][j];  this code returns the last value of array   
        }
    }
return array_new;
}
console.log(array2to1(array2));