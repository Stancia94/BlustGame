import { GridConfig } from "./GridConfig";

export default class BoardSizer {
    private blockSize: cc.Vec2

    constructor(
        private container: cc.Node,
        private columns: number,
        private originalBlockSize: cc.Vec2,
    ) { }
    public calculateBlockSize(): cc.Vec2 {
        const blockWidth = (this.container.width - GridConfig.marginX * 2) / this.columns;
        const blockHeight = blockWidth * (this.originalBlockSize.y / this.originalBlockSize.x)
        return new cc.Vec2(blockWidth, blockHeight)
    }
    public getBlockPosition(row: number, col: number, blockSize: cc.Vec2): cc.Vec3 {
        return new cc.Vec3(
            -(this.container.width / 2 - GridConfig.marginX - blockSize.x / 2) + blockSize.x * col,
            (this.container.height / 2 - GridConfig.marginX - blockSize.y / 2) - blockSize.y * row,
            0
        );
    }
    public setBlockSize(blockSize: cc.Vec2): void {
        this.blockSize = blockSize;
    }
    public getBlockSize(): cc.Vec2 {
        return this.blockSize;
    }
}
