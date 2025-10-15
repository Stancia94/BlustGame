"use strict";
cc._RF.push(module, '421e9W0DTpFYI/QjB8ikRPz', 'LimitNodeSize');
// scripts/LimitNodeSize.ts

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
var LimitNodeSize = /** @class */ (function (_super) {
    __extends(LimitNodeSize, _super);
    function LimitNodeSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        _this.maxWidth = 300;
        _this.maxHeight = 300;
        _this.marginX = 50;
        return _this;
    }
    LimitNodeSize.prototype.onLoad = function () {
        cc.view.on('canvas-resize', this.onResize, this);
    };
    LimitNodeSize.prototype.start = function () {
        this.adjustSize();
    };
    LimitNodeSize.prototype.adjustSize = function () {
        if (!this.targetNode)
            return;
        var node = this.targetNode;
        var aspectRatio = node.height / node.width;
        if (cc.winSize.width < node.width) {
            node.width = cc.winSize.width - this.marginX * 2;
            node.height = node.width * aspectRatio;
        }
        else {
            node.width = this.maxWidth;
            node.height = this.maxWidth * aspectRatio;
        }
        EventBus_1.EventBus.emit('board-change-size');
    };
    LimitNodeSize.prototype.onResize = function () {
        this.adjustSize();
    };
    LimitNodeSize.prototype.onDestroy = function () {
        cc.view.off('canvas-resize', this.onResize, this);
    };
    __decorate([
        property(cc.Node)
    ], LimitNodeSize.prototype, "targetNode", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "maxWidth", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "maxHeight", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "marginX", void 0);
    LimitNodeSize = __decorate([
        ccclass
    ], LimitNodeSize);
    return LimitNodeSize;
}(cc.Component));
exports.default = LimitNodeSize;

cc._RF.pop();