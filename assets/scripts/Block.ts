// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

const blockColor: string[] = [
    'block_blue',
    'block_green',
    'block_purpure',
    'block_red',
    'block_yellow'
]

@ccclass
export default class Block extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property(cc.SpriteAtlas)
    atlas: cc.SpriteAtlas = null;
    public colorId: number = 0;
    start() {
        const spriteFrame = this.atlas.getSpriteFrame(blockColor[this.colorId]);
        const sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    }

    // update (dt) {}
}
