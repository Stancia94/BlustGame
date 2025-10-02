import { BoardType, BlockClickEvent, isBlockKey, isExtraBlockKey } from "./Types";
import { getRandomBlockKey, getRandomExtraBlockKey } from "./Utils";
import { EventBus } from "./EventBus";
import { GridConfig } from "./GridConfig";
import MatchFinder from "./MatchFinder";
import BlockFactory from "./BlockFactory";
import ExtraBlockHandler from "./ExtraBlockHandler";

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
    private board: BoardType[][];
    private matchFinder: MatchFinder;
    private blockFactory: BlockFactory;
    private extraBlockHandler: ExtraBlockHandler;

    protected onLoad(): void {
        EventBus.on('block-clicked', this.onBlockClicked, this);
    }

    protected start(): void {
        this.board = new Array(this.height).fill(0).map(() => new Array(this.width).fill(null));
        this.matchFinder = new MatchFinder(this.board);
        this.blockFactory = new BlockFactory(this.blockPrefab, this.extraBlockPrefab, this.node);
        this.extraBlockHandler = new ExtraBlockHandler(this.board);
        this.fill();
    }
    private fill(): void {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.board[y][x] === null) {
                    const block = this.blockFactory.createBlock(y, x, getRandomBlockKey());
                    this.setBlock(y, x, block);
                    const startPos = new Vec3(
                        GridConfig.startXPosition + GridConfig.width * x,
                        GridConfig.behindScreen
                    )
                    const targetPos = new Vec3(
                        GridConfig.startXPosition + GridConfig.width * x,
                        GridConfig.startYPosition - GridConfig.height * y,
                        0);
                    block.fallAnimation(startPos, targetPos);
                }
            }
        }
    }
    private fall(): void {
        for (let x = 0; x < this.width; x++) {
            for (let y = this.height - 2; y >= 0; y--) {
                const block = this.board[y][x];
                if (!block) continue;
                let newY = y;
                while (newY + 1 < this.height && this.board[newY + 1][x] === null) {
                    newY++;
                }
                if (newY !== y) {
                    this.board[y][x] = null;
                    this.setBlock(newY, x, block);
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
    private destroyGroup(blocks: BoardType[]): void {
        EventBus.emit('blocks-destroy', blocks.length);
        blocks.forEach((block) => {
            block.destroyYourself();
            this.board[block.getRow()][block.getCol()] = null;
        });
        this.fall();
        this.fill();
    }
    private onBlockClicked(data: BlockClickEvent): void {
        if (isBlockKey(data.blockType)) {
            let sameBlocks: BoardType[] = [];
            sameBlocks = this.matchFinder.find(data.row, data.col, data.blockType);
            if (sameBlocks.length >= 2) {
                EventBus.emit('step');
                if (sameBlocks.length >= 5) {
                    this.upgradeToExtraBlock(data.row, data.col, sameBlocks);
                }
                this.destroyGroup(sameBlocks);
            }
        } else if (isExtraBlockKey(data.blockType)) {
            const blockForDestroy = this.extraBlockHandler.handle(data);
            this.destroyGroup(blockForDestroy);
        }
    }
    private upgradeToExtraBlock(row: number, col: number, blocksForDestroy: BoardType[]) {
        this.deleteBlock(row, col);
        const extraBlock = this.blockFactory.createExtraBlock(row, col, getRandomExtraBlockKey());
        this.setBlock(row, col, extraBlock);
        extraBlock.node.setPosition(new Vec3(
            GridConfig.startXPosition + GridConfig.width * col,
            GridConfig.startYPosition - GridConfig.height * row,
            0))
        const index = blocksForDestroy.findIndex(
            (block) => block.getRow() === row && block.getCol() === col
        );
        if (index >= 0) blocksForDestroy.splice(index, 1);
    }
    private deleteBlock(row: number, col: number): void {
        const block = this.board[row][col];
        block.destroyYourself();
        this.board[row][col] = null;
    }
    private setBlock(row: number, col: number, block: BoardType): void {
        block.setRowCol(row, col);
        this.board[row][col] = block;
    }
    protected onDestroy(): void {
        EventBus.off('block-clicked', this.onBlockClicked, this);
    }
}
