function pattern(num){
    var a=97;
    var str="";
    for(var i=1; i<=num; i++){
        for(var k=1; k<=num-i; k++){
            str += "\t";
        }
        //var alpha ="a";
            if(i%2==0){
                console.log(String.fromCharCode(a).repeat(i));
                a=a+1;
            }
            else{
                console.log("*".repeat(i));
            }
    }
}
console.log(pattern(8));

/*
function generatePyramid() {
    var totalNumberofRows = 5;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+=j + "     ";
        }
        console.log(output);
        output="";
    }
}
console.log(generatePyramid());

    const space = function (spc) {
	   if(spc === 0) {
		  return "";
        }
		  return " " +space (spc-1);
	}
	const star = function (str){
		if (str === 0) {
			return "";}
			return "*" + star(str-1);
    }
    const run = function (n,spc,str) {
        if(n===0) {
            return " ";
        }
        console.log(space(spc)+star(str))
        run(n-1,spc-1,str+2);
    }
    const trianglestars = function(n)
    {
		run(n,n-1,1);
    }
trianglestars(5);

function stars(n){
    var str = '';
    for(var i=1; i<=n; i++){
       // for(var k=1; k<=n-i; k++){
       //     str += "\t";
       // }
        for(var j=1; j<=i; j++){
            str += "*\t\t";
        }
        console.log(str);
        str = "";
    }
}
stars(3);
*/