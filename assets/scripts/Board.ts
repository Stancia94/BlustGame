import { BoardType, BlockClickEvent } from "./Types";
import { getRandomBlockKey } from "./Utils";
import { EventBus } from "./EventBus";
import { GridConfig } from "./GridConfig";
import BlockFactory from "./BlockFactory";
import BoardSizer from "./BoardSizer";
import { Handler } from "./HandlerInterface";
import { BoardCommand } from "./Commands";
import { BlockClickHandler } from "./BlockClickHandler";
import ExtraBlockClickHandler from "./ExtraBlockClickHandler";

const { Vec3 } = cc;
const { ccclass, property } = cc._decorator;
@ccclass
export default class Board extends cc.Component {
    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    extraBlockPrefab: cc.Prefab = null;
    @property
    private width: number = 9;
    @property
    private height: number = 9;
    public board: BoardType[][];
    public blockFactory: BlockFactory;
    private extraBlockHandler: Handler;
    private blockHandler: Handler;
    public blockSizer: BoardSizer;
    protected onLoad(): void {
        EventBus.on('block-clicked', this.onBlockClicked, this);
        EventBus.on('board-change-size', this.onResize, this);
    }

    protected start(): void {
        this.board = new Array(this.height).fill(0).map(() => new Array(this.width).fill(null));
        this.blockFactory = new BlockFactory(this.blockPrefab, this.extraBlockPrefab, this.node);

        this.extraBlockHandler = new ExtraBlockClickHandler(this.board);
        this.blockHandler = new BlockClickHandler(this.board);
        this.blockHandler.setNext(this.extraBlockHandler);

        this.blockSizer = new BoardSizer(this.node, this.width, new cc.Vec2(GridConfig.width, GridConfig.height))
        this.scheduleOnce(() => {
            this.blockSizer.setBlockSize(this.blockSizer.calculateBlockSize());
            this.fill();
        }, 0);
    }
    public fill(): void {
        const blockSize = this.blockSizer.getBlockSize()
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.board[y][x] === null) {
                    const block = this.blockFactory.createBlock(y, x, getRandomBlockKey(), blockSize);
                    this.setBlock(y, x, block);
                    const startPos = new Vec3(
                        -(this.node.width / 2 - GridConfig.marginX - blockSize.x / 2) + blockSize.x * x,
                        GridConfig.behindScreen
                    )
                    const targetPos = this.blockSizer.getBlockPosition(y, x, blockSize)
                    block.fallAnimation(startPos, targetPos);
                }
            }
        }
    }
    public fall(): void {
        const blockSize = this.blockSizer.getBlockSize()
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
                    const targetPos = this.blockSizer.getBlockPosition(newY, x, blockSize)
                    block.fallTo(targetPos, 0.4)
                }
            }
        }
    }
    private onBlockClicked(data: BlockClickEvent): void {
        const commands: BoardCommand[] = [];
        this.blockHandler.handle(data, commands);
        commands.forEach((comand) => comand.execute(this))
        this.fall();
        this.fill();
    }
    public deleteBlock(row: number, col: number): void {
        const block = this.board[row][col];
        block.destroyYourself();
        this.board[row][col] = null;
    }
    public setBlock(row: number, col: number, block: BoardType): void {
        block.setRowCol(row, col);
        this.board[row][col] = block;
    }
    private onResize(): void {
        if (!this.board) return;
        this.blockSizer.setBlockSize(this.blockSizer.calculateBlockSize());
        const blockSize = this.blockSizer.getBlockSize()
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const block = this.board[y][x];
                block?.setSize(blockSize);
                const targetPos = new Vec3(
                    -(this.node.width / 2 - GridConfig.marginX - blockSize.x / 2) + blockSize.x * x,
                    (this.node.height / 2 - GridConfig.marginX - blockSize.y / 2) - blockSize.y * y,
                    0);
                block?.node.setPosition(targetPos);
            }
        }
    }
    protected onDestroy(): void {
        EventBus.off('board-change-size', this.onResize, this);
        EventBus.off('block-clicked', this.onBlockClicked, this);
    }
}
