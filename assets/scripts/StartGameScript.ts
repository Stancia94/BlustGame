const { ccclass } = cc._decorator;

@ccclass
export default class StartGame extends cc.Component {

    onStartGame() {
        cc.director.loadScene("Game");
    }
}
