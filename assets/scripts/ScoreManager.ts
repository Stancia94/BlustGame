import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ScoreManager extends cc.Component {
    // onLoad () {}
    private _accumulateStep: number = 0;
    private _scoreAmount: number = 0;
    public currentScore: number = 0;
    @property(cc.Node)
    movesNode: cc.Node = null;
    @property(cc.Node)
    scoreNode: cc.Node = null;
    protected onLoad(): void {
        EventBus.on('blocks-destroy', this.onBlockDestroy, this);
        EventBus.on('step', this.onStep, this);
    }
    start() {
        this._accumulateStep = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
        this.movesNode.getComponent(cc.Label).string = String(this._accumulateStep);

        this._scoreAmount = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
        this.scoreNode.getComponent(cc.Label).string = `${this.currentScore}/${this._scoreAmount}`;
    }
    onBlockDestroy(destroyLenght: number) {
        this.currentScore += destroyLenght * 10;
        this.scoreNode.getComponent(cc.Label).string = `${this.currentScore}/${this._scoreAmount}`;
    }
    onStep() {
        this._accumulateStep -= 1;
    }
    // update (dt) {}
}
