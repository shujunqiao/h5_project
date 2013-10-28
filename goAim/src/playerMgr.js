/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-10-28
 * Time: 下午10:25
 * To change this template use File | Settings | File Templates.
 */

var PlayerMgr = cc.Layer.extend({
    _btn:null,
    init:function(){
        var start = cc.Sprite.create(s_startN);
        var startPush = cc.Sprite.create(s_startU);
        this._btn = cc.MenuItemSprite.create(start, startPush, this.btnClick, this);
        this.addChild(this._btn);
        this._btn.setPosition(cc.p(design_size.width/2, 30));

        //
        this.setTouchEnabled(true);
    },
    onTouchBegan:function(sender){
        console.log("on TouchBegan.");
    },
    onTouchesBegan:function(sender){
        console.log("on Touches Began.");
    },
    btnClick:function(pSender){
        console.log("click btn.");
    }
});

var PLAYER_TYPE = {
    PLAYER:0,
    AI:1
}
var Player = cc.Node.extend({
    _type:null,
    _idx:null,
    init:function(type, idx){
        this._type = type;
        this._idx = idx;
    }
});

