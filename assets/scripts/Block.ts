import { blockColor, BlockKey } from "./Types";
import { EventBus } from "./EventBus";
import { GridConfig } from "./GridConfig";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Block<T extends string = BlockKey> extends cc.Component {
    @property(cc.SpriteAtlas)
    atlas: cc.SpriteAtlas = null;
    @property(cc.Node)
    blockSpriteNode: cc.Node = null;
    @property(cc.Node)
    smokeNode: cc.Node = null;
    protected row: number = 0;
    protected col: number = 0;
    protected blockType: T = 'blue' as T;
    protected width: number = GridConfig.width;
    protected height: number = GridConfig.height;
    protected onLoad(): void {
        this.blockSpriteNode.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);

    }
    start() { }
    public getRow(): number {
        return this.row;
    }
    public getCol(): number {
        return this.col;
    }
    public getType(): T {
        return this.blockType;
    }
    public setRowCol(row: number, col: number) {
        this.row = row;
        this.col = col;
    }
    public init(row: number, col: number, blockType: T, size?: cc.Vec2): void {
        this.row = row;
        this.col = col;
        this.blockType = blockType;
        this.setSize(size);
        this.updateVisual();
    }
    public setSize(size: cc.Vec2) {
        const scaleX = size.x / GridConfig.width;
        const scaleY = size.y / GridConfig.height;
        this.node.setScale(scaleX, scaleY);
    }
    protected updateVisual(): void {
        const key = this.blockType as BlockKey
        const spriteFrame = this.atlas.getSpriteFrame(blockColor[key]);
        const sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    }
    protected updateScale(): void {

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
    public fallAnimation(startPos: cc.Vec3, targetPos: cc.Vec3) {
        this.node.setPosition(startPos);
        this.fallTo(targetPos, 0.5);
    }
    private onTouch(): void {
        EventBus.emit('block-clicked', { blockType: this.blockType, row: this.row, col: this.col });
    }
    protected onDestroy(): void {
        this.blockSpriteNode.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    }
}
