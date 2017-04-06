/**
 * Created by uriel.miranda on 25/10/2016.
 */
function wrapValue(n){
    var localVariable = n;
    return function(){
        return localVariable;
    }

}

var wrap1 = wrapValue(1);
var wrap2  = wrapValue(2);

console.log(wrap1());
console.log(wrap2());