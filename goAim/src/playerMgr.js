/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-10-28
 * Time: 下午10:25
 * To change this template use File | Settings | File Templates.
 */

var PlayerMgr = cc.Layer.extend({
    _btn:null,
    _players:null,
    init:function(){
        var start = cc.Sprite.create(s_startN);
        var startPush = cc.Sprite.create(s_startU);
        this._btn = cc.MenuItemSprite.create(start, startPush, this.btnClick, this);
        //this.addChild(this._btn);
        var menu = cc.Menu.create(this._btn);
        this.addChild(menu);
        menu.setPosition(cc.p(0, 0));
        this._btn.setPosition(cc.p(design_size.width/2, 30));

        //
        this._players = [];

//        for(var i=0; i<3; i++){
//            var player = new Player();
//            player.init(arrTypes[i], i);
//            this.addChild(player);
//            this._players.addChild(player);
//        }
        console.log("arrDotPos: ", arrDotPos);
        var _dNode = cc.DrawNode.create();
        this.addChild(_dNode);
        _dNode.setPosition(cc.p(100, 100));
        for(var i=0; i<arrDotPos.length; i++){
            var color = getColor();
            for(var j=0; j<arrDotPos[i].length; j++){
                _dNode.drawDot(arrDotPos[i][j], 2, color);
            }
        }
        _dNode.draw();
    },
    btnClick:function(pSender){
        console.log("click btn.");
    }
});

var PLAYER_TYPE = {
    PLAYER:0,
    AI:1
}
var arrTypes = [0, 1, 1];
var arrColor = [cc.c4f(255,0,255,255), cc.c4f(0,255,255,255), cc.c4f(255,0,255,255)];
var arrDotPos;
var Player = cc.Node.extend({
    _type:null,
    _idx:null,
    init:function(type, idx){
        this._type = type;
        this._idx = idx;

        var _draw = cc.DrawNode.create();
        _draw.drawDot(cc.p(0,0), 3, arrColor[idx]);
        _draw.draw();
        this.addChild(_draw);
    }
});

