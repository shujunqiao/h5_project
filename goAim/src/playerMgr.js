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

        for(var i=0; i<3; i++){
            var player = new Player();
            player.init(arrTypes[i], i);
            this.addChild(player);
            player.setPosition(arrDotPos[i][0]);
            this._players.push(player);
        }
//        console.log("arrDotPos: ", arrDotPos);
//        console.log("pos_map", pos_map);
//        var _dNode = cc.DrawNode.create();
//        this.addChild(_dNode);
//        for(var i=0; i<arrDotPos.length; i++){
//            var color = getColor();
//            for(var j=0; j<arrDotPos[i].length; j++){
//                _dNode.drawDot( arrDotPos[i][j], 2, color);
//            }
//        }
//        _dNode.draw();
    },
    btnClick:function(pSender){
        console.log("click btn.");
        var aN = 0;
        for(var i=0; i<3; i++){
            aN += this._players[i].getCurNum();
        }
        var idx = 0;
        switch (aN){
            case 1:
            case 4:
            case 7: //player
                idx = 0;
                break;
            case 2:
            case 5:
            case 8: //ai-1
                idx = 1;
                break;
            case 3:
            case 6:
            case 9: //ai-2
                idx = 2;
                break;
        }
        console.log("aN", aN, "idx", idx);
        this._players[idx].addStep();
        var iStep = this._players[idx].getCurStep();
        if(iStep < 7){
            this._players[idx].setPosition(arrDotPos[idx][iStep]);
        }
        else{
            this._players[idx].setPosition(arrDotPos[3][iStep - 6]);
        }

        //
        if(this.gameIsOver()){
            var str = "game over, "
            if(GAME_INFO.WINNER == PLAYER_TYPE.PLAYER)
                str += "You Win!";
            else{
                str += "You Lose!";
            }
            console.log(str);
        }
    },
    gameIsOver:function(){
        for(var i=0; i<3; i++){
            console.log("this._players[i].getCurStep", this._players[i].getCurStep());
            if(this._players[i].getCurStep() >= STEP_MAX){
                GAME_INFO.WINNER = this._players[i].getType();
                return true;
            }
        }
        return false;
    }
});

var Player = cc.Node.extend({
    _type:null,
    _idx:null,
    _curStep:0,
    _curNum:0,
    init:function(type, idx){
        this._type = type;
        this._idx = idx;
        this._curStep = 0;
        this._curNum = 0;

        var _draw = cc.DrawNode.create();
        _draw.drawDot(cc.p(0,0), 3, arrColor[idx]);
        _draw.draw();
        this.addChild(_draw);
    },
    getType:function(){
        return this._type;
    },
    setCurStep:function(idx){
        this._curStep = idx;
    },
    getCurStep:function(){
        return this._curStep;
    },
    addStep:function(){
        this._curStep ++;
    },
    getCurNum:function(){
        return getRand3();
    }
});

