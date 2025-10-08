
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
        _this.minTargetScore = 100;
        _this.maxTargetScore = 1000;
        return _this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNEQztRQXJERyxlQUFlO1FBQ1AsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3QixvQkFBYyxHQUFXLElBQUksQ0FBQzs7SUFzQ2xDLENBQUM7SUFyQ2EsNkJBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELG1CQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNPLG1DQUFZLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxHQUFXO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDTyxxQ0FBYyxHQUF0QixVQUF1QixhQUFxQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyw2QkFBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyw0QkFBSyxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUM5QixtQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBQ08saUNBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsWUFBWSxTQUFJLElBQUksQ0FBQyxXQUFhLENBQUM7SUFDOUYsQ0FBQztJQUNTLGdDQUFTLEdBQW5CO1FBQ0ksbUJBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUUxQjtRQURDLFFBQVE7a0RBQ2E7SUFFdEI7UUFEQyxRQUFRO2tEQUNhO0lBRXRCO1FBREMsUUFBUTt3REFDb0I7SUFFN0I7UUFEQyxRQUFRO3dEQUNxQjtJQWhCYixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0RoQztJQUFELG1CQUFDO0NBdERELEFBc0RDLENBdER5QyxFQUFFLENBQUMsU0FBUyxHQXNEckQ7a0JBdERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgcHJpdmF0ZSBzdGVwQW1vdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZUFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1vdmVzTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblN0ZXBzOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U3RlcHM6IG51bWJlciA9IDQwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5UYXJnZXRTY29yZTogbnVtYmVyID0gMTAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhUYXJnZXRTY29yZTogbnVtYmVyID0gMTAwMDtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ3N0ZXAnLCB0aGlzLm9uU3RlcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0ZXBBbW91bnQgPSB0aGlzLnJhbmRvbU51bWJlcih0aGlzLm1pblN0ZXBzLCB0aGlzLm1heFN0ZXBzKTtcclxuICAgICAgICB0aGlzLnNjb3JlQW1vdW50ID0gdGhpcy5yYW5kb21OdW1iZXIodGhpcy5taW5UYXJnZXRTY29yZSwgdGhpcy5tYXhUYXJnZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJsb2NrRGVzdHJveShkZXN0cm95TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSArPSBkZXN0cm95TGVuZ3RoICogMTA7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblN0ZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVwQW1vdW50IC09IDE7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1dpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NvcmUgPiB0aGlzLnNjb3JlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ2dhbWVFbmQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RlcEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBFdmVudEJ1cy5lbWl0KCdnYW1lRW5kJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVzTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0aGlzLnN0ZXBBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50U2NvcmV9LyR7dGhpcy5zY29yZUFtb3VudH1gO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdzdGVwJywgdGhpcy5vblN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==