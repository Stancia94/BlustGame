"use strict";
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