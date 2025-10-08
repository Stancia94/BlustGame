import Block from "./Block";
import { extraBlock, ExtraBlockKey } from "./Types";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ExtraBlock extends Block<ExtraBlockKey> {
    @property(cc.SpriteAtlas)
    atlas: cc.SpriteAtlas = null;
    @property(cc.Node)
    blockSpriteNode: cc.Node = null;
    @property(cc.Node)
    smokeNode: cc.Node = null;
    protected blockType: ExtraBlockKey = 'bomb';

    protected updateVisual(): void {
        const spriteFrame = this.atlas.getSpriteFrame(extraBlock[this.blockType]);
        const sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    }
}
