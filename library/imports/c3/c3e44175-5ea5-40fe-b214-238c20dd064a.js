"use strict";
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