"use strict";
cc._RF.push(module, '4c83dPkm/1MII5N70drOG2A', 'GameManager');
// scripts/GameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.victoryScreenPrefab = null;
        _this.lossScreeenPrefab = null;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.onLoad = function () {
        EventBus_1.EventBus.on('gameEnd', this.onGameEnd, this);
    };
    GameManager.prototype.start = function () { };
    GameManager.prototype.onGameEnd = function (isWin) {
        cc.director.pause();
        var prefabScreen = isWin ? this.victoryScreenPrefab : this.lossScreeenPrefab;
        var screen = cc.instantiate(prefabScreen);
        screen.parent = cc.find("Canvas");
        screen.setPosition(0, 0, 0);
    };
    GameManager.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('gameEnd', this.onGameEnd, this);
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "victoryScreenPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "lossScreeenPrefab", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();