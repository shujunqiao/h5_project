/**
 * Created with JetBrains WebStorm.
 * User: cocos
 * Date: 13-10-30
 * Time: 上午10:21
 * To change this template use File | Settings | File Templates.
 */

var GameManager = cc.Layer.extend({
    _player:null,
    init:function(){
        this._player = new Player();
        this._player.init();
        this.addChild(this._player);

        this.scheduleUpdate();
    },
    update:function(){
        ;
    }
});

GameManager._instance = null;
GameManager.getInstance = function(){
    if(GameManager._instance == null){
        GameManager._instance = new GameManager();
        GameManager._instance.init();
    }
    return GameManager._instance;
}