export default class BoardSizer {
    private blockSize: cc.Vec2
    constructor(
        private container: cc.Node,
        private columns: number,
        private originalBlockSize: cc.Vec2,
    ) { }
    public calculateBlockSize(): cc.Vec2 {
        const blockWidth = (this.container.width - 80) / this.columns;
        const blockHeight = blockWidth * (this.originalBlockSize.y / this.originalBlockSize.x)
        return new cc.Vec2(blockWidth, blockHeight)
    }
    public setBlockSize(blockSize: cc.Vec2): void {
        this.blockSize = blockSize;
    }
    public getBlockSize(): cc.Vec2 {
        return this.blockSize;
    }
}
