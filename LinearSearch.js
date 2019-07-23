var list=['1','2','3','4','5','6'];
console.log(list);
function search(num){
    console.log("searching for "+ num);
    var temp=1;
    for(var x=0; x<list.length; x++){
 if(num==list[x]){
     console.log("found in search " + num);
     console.log(" ");
     temp=0;
     break;
 }
}
    if(temp==1)
        console.log("Not found");
}
search(5);
search(10);