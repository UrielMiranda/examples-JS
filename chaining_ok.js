/**
 * Created by uriel.miranda on 26/10/2016.
 */
var Calc = function (start){
    var cal = this;
    this.add = function(x){
        start = start + x;
    return cal
    };

    this.multiply = function(x){
        start = start * x;
        return cal
    };

    this.equals = function(callback){
        callback(start);
        return cal
    };
};


new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result){
        console.log(result);
    });
