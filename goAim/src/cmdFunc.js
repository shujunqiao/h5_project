/**
 * Created with JetBrains WebStorm.
 * User: cocos
 * Date: 13-10-29
 * Time: 下午2:51
 * To change this template use File | Settings | File Templates.
 */


var strLine = "line";
var l_w = 16;
var arrPos = [cc.p(0,0), cc.p(0,l_w+4), cc.p(l_w+4,l_w+4), cc.p(l_w+4,0)];
var pos_map = cc.p(100, 50);
var design_size = cc.rect(0,0,480, 320);
var _offset = cc.size(0, 30);
var arrTypes = [0, 1, 1];
var arrColor = [cc.c4f(0,0,255,255), cc.c4f(255,122,0,255), cc.c4f(255,0,0,255)];
var arrDotPos;

var STEP_MAX = 12;

var GAME_INFO = {
    WINNER:0
};

var PLAYER_TYPE = {
    PLAYER:0,
    AI:1
};

//0: down; 1:left; 2:right; 3:up;
var DIR_4 = {
    DOWN:0,
    LEFT:1,
    RIGHT:2,
    UP:3
};

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