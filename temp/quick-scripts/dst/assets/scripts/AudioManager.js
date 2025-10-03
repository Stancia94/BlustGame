
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba6edbmLBRJW6xC4s4aq4Bn', 'AudioManager');
// scripts/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundMusicId = null;
        _this.backgroundMusicClip = null;
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.prototype.onLoad = function () {
        if (AudioManager_1.instance) {
            this.node.destroy();
            return;
        }
        AudioManager_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    AudioManager.prototype.start = function () {
        this.playBGM(true);
    };
    AudioManager.prototype.playBGM = function (loop) {
        if (loop === void 0) { loop = true; }
        if (this.backgroundMusicClip && !this.backgroundMusicId) {
            this.backgroundMusicId = cc.audioEngine.play(this.backgroundMusicClip, loop, 0.06);
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (this.backgroundMusicId) {
            cc.audioEngine.stop(this.backgroundMusicId);
            this.backgroundMusicId = null;
        }
    };
    var AudioManager_1;
    AudioManager.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "backgroundMusicClip", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBL0JXLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUd6Qyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDOztJQTRCN0MsQ0FBQztxQkFqQ29CLFlBQVk7SUFPbkIsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLGNBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVPLDhCQUFPLEdBQWYsVUFBZ0IsSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxXQUFvQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUM7SUFFTSw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUNqQztJQUNMLENBQUM7O0lBL0JjLHFCQUFRLEdBQWlCLElBQUksQ0FBQztJQUk3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZEQUNrQjtJQUx4QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBaUNoQztJQUFELG1CQUFDO0NBakNELEFBaUNDLENBakN5QyxFQUFFLENBQUMsU0FBUyxHQWlDckQ7a0JBakNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kTXVzaWNJZDogbnVtYmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYmFja2dyb3VuZE11c2ljQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmIChBdWRpb01hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXlCR00odHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5QkdNKGxvb3A6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0NsaXAgJiYgIXRoaXMuYmFja2dyb3VuZE11c2ljSWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmFja2dyb3VuZE11c2ljQ2xpcCwgbG9vcCwgMC4wNik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iYWNrZ3JvdW5kTXVzaWNJZCk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0lkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=