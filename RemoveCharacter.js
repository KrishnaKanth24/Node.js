function removeChar(str, psn){
    var one = str.substring(0, psn);
    var two = str.substring(psn+1, str.length);
    return one+two;
}
console.log(removeChar("SANDS",1));
console.log(removeChar("MONITOR",4));
