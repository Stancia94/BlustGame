"use strict";
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