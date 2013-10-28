/**
 * Created with JetBrains WebStorm.
 * User: cocos
 * Date: 13-10-28
 * Time: 下午2:43
 * To change this template use File | Settings | File Templates.
 */

var MapLayer = cc.Layer.extend({
    init:function(){
        //console.log("in MapLayer, to add whole map.");
        var _map = new WholeMap();
        _map.init();
        pos_map.x = design_size.width / 2;
        pos_map.y = (design_size.height + _offset.height) / 2;
        console.log("pos_map: ", pos_map);
        _map.setPosition(pos_map);
        this.addChild(_map);
    }
});

var OneDir = cc.Node.extend({
    init:function(){
        var drawNode = cc.DrawNode.create();
        //drawNode.setColor(cc.BLUE);
        drawNode.setPosition(cc.p(10,10));
        var color = getColor();
        for(var i=1; i<7; i++){
            drawNode.drawSegment(cc.p(-l_w, l_w*i), cc.p(l_w, l_w*i), 0.5, color);
        }
        drawNode.drawSegment(cc.p(-l_w,l_w*4), cc.p(-l_w, l_w*6), 0.5, color);
        drawNode.drawSegment(cc.p(l_w,l_w*4), cc.p(l_w, l_w*6), 0.5, color);
        drawNode.drawSegment(cc.p(0,0), cc.p(0, l_w*6), 0.5, color);
        drawNode.draw();

        this.addChild(drawNode);
    }
});

var WholeMap = cc.Node.extend({
    init:function(){
        //console.log("in WholwMap, to add line.");
        var _sp = cc.Sprite.create(s_line);
        //this.addChild(_sp);
        //_sp.setPosition(cc.p(0, 50));
        //console.log(_sp.width);

        //add frame.
        var frame = cc.SpriteFrame.createWithTexture(_sp.getTexture(), cc.rect(0,0,l_w,6));
        cc.SpriteFrameCache.getInstance().addSpriteFrame(frame, strLine);

        for(var i=0; i<4; i++)
        {
            var dir = new OneDir();
            dir.init();
            dir.setAnchorPoint(cc.p(0,0));
            dir.setRotation(90*i);
            dir.setPosition(arrPos[i]);
            this.addChild(dir);
        }
    },
    getWidth:function(){
        return 6*l_w*2;
    }
});

var strLine = "line";
var l_w = 16;
var arrPos = [cc.p(0,0), cc.p(0,l_w+4), cc.p(l_w+4,l_w+4), cc.p(l_w+4,0)];
var pos_map = cc.p(100, 50);
var design_size = cc.rect(0,0,480, 320);
var _offset = cc.size(0, 30);

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
}