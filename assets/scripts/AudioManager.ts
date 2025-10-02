const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {
    private static instance: AudioManager = null;
    private backgroundMusicId: number = null;

    @property(cc.AudioClip)
    backgroundMusicClip: cc.AudioClip = null;

    protected onLoad(): void {
        if (AudioManager.instance) {
            this.node.destroy();
            return;
        }

        AudioManager.instance = this;
        cc.game.addPersistRootNode(this.node);
    }

    start() {
        this.playBGM(true);
    }

    private playBGM(loop: boolean = true) {
        if (this.backgroundMusicClip && !this.backgroundMusicId) {
            this.backgroundMusicId = cc.audioEngine.play(this.backgroundMusicClip, loop, 0.06);
        }
    }

    public stopBGM() {
        if (this.backgroundMusicId) {
            cc.audioEngine.stop(this.backgroundMusicId);
            this.backgroundMusicId = null;
        }
    }
}