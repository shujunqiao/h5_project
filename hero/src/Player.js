/**
 * Created with JetBrains WebStorm.
 * User: cocos
 * Date: 13-10-30
 * Time: 上午10:17
 * To change this template use File | Settings | File Templates.
 */

var Player = cc.Layer.extend({
    init:function(){
        var qwe = this.sprt = cc.Sprite.create(s_ball);
        this.addChild(qwe);
        qwe.setPosition(cc.p(10,100));
    }
});