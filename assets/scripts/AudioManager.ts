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
        if (!this.isBGMPlaying()) {
            this.playBGM(true);
        }
    }

    private isBGMPlaying(): boolean {
        if (this.backgroundMusicId !== null) {
            const state = cc.audioEngine.getState(this.backgroundMusicId);
            return state === cc.audioEngine.AudioState.PLAYING;
        }
        return false;
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