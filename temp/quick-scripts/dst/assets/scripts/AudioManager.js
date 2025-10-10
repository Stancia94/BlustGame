
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
        if (!this.isBGMPlaying()) {
            this.playBGM(true);
        }
    };
    AudioManager.prototype.isBGMPlaying = function () {
        if (this.backgroundMusicId !== null) {
            var state = cc.audioEngine.getState(this.backgroundMusicId);
            return state === cc.audioEngine.AudioState.PLAYING;
        }
        return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkNDO1FBekNXLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUd6Qyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDOztJQXNDN0MsQ0FBQztxQkEzQ29CLFlBQVk7SUFPbkIsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLGNBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtZQUNqQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RCxPQUFPLEtBQUssS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDdEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sOEJBQU8sR0FBZixVQUFnQixJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ2hDLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RGO0lBQ0wsQ0FBQztJQUVNLDhCQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7SUF6Q2MscUJBQVEsR0FBaUIsSUFBSSxDQUFDO0lBSTdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkRBQ2tCO0lBTHhCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyQ2hDO0lBQUQsbUJBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBMkNyRDtrQkEzQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIGJhY2tncm91bmRNdXNpY0lkOiBudW1iZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBiYWNrZ3JvdW5kTXVzaWNDbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKEF1ZGlvTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0JHTVBsYXlpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QkdNKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0JHTVBsYXlpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0lkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNjLmF1ZGlvRW5naW5lLmdldFN0YXRlKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID09PSBjYy5hdWRpb0VuZ2luZS5BdWRpb1N0YXRlLlBMQVlJTkc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUJHTShsb29wOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kTXVzaWNDbGlwICYmICF0aGlzLmJhY2tncm91bmRNdXNpY0lkKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJhY2tncm91bmRNdXNpY0NsaXAsIGxvb3AsIDAuMDYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BCR00oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0lkKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTXVzaWNJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59Il19