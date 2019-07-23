var matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
var matrix2 = [[2,2,3],[3,3,2],[1,1,1]];
var matrix3= [[1,2],[2,1],[1,2],[2,1]];
var matrix4= [[1,2,3],[3,2,1]];
//matrix 1 is 4x2 matrix 2 is 2x3 then result will be 4x3 matrix1 row and matrix2 col but matrix1 col and matrix2 row should be same
console.log("the length of matrix1 is "+ matrix1.length);
//the length used above tells the number of rows

function multiply(m1, m2){
    //creating a array with number of matrix1 row
    var result = new Array(m1.length); 
    
    for(var i=0; i<m1.length; i++){
        //creating a array with current row and how much number of cols that is matrix2 col
        result[i] = new Array(m2[0].length);
        //above and below if i put i instead of 0 i am getting error for multiplication of matrix 3 and 4 ----->have to resolve
        for(var j=0; j<m2[0].length; j++){
            result[i][j]=0; 
            //initialising that particular cell or element
            
            for(var k=0; k<m1[i].length; k++){
                result[i][j] += m1[i][k]*m2[k][j];
            }
        }
    }
    return result;
}
console.log(multiply(matrix1,matrix2));
console.log("");
console.log(multiply(matrix3, matrix4));