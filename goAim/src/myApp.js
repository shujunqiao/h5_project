/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var MyLayer = cc.Layer.extend({
    //balls:[],
    ctor:function(){
        this._super();
        cc.log("in ctor.");
    },
    init:function () {
        this._super();
        var sprt = this.sprt = cc.Sprite.create(s_ball);
        this.addChild(sprt);
        sprt.setPosition(cc.p(100,100));

        console.log("in MyLayer, to add map.");
        var _map = new MapLayer();
        _map.init();
        _map.setPosition(cc.p(100,150));
        this.addChild(_map);
        //
        testArr();

        var arrObjs = cc.red();
        console.log("0 arrObjs: ", arrObjs);
        arrObjs = cc.RED;
        //var item = cc.
        console.log("1 arrObjs: ", arrObjs);
        var colorA = cc.Color3B();
    }
});

var testArr = function(){
    var arr = [];
    arr.push("a");
    arr.push("s");
    arr.push("d");
    arr.push("f");
    console.log(arr);
    var idx = arr.indexOf("s");
    console.log(idx);
}

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        window.layer = layer;
        this.addChild(layer);
        layer.init();
    }
});
