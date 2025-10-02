const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultScreen extends cc.Component {
    onRestart() {
        cc.director.resume();
        cc.director.loadScene("Game");
    }
    onMainMenu() {
        cc.director.resume();
        cc.director.loadScene("Start");
    }
}
