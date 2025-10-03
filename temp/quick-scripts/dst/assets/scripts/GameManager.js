
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBb0JDO1FBbEJHLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUV0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7O1FBZXBDLGlCQUFpQjtJQUNyQixDQUFDO0lBZmEsNEJBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsMkJBQUssR0FBTCxjQUFVLENBQUM7SUFDSCwrQkFBUyxHQUFqQixVQUFrQixLQUFjO1FBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUMvRSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNTLCtCQUFTLEdBQW5CO1FBQ0ksbUJBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQWhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNnQjtJQUpuQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBb0IvQjtJQUFELGtCQUFDO0NBcEJELEFBb0JDLENBcEJ3QyxFQUFFLENBQUMsU0FBUyxHQW9CcEQ7a0JBcEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdmljdG9yeVNjcmVlblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxvc3NTY3JlZWVuUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEV2ZW50QnVzLm9uKCdnYW1lRW5kJywgdGhpcy5vbkdhbWVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICBzdGFydCgpIHsgfVxuICAgIHByaXZhdGUgb25HYW1lRW5kKGlzV2luOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgICAgIGNvbnN0IHByZWZhYlNjcmVlbiA9IGlzV2luID8gdGhpcy52aWN0b3J5U2NyZWVuUHJlZmFiIDogdGhpcy5sb3NzU2NyZWVlblByZWZhYjtcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gY2MuaW5zdGFudGlhdGUocHJlZmFiU2NyZWVuKTtcbiAgICAgICAgc2NyZWVuLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIHNjcmVlbi5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdnYW1lRW5kJywgdGhpcy5vbkdhbWVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19