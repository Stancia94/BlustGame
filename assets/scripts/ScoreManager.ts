import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ScoreManager extends cc.Component {
    // onLoad () {}
    private stepAmount: number = 0;
    private scoreAmount: number = 0;
    public currentScore: number = 0;
    @property(cc.Node)
    movesNode: cc.Node = null;
    @property(cc.Node)
    scoreNode: cc.Node = null;
    @property
    minSteps: number = 10;
    @property
    maxSteps: number = 40;
    @property
    minTargetScore: number = 100;
    @property
    maxTargetScore: number = 1000;
    protected onLoad(): void {
        EventBus.on('blocks-destroy', this.onBlockDestroy, this);
        EventBus.on('step', this.onStep, this);
    }
    start() {
        this.stepAmount = this.randomNumber(this.minSteps, this.maxSteps);
        this.scoreAmount = this.randomNumber(this.minTargetScore, this.maxTargetScore);
        this.updateView();
    }
    private randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    private onBlockDestroy(destroyLength: number): void {
        this.currentScore += destroyLength * 10;
        this.isWin();
        this.updateView();
    }
    private onStep(): void {
        this.stepAmount -= 1;
        this.isWin();
        this.updateView();
    }
    private isWin(): void {
        if (this.currentScore > this.scoreAmount) {
            EventBus.emit('gameEnd', true);
        } else if (this.stepAmount === 0) {
            EventBus.emit('gameEnd', false);
        }
    }
    private updateView(): void {
        this.movesNode.getComponent(cc.Label).string = String(this.stepAmount);
        this.scoreNode.getComponent(cc.Label).string = `${this.currentScore}/${this.scoreAmount}`;
    }
    protected onDestroy(): void {
        EventBus.off('blocks-destroy', this.onBlockDestroy, this);
        EventBus.off('step', this.onStep, this);
    }
}
