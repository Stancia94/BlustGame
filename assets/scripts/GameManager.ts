import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    @property(cc.Prefab)
    victoryScreenPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    lossScreeenPrefab: cc.Prefab = null;
    protected onLoad(): void {
        EventBus.on('gameEnd', this.onGameEnd, this);
    }
    start() { }
    private onGameEnd(isWin: boolean): void {
        cc.director.pause();
        const prefabScreen = isWin ? this.victoryScreenPrefab : this.lossScreeenPrefab;
        const screen = cc.instantiate(prefabScreen);
        screen.parent = cc.find("Canvas");
        screen.setPosition(0, 0, 0);
    }
    protected onDestroy(): void {
        EventBus.off('gameEnd', this.onGameEnd, this);
    }
    // update (dt) {}
}
