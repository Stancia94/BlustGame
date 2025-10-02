import Block from "./Block";
import { BlockKey, BoardType, BlockClickEvent } from "./Types";
import { getRandomBlockKey, getRandomExtraBlockKey } from "./Utils";
import { EventBus } from "./EventBus";
import ExtraBlock from "./ExrtaBlock";
import { GridConfig } from "./GridConfig";

const { Vec3 } = cc;
const { ccclass, property } = cc._decorator;

@ccclass
export default class Board extends cc.Component {
    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    extraBlockPrefab: cc.Prefab = null;
    private width: number = 9;
    private height: number = 9;
    private board: BoardType[][] = null;
    onLoad() {
        EventBus.on('block-clicked', this.onBlockClicked, this);
    }
    start() {
        this.board = new Array(this.height).fill(0).map(() => new Array(this.width).fill(null));
        this.fill();
    }
    fill() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.board[y][x] === null) {
                    const blockType = getRandomBlockKey();
                    const block = cc.instantiate(this.blockPrefab);
                    const blockComp = block.getComponent(Block);
                    blockComp.init(y, x, blockType);
                    this.board[y][x] = blockComp;

                    this.node.addChild(block);
                    const startPos = new Vec3(
                        GridConfig.startXPosition + GridConfig.width * x,
                        GridConfig.behindScreen
                    )
                    block.setPosition(startPos);
                    const targetPos = new Vec3(
                        GridConfig.startXPosition + GridConfig.width * x,
                        GridConfig.startYPosition - GridConfig.height * y,
                        0);
                    block.getComponent(Block).fallTo(targetPos, 0.5);
                }
            }
        }
    }
    fall() {
        for (let x = 0; x < this.width; x++) {
            for (let y = this.height - 2; y >= 0; y--) {
                const block = this.board[y][x];
                if (!block) continue;
                let newY = y;
                while (newY + 1 < this.height && this.board[newY + 1][x] === null) {
                    newY++;
                }
                if (newY !== y) {
                    this.board[newY][x] = block;
                    this.board[y][x] = null;
                    block.setRowCol(newY, x)
                    const targetPos = new Vec3(
                        GridConfig.startXPosition + GridConfig.width * x,
                        GridConfig.startYPosition - GridConfig.height * newY,
                        0
                    );
                    block.fallTo(targetPos, 0.4)
                }
            }
        }
    }
    destroyGroup(blocks: Block[]) {
        EventBus.emit('blocks-destroy', blocks.length);
        blocks.forEach((block) => {
            block.destroyYourself();
            this.board[block.getRow()][block.getCol()] = null;
        });
        this.fall();
        this.fill();
    }
    onBlockClicked(data: BlockClickEvent) {
        let sameBlocks: Block[] = [];
        this.findMatch(data.row, data.col, data.blockType, sameBlocks);
        if (sameBlocks.length >= 2) {
            EventBus.emit('step');
            if (sameBlocks.length >= 5) {
                const previosBlock = this.board[data.row][data.col];
                previosBlock.destroyYourself();
                this.board[data.row][data.col] = null;
                const extraBlock = cc.instantiate(this.extraBlockPrefab);
                const extraBlockComp = extraBlock.getComponent(ExtraBlock);
                extraBlockComp.init(data.row, data.col, getRandomExtraBlockKey());
                this.board[data.row][data.col] = extraBlockComp;
                this.node.addChild(extraBlock);
                const targetPos = new Vec3(
                    GridConfig.startXPosition + GridConfig.width * data.col,
                    GridConfig.startYPosition - GridConfig.height * data.row,
                    0);
                extraBlock.setPosition(targetPos)
                sameBlocks = sameBlocks.filter((block) => (!(block.getRow() === data.row && block.getCol() === data.col)))
            }
            this.destroyGroup(sameBlocks);
        }
    }

    findMatch(row: number, col: number, blockType: BlockKey, sameBlocks: BoardType[]) {
        const visited = new Set<string>();
        const dfs = (row: number, col: number) => {
            if (row < 0 || col < 0 || row >= this.board.length || col >= this.board[0].length) return;
            const block = this.board[row][col];
            if (!block) return;
            if (block instanceof ExtraBlock) return;
            const key = row + '_' + col;
            if (visited.has(key)) return;
            visited.add(key);
            if (block.getType() !== blockType) return;
            sameBlocks.push(block);
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };
        dfs(row, col);
    }
    protected onDestroy(): void {
        EventBus.off('block-clicked', this.onBlockClicked, this);
    }
    // update (dt) {}
}
