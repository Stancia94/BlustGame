import Block from "./Block";
import { EventBus } from "./EventBus";

const { Vec3 } = cc;
const { ccclass, property } = cc._decorator;
@ccclass
export default class GameManager extends cc.Component {
    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;
    private _width: number = 9;
    private _height: number = 9;
    private _board: Block[][] = null;
    onLoad() {
        EventBus.on('block-clicked', this.onBlockClicked, this);
    }
    start() {
        this._board = new Array(this._height).fill(0).map(() => new Array(this._width).fill(null));
        this.fillingBoard();
    }
    fill() {
        for (let x = 0; x < this._width; x++) {
            for (let y = 0; y < this._height; y++) {
                if (this._board[y][x] === null) {
                    const colorNumber = Math.floor(Math.random() * 5);
                    const block = cc.instantiate(this.blockPrefab);
                    const blockComp = block.getComponent(Block);
                    this._board[y][x] = blockComp;

                    blockComp.row = y;
                    blockComp.col = x;
                    blockComp.colorId = colorNumber;
                    this._board[y][x] = blockComp;
                    this.node.addChild(block);
                    const startPos = new Vec3(
                        -400 + 100 * x,
                        600
                    )
                    block.setPosition(startPos);
                    const targetPos = new Vec3(
                        -400 + 100 * x,
                        440 - 112 * y,
                        0);
                    cc.tween(block)
                        .to(0.2, { position: targetPos }, { easing: "quadIn" })
                        .start();
                }
            }
        }
    }
    fall() {
        for (let x = 0; x < this._width; x++) {
            for (let y = this._height - 2; y >= 0; y--) {
                const block = this._board[y][x];
                if (!block) continue;
                let newY = y;
                while (newY + 1 < this._height && this._board[newY + 1][x] === null) {
                    newY++;
                }
                if (newY !== y) {
                    this._board[newY][x] = block;
                    this._board[y][x] = null;
                    block.row = newY;

                    const targetPos = new Vec3(
                        -400 + 100 * x,
                        440 - 112 * newY,
                        0
                    );
                    cc.tween(block.node)
                        .to(0.2, { position: targetPos }, { easing: "quadIn" })
                        .start();
                }
            }
        }

    }

    onBlockClicked(data: { row: number, col: number, colorId: number }) {
        const sameBlocks: Block[] = [];
        const visited = new Set<string>();
        this.findMatch(data.row, data.col, data.colorId, sameBlocks, visited);
        if (sameBlocks.length >= 2) {
            EventBus.emit('blocks-destroy', sameBlocks.length);
            sameBlocks.forEach((block) => {
                const anim = block.node.getChildByName('block_sprite').getComponent(cc.Animation);
                const particle = block.node.getChildByName('smoke').getComponent(cc.ParticleSystem);
                anim.on('finished', () => {
                    this._board[block.row][block.col] = null;
                    this.fall();
                    this.fill();
                    block.node.destroy();
                }, this)
                anim.play();
                particle.resetSystem();
            });
        }
    }
    findMatch(row: number, col: number, colorId: number, sameBlocks: Block[], visited: Set<string>) {
        if (row < 0 || col < 0 || row >= this._board.length || col >= this._board[0].length) return;
        const block = this._board[row][col];
        if (!block) return;
        const key = row + '_' + col;
        if (visited.has(key)) return;
        visited.add(key);
        if (block.colorId !== colorId) return;
        sameBlocks.push(block);
        this.findMatch(row + 1, col, colorId, sameBlocks, visited);
        this.findMatch(row - 1, col, colorId, sameBlocks, visited);
        this.findMatch(row, col + 1, colorId, sameBlocks, visited);
        this.findMatch(row, col - 1, colorId, sameBlocks, visited);
    }
    fillingBoard() {
        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const colorNumber = Math.floor(Math.random() * 5);
                const block = cc.instantiate(this.blockPrefab);
                const blockComp = block.getComponent(Block);
                blockComp.row = y;
                blockComp.col = x;
                blockComp.colorId = colorNumber;
                this._board[y][x] = blockComp;
                this.node.addChild(block);
                block.setPosition(new Vec3(
                    -400 + 100 * x,
                    440 - 112 * y,
                    0));
            }
        }
    }
    // update (dt) {}
}
