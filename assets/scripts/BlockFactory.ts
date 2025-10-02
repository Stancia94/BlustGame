import Block from "./Block";
import ExtraBlock from "./ExrtaBlock";
import { BlockKey, ExtraBlockKey } from "./Types";

export default class BlockFactory {
    constructor(
        private blockPrefab: cc.Prefab,
        private extraBlockPrefab: cc.Prefab,
        private parent: cc.Node) { }

    public createBlock(row: number, col: number, blockType: BlockKey): Block {
        const block = cc.instantiate(this.blockPrefab);
        const blockComp = block.getComponent(Block);
        blockComp.init(row, col, blockType);
        this.parent.addChild(block);
        return blockComp;
    }

    public createExtraBlock(row: number, col: number, blockType: ExtraBlockKey): ExtraBlock {
        const block = cc.instantiate(this.extraBlockPrefab);
        const blockComp = block.getComponent(ExtraBlock);
        blockComp.init(row, col, blockType);
        this.parent.addChild(block);
        return blockComp;
    }

}
