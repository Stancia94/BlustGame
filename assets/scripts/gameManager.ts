// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:

import Block from "./Block";

//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
const { Vec3 } = cc;
const { ccclass, property } = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;
    private _width: number = 9;
    private _height: number = 9;
    private _board: number[][] = null;
    start() {
        this._board = new Array(9).fill(new Array(9).fill(0));
        this.fillingBoard();
    }
    fillingBoard() {
        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const colorNumber = Math.floor(Math.random() * 5);
                this._board[y][x] = colorNumber;
                const block = cc.instantiate(this.blockPrefab);
                const blockComp = block.getComponent(Block);
                blockComp.colorId = colorNumber;
                this.node.addChild(block);
                block.setPosition(new Vec3(
                    -400 + 100 * x,
                    440 - 112 * y,
                    0));
                console.log(block);
            }
        }
    }
    // update (dt) {}
}
