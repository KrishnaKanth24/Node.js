function SentenceReverse(str){
    console.log("The String is:"+ str);
    var arr = str.split(" ");
    var revarr = new Array(arr.length-3);
    for(var x=arr.length-1; x>=0; x--){
        console.log(arr[x]);
        revarr.push(arr[x]);
    }
    console.log("The reversed sentence is  "+ revarr.join(" "));
    //if i u include join then commas wont appear
    console.log("commas are included because i used push function which is for numbers");
}
SentenceReverse("Signals and systems");

console.log("new");
function simple(str){
    console.log("simply using split and reverse  " + str.split(" ").reverse().join(" "));
}
simple("signals and systems");

//function usingrecursion(str){
//var arr= str.split(" ");
//var revarr =new Array(str.length);
//    var temp =arr.length-1;
  //  console.log(temp);
    //function wat(temp){
      //  if(temp>=0){
        //    return arr[0];
    //    }
      //  else{
        //    revarr = arr[temp].concat(arr.(wat(temp-1));
        //}
//    }
//console.log(revarr);
//}
//usingrecursion("signals and systems");