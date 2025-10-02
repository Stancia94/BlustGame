const { ccclass } = cc._decorator;
@ccclass
export default class ResultScreen extends cc.Component {
    public onRestart(): void {
        cc.director.resume();
        cc.director.loadScene("Game");
    }
    public onMainMenu(): void {
        cc.director.resume();
        cc.director.loadScene("Start");
    }
}
