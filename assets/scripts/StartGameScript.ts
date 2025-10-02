const { ccclass } = cc._decorator;

@ccclass
export default class StartGame extends cc.Component {

    // Этот метод можно назначить в OnClick у кнопки
    onStartGame() {
        cc.director.loadScene("Game"); // имя твоей игровой сцены
    }
}
