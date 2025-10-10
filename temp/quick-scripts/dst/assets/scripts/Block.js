
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5759aozpf9DHrKg04Tf4B1h', 'Block');
// scripts/Block.ts

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
var Types_1 = require("./Types");
var EventBus_1 = require("./EventBus");
var GridConfig_1 = require("./GridConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.blockSpriteNode = null;
        _this.smokeNode = null;
        _this.row = 0;
        _this.col = 0;
        _this.blockType = 'blue';
        _this.width = GridConfig_1.GridConfig.width;
        _this.height = GridConfig_1.GridConfig.height;
        return _this;
    }
    Block.prototype.onLoad = function () {
        this.blockSpriteNode.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    };
    Block.prototype.start = function () { };
    Block.prototype.getRow = function () {
        return this.row;
    };
    Block.prototype.getCol = function () {
        return this.col;
    };
    Block.prototype.getType = function () {
        return this.blockType;
    };
    Block.prototype.setRowCol = function (row, col) {
        this.row = row;
        this.col = col;
    };
    Block.prototype.init = function (row, col, blockType, size) {
        this.row = row;
        this.col = col;
        this.blockType = blockType;
        this.setSize(size);
        this.updateVisual();
    };
    Block.prototype.setSize = function (size) {
        var scaleX = size.x / GridConfig_1.GridConfig.width;
        var scaleY = size.y / GridConfig_1.GridConfig.height;
        this.node.setScale(scaleX, scaleY);
    };
    Block.prototype.updateVisual = function () {
        var key = this.blockType;
        var spriteFrame = this.atlas.getSpriteFrame(Types_1.blockColor[key]);
        var sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    };
    Block.prototype.updateScale = function () {
    };
    Block.prototype.destroyYourself = function () {
        var _this = this;
        var anim = this.blockSpriteNode.getComponent(cc.Animation);
        var particle = this.smokeNode.getComponent(cc.ParticleSystem);
        anim.once('finished', function () {
            _this.node.destroy();
        }, this);
        anim.play();
        particle.resetSystem();
    };
    Block.prototype.fallTo = function (targetPos, time) {
        cc.tween(this.node)
            .to(time, { position: targetPos }, { easing: "sineOut" })
            .start();
    };
    Block.prototype.fallAnimation = function (startPos, targetPos) {
        this.node.setPosition(startPos);
        this.fallTo(targetPos, 0.5);
    };
    Block.prototype.onTouch = function () {
        EventBus_1.EventBus.emit('block-clicked', { blockType: this.blockType, row: this.row, col: this.col });
    };
    Block.prototype.onDestroy = function () {
        this.blockSpriteNode.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], Block.prototype, "atlas", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "blockSpriteNode", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "smokeNode", void 0);
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStDO0FBQy9DLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0UseUJBQVk7SUFBNUU7UUFBQSxxRUEwRUM7UUF4RUcsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNoQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFNLE1BQVcsQ0FBQztRQUMzQixXQUFLLEdBQVcsdUJBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsWUFBTSxHQUFXLHVCQUFVLENBQUMsTUFBTSxDQUFDOztJQStEakQsQ0FBQztJQTlEYSxzQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxxQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUNKLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHlCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcs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QUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUF2RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3Q0FDSTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1E7SUFOVCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMEV6QjtJQUFELFlBQUM7Q0ExRUQsQUEwRUMsQ0ExRStELEVBQUUsQ0FBQyxTQUFTLEdBMEUzRTtrQkExRW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBibG9ja0NvbG9yLCBCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrPFQgZXh0ZW5kcyBzdHJpbmcgPSBCbG9ja0tleT4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgYXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmxvY2tTcHJpdGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCByb3c6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgY29sOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIGJsb2NrVHlwZTogVCA9ICdibHVlJyBhcyBUO1xyXG4gICAgcHJvdGVjdGVkIHdpZHRoOiBudW1iZXIgPSBHcmlkQ29uZmlnLndpZHRoO1xyXG4gICAgcHJvdGVjdGVkIGhlaWdodDogbnVtYmVyID0gR3JpZENvbmZpZy5oZWlnaHQ7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmxvY2tTcHJpdGVOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7IH1cclxuICAgIHB1YmxpYyBnZXRSb3coKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3c7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Q29sKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tUeXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFJvd0NvbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdyA9IHJvdztcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2tUeXBlOiBULCBzaXplPzogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sID0gY29sO1xyXG4gICAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICAgIHRoaXMuc2V0U2l6ZShzaXplKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc3VhbCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFNpemUoc2l6ZTogY2MuVmVjMikge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHNpemUueCAvIEdyaWRDb25maWcud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gc2l6ZS55IC8gR3JpZENvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVWaXN1YWwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5ibG9ja1R5cGUgYXMgQmxvY2tLZXlcclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHRoaXMuYXRsYXMuZ2V0U3ByaXRlRnJhbWUoYmxvY2tDb2xvcltrZXldKTtcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmJsb2NrU3ByaXRlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVTY2FsZSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVzdHJveVlvdXJzZWxmKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLmJsb2NrU3ByaXRlTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMuc21va2VOb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgYW5pbS5vbmNlKCdmaW5pc2hlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIGFuaW0ucGxheSgpO1xyXG4gICAgICAgIHBhcnRpY2xlLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmFsbFRvKHRhcmdldFBvczogY2MuVmVjMywgdGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8odGltZSwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmYWxsQW5pbWF0aW9uKHN0YXJ0UG9zOiBjYy5WZWMzLCB0YXJnZXRQb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xyXG4gICAgICAgIHRoaXMuZmFsbFRvKHRhcmdldFBvcywgMC41KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25Ub3VjaCgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdibG9jay1jbGlja2VkJywgeyBibG9ja1R5cGU6IHRoaXMuYmxvY2tUeXBlLCByb3c6IHRoaXMucm93LCBjb2w6IHRoaXMuY29sIH0pO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJsb2NrU3ByaXRlTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19