
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82049Ow64tIAJ8v0rLhmptr', 'ScoreManager');
// scripts/ScoreManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreManager = /** @class */ (function (_super) {
    __extends(ScoreManager, _super);
    function ScoreManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.stepAmount = 0;
        _this.scoreAmount = 0;
        _this.currentScore = 0;
        _this.movesNode = null;
        _this.scoreNode = null;
        _this.minSteps = 10;
        _this.maxSteps = 40;
        _this.minTargetScore = 300;
        _this.maxTargetScore = 100;
        return _this;
        // update (dt) {}
    }
    ScoreManager.prototype.onLoad = function () {
        EventBus_1.EventBus.on('blocks-destroy', this.onBlockDestroy, this);
        EventBus_1.EventBus.on('step', this.onStep, this);
    };
    ScoreManager.prototype.start = function () {
        this.stepAmount = this.randomNumber(this.minSteps, this.maxSteps);
        this.scoreAmount = this.randomNumber(this.minTargetScore, this.maxTargetScore);
        this.updateView();
    };
    ScoreManager.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ScoreManager.prototype.onBlockDestroy = function (destroyLength) {
        this.currentScore += destroyLength * 10;
        this.isWin();
        this.updateView();
    };
    ScoreManager.prototype.onStep = function () {
        this.stepAmount -= 1;
        this.isWin();
        this.updateView();
    };
    ScoreManager.prototype.isWin = function () {
        if (this.currentScore > this.scoreAmount) {
            EventBus_1.EventBus.emit('gameEnd', true);
        }
        else if (this.stepAmount === 0) {
            EventBus_1.EventBus.emit('gameEnd', false);
        }
    };
    ScoreManager.prototype.updateView = function () {
        this.movesNode.getComponent(cc.Label).string = String(this.stepAmount);
        this.scoreNode.getComponent(cc.Label).string = this.currentScore + "/" + this.scoreAmount;
    };
    ScoreManager.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('blocks-destroy', this.onBlockDestroy, this);
        EventBus_1.EventBus.off('step', this.onStep, this);
    };
    __decorate([
        property(cc.Node)
    ], ScoreManager.prototype, "movesNode", void 0);
    __decorate([
        property(cc.Node)
    ], ScoreManager.prototype, "scoreNode", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "minSteps", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "maxSteps", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "minTargetScore", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "maxTargetScore", void 0);
    ScoreManager = __decorate([
        ccclass
    ], ScoreManager);
    return ScoreManager;
}(cc.Component));
exports.default = ScoreManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQXRERyxlQUFlO1FBQ1AsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3QixvQkFBYyxHQUFXLEdBQUcsQ0FBQzs7UUFzQzdCLGlCQUFpQjtJQUNyQixDQUFDO0lBdENhLDZCQUFNLEdBQWhCO1FBQ0ksbUJBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyxtQ0FBWSxHQUFwQixVQUFxQixHQUFXLEVBQUUsR0FBVztRQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBQ08scUNBQWMsR0FBdEIsVUFBdUIsYUFBcUI7UUFDeEMsSUFBSSxDQUFDLFlBQVksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ08sNkJBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ08sNEJBQUssR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLG1CQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDOUIsbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUNPLGlDQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFlBQVksU0FBSSxJQUFJLENBQUMsV0FBYSxDQUFDO0lBQzlGLENBQUM7SUFDUyxnQ0FBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsbUJBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUFFMUI7UUFEQyxRQUFRO2tEQUNhO0lBRXRCO1FBREMsUUFBUTtrREFDYTtJQUV0QjtRQURDLFFBQVE7d0RBQ29CO0lBRTdCO1FBREMsUUFBUTt3REFDb0I7SUFoQlosWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVEaEM7SUFBRCxtQkFBQztDQXZERCxBQXVEQyxDQXZEeUMsRUFBRSxDQUFDLFNBQVMsR0F1RHJEO2tCQXZEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHByaXZhdGUgc3RlcEFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmVBbW91bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudFNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb3Zlc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5TdGVwczogbnVtYmVyID0gMTA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFN0ZXBzOiBudW1iZXIgPSA0MDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWluVGFyZ2V0U2NvcmU6IG51bWJlciA9IDMwMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4VGFyZ2V0U2NvcmU6IG51bWJlciA9IDEwMDtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ3N0ZXAnLCB0aGlzLm9uU3RlcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0ZXBBbW91bnQgPSB0aGlzLnJhbmRvbU51bWJlcih0aGlzLm1pblN0ZXBzLCB0aGlzLm1heFN0ZXBzKTtcclxuICAgICAgICB0aGlzLnNjb3JlQW1vdW50ID0gdGhpcy5yYW5kb21OdW1iZXIodGhpcy5taW5UYXJnZXRTY29yZSwgdGhpcy5tYXhUYXJnZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJsb2NrRGVzdHJveShkZXN0cm95TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSArPSBkZXN0cm95TGVuZ3RoICogMTA7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblN0ZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVwQW1vdW50IC09IDE7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1dpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NvcmUgPiB0aGlzLnNjb3JlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ2dhbWVFbmQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RlcEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBFdmVudEJ1cy5lbWl0KCdnYW1lRW5kJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVzTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0aGlzLnN0ZXBBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50U2NvcmV9LyR7dGhpcy5zY29yZUFtb3VudH1gO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdzdGVwJywgdGhpcy5vblN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=