function pattern(num){
    var temp=num;
    var x1=1;
    for(var x=1; x<=num; x++){
        var arr=new Array();
        var temp2=1;
            while(temp2<=temp){
                arr.push(x1);
                x1++;
                temp2++;
            }
        console.log(arr.join(" "));
        temp--;
    }
}
pattern(3);
console.log(" ");
pattern(5);
pattern(10);