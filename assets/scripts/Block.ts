import { blockColor } from "./BlockColorMatch";
import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;


@ccclass
export default class Block extends cc.Component {
    @property(cc.SpriteAtlas)
    atlas: cc.SpriteAtlas = null;
    public row: number = 0;
    public col: number = 0;
    public colorId: number = 0;
    protected onLoad(): void {
        this.node.getChildByName('block_sprite').on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    }
    start() {
        const spriteFrame = this.atlas.getSpriteFrame(blockColor[this.colorId]);
        const sprite = this.node.getChildByName('block_sprite').getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    }
    fallTo() {

    }
    onTouch() {
        EventBus.emit('block-clicked', { colorId: this.colorId, row: this.row, col: this.col });
    }
}
