
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ExrtaBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3e44F1XqVA/rIUI4wg3QZK', 'ExrtaBlock');
// scripts/ExrtaBlock.ts

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
var Block_1 = require("./Block");
var Types_1 = require("./Types");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExtraBlock = /** @class */ (function (_super) {
    __extends(ExtraBlock, _super);
    function ExtraBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.blockSpriteNode = null;
        _this.smokeNode = null;
        _this.blockType = 'bomb';
        return _this;
    }
    ExtraBlock.prototype.start = function () {
    };
    ExtraBlock.prototype.updateVisual = function () {
        var spriteFrame = this.atlas.getSpriteFrame(Types_1.extraBlock[this.blockType]);
        var sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], ExtraBlock.prototype, "atlas", void 0);
    __decorate([
        property(cc.Node)
    ], ExtraBlock.prototype, "blockSpriteNode", void 0);
    __decorate([
        property(cc.Node)
    ], ExtraBlock.prototype, "smokeNode", void 0);
    ExtraBlock = __decorate([
        ccclass
    ], ExtraBlock);
    return ExtraBlock;
}(Block_1.default));
exports.default = ExtraBlock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXhydGFCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsaUNBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFvQjtJQUE1RDtRQUFBLHFFQWdCQztRQWRHLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRTdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDaEIsZUFBUyxHQUFrQixNQUFNLENBQUM7O0lBU2hELENBQUM7SUFSRywwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNTLGlDQUFZLEdBQXRCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBTlQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdCOUI7SUFBRCxpQkFBQztDQWhCRCxBQWdCQyxDQWhCdUMsZUFBSyxHQWdCNUM7a0JBaEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgeyBleHRyYUJsb2NrLCBFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYUJsb2NrIGV4dGVuZHMgQmxvY2s8RXh0cmFCbG9ja0tleT4ge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBhdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb2NrU3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYmxvY2tUeXBlOiBFeHRyYUJsb2NrS2V5ID0gJ2JvbWInO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWaXN1YWwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gdGhpcy5hdGxhcy5nZXRTcHJpdGVGcmFtZShleHRyYUJsb2NrW3RoaXMuYmxvY2tUeXBlXSk7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuYmxvY2tTcHJpdGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9XG59XG4iXX0=