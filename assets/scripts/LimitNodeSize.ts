import { EventBus } from "./EventBus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LimitNodeSize extends cc.Component {

    @property(cc.Node)
    targetNode: cc.Node = null;
    @property
    maxWidth: number = 300;
    @property
    maxHeight: number = 300;
    @property
    marginX: number = 50;
    protected onLoad(): void {
        cc.view.on('canvas-resize', this.onResize, this);
    }
    protected start(): void {
        this.adjustSize();
    }
    protected adjustSize(): void {
        if (!this.targetNode) return;
        const node = this.targetNode;
        const aspectRatio = node.height / node.width;
        if (cc.winSize.width < node.width) {
            node.width = cc.winSize.width - this.marginX * 2;
            node.height = node.width * aspectRatio;
        } else {
            node.width = this.maxWidth;
            node.height = this.maxWidth * aspectRatio;
        }
        EventBus.emit('board-change-size')
        console.log(node.width)
    }
    protected onResize(): void {
        this.adjustSize();
    }
    protected onDestroy(): void {
        cc.view.off('canvas-resize', this.onResize, this);
    }
}
