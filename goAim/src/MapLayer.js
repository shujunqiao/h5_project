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
//0: down; 1:left; 2:right; 3:up;
var DIR_4 = {
    DOWN:0,
    LEFT:1,
    RIGHT:2,
    UP:3
};

var OneDir = cc.Node.extend({
    init:function(dir){
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

        //
        var _pos = [];
        for(var i=0; i<7; i++){
            var p_x = 0;
            var p_y = 0;
            switch (dir){
                case DIR_4.DOWN:
                    p_x = 0;
                    p_y = l_w*i;
                    break;
                case DIR_4.LEFT:
                    p_x = -l_w*i;
                    p_y = l_w*7;
                    break;
                case DIR_4.RIGHT:
                    p_x = l_w*i;
                    p_y = l_w*7;
                    break;
                case DIR_4.UP:
                    p_x = 0;
                    p_y = l_w*7+l_w*i;
                    break;
            };
            _pos[i] = cc.p(p_x, p_y);
        }
        arrDotPos[dir] = _pos;
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

        arrDotPos = [];
        for(var i=0; i<4; i++)
        {
            var dir = new OneDir();
            dir.init(i);
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