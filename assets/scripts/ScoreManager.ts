// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScoreManager extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private _movesAmount: number = 0;
    private _scoreAmount: number = 0;
    public currentScore: number = 0;
    @property(cc.Node)
    movesNode: cc.Node = null;
    @property(cc.Node)
    scoreNode: cc.Node = null;
    protected onLoad(): void {
        EventBus.on('blocks-destroy', this.onBlockDestroy, this);
    }
    onBlockDestroy(destroyLenght: number) {
        this.currentScore += destroyLenght * 10;
        this.scoreNode.getComponent(cc.Label).string = `${this.currentScore}/${this._scoreAmount}`;
    }
    start() {
        this._movesAmount = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
        this.movesNode.getComponent(cc.Label).string = String(this._movesAmount);

        this._scoreAmount = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
        this.scoreNode.getComponent(cc.Label).string = `${this.currentScore}/${this._scoreAmount}`;
    }

    // update (dt) {}
}
