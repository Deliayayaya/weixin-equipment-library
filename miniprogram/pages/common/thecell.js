// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        head:cc.Sprite,
        score:cc.Label,
    },

    onLoad (head,score) {
        console.log("====="+head+"==="+score)
        cc.loader.load({ url:head,type:"png"},function(err,texture){
            if (err) {
                console.error(err);
            }
            console.log("*****"+texture)
            this.head = new cc.SpriteFrame(texture)
        })
        
        this.score = score
    },


    start () {

    },

    // update (dt) {},
});


