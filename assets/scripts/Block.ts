import { blockColor } from "./BlockColorMatch";
import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;
const { Vec3 } = cc;
@ccclass
export default class Block extends cc.Component {
    @property(cc.SpriteAtlas)
    atlas: cc.SpriteAtlas = null;
    @property(cc.Node)
    blockSpriteNode: cc.Node = null;
    @property(cc.Node)
    smokeNode: cc.Node = null;

    private row: number = 0;
    private col: number = 0;
    private colorId: number = 0;

    protected onLoad(): void {
        this.blockSpriteNode.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    }
    start() {

    }
    public getRow(): number {
        return this.row;
    }
    public getCol(): number {
        return this.col;
    }
    public getColorId(): number {
        return this.colorId;
    }
    public setRowCol(row: number, col: number) {
        this.row = row;
        this.col = col;
    }
    public init(row: number, col: number, colorId: number): void {
        this.row = row;
        this.col = col;
        this.colorId = colorId;
        this.updateVisual();
    }
    private updateVisual(): void {
        const spriteFrame = this.atlas.getSpriteFrame(blockColor[this.colorId]);
        const sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    }

    public destroyYourself(): void {
        const anim = this.blockSpriteNode.getComponent(cc.Animation);
        const particle = this.smokeNode.getComponent(cc.ParticleSystem);
        anim.once('finished', () => {
            this.node.destroy();
        }, this)
        anim.play();
        particle.resetSystem();
    }
    public fallTo(targetPos: cc.Vec3, time: number): void {
        cc.tween(this.node)
            .to(time, { position: targetPos }, { easing: "sineOut" })
            .start();
    }
    private onTouch(): void {
        EventBus.emit('block-clicked', { colorId: this.colorId, row: this.row, col: this.col });
    }
    protected onDestroy(): void {
        this.blockSpriteNode.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    }
}
