// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScoreManager extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private _movesAmount: Number = 0;
    private _scoreAmount: Number = 0;
    public currentScore: Number = 0;
    @property(cc.Node)
    movesNode: cc.Node = null;
    @property(cc.Node)
    scoreNode: cc.Node = null;
    start() {
        this._movesAmount = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
        this.movesNode.getComponent(cc.Label).string = String(this._movesAmount);

        this._scoreAmount = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
        this.scoreNode.getComponent(cc.Label).string = `${this.currentScore}/${this._scoreAmount}`;
    }

    // update (dt) {}
}
