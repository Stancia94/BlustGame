import Block from "./Block";
import { EventBus } from "./EventBus";
import { GridConfig } from "./GridConfig";

const { Vec3 } = cc;
const { ccclass, property } = cc._decorator;
type BlockClickEvent = {
    row: number;
    col: number;
    colorId: number;
}
@ccclass
export default class Board extends cc.Component {
    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;
    private width: number = 9;
    private height: number = 9;
    private board: Block[][] = null;
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
                    const colorNumber = Math.floor(Math.random() * 5);
                    const block = cc.instantiate(this.blockPrefab);
                    const blockComp = block.getComponent(Block);
                    blockComp.init(y, x, colorNumber);
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
        const sameBlocks: Block[] = [];
        const visited = new Set<string>();
        this.findMatch(data.row, data.col, data.colorId, sameBlocks, visited);
        if (sameBlocks.length >= 2) {
            EventBus.emit('step');
            this.destroyGroup(sameBlocks);
        }
    }
    findMatch(row: number, col: number, colorId: number, sameBlocks: Block[], visited: Set<string>) {
        if (row < 0 || col < 0 || row >= this.board.length || col >= this.board[0].length) return;
        const block = this.board[row][col];
        if (!block) return;
        const key = row + '_' + col;
        if (visited.has(key)) return;
        visited.add(key);
        if (block.getColorId() !== colorId) return;
        sameBlocks.push(block);
        this.findMatch(row + 1, col, colorId, sameBlocks, visited);
        this.findMatch(row - 1, col, colorId, sameBlocks, visited);
        this.findMatch(row, col + 1, colorId, sameBlocks, visited);
        this.findMatch(row, col - 1, colorId, sameBlocks, visited);
    }
    protected onDestroy(): void {
        EventBus.off('block-clicked', this.onBlockClicked, this);
    }
    // update (dt) {}
}
