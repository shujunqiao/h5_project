/**
 * Created with JetBrains WebStorm.
 * User: cocos
 * Date: 13-10-29
 * Time: 下午2:51
 * To change this template use File | Settings | File Templates.
 */


//get color
var getColor = function(){
    var r = getRandN(255);
    var g = getRandN(255);
    var b = getRandN(255);
    return cc.c4f(r,g,b,255);
};
//get random number 0~n
var getRandN = function(num){
    var aNum = cc.RANDOM_0_1() * num | 0;
    return aNum;
};
//get random 1-3
var getRand3 = function(){
    var a = getRandN(3) + 1;
    return a | 0;
}