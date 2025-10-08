
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LimitNodeSize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        console.log(node.width);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGltaXROb2RlU2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFvQ0M7UUFqQ0csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUV2QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGFBQU8sR0FBVyxFQUFFLENBQUM7O0lBMkJ6QixDQUFDO0lBMUJhLDhCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNTLGtDQUFVLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzFDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM3QztRQUNELG1CQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNTLGdDQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyxpQ0FBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUUzQjtRQURDLFFBQVE7bURBQ2M7SUFFdkI7UUFEQyxRQUFRO29EQUNlO0lBRXhCO1FBREMsUUFBUTtrREFDWTtJQVRKLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FvQ2pDO0lBQUQsb0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzBDLEVBQUUsQ0FBQyxTQUFTLEdBb0N0RDtrQkFwQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuL0V2ZW50QnVzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pdE5vZGVTaXplIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAzMDA7XG4gICAgQHByb3BlcnR5XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgPSAzMDA7XG4gICAgQHByb3BlcnR5XG4gICAgbWFyZ2luWDogbnVtYmVyID0gNTA7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY2Mudmlldy5vbignY2FudmFzLXJlc2l6ZScsIHRoaXMub25SZXNpemUsIHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRqdXN0U2l6ZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWRqdXN0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldE5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudGFyZ2V0Tm9kZTtcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBub2RlLmhlaWdodCAvIG5vZGUud2lkdGg7XG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgbm9kZS53aWR0aCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGggLSB0aGlzLm1hcmdpblggKiAyO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBub2RlLndpZHRoICogYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy5tYXhXaWR0aDtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5tYXhXaWR0aCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2JvYXJkLWNoYW5nZS1zaXplJylcbiAgICAgICAgY29uc29sZS5sb2cobm9kZS53aWR0aClcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkanVzdFNpemUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY2Mudmlldy5vZmYoJ2NhbnZhcy1yZXNpemUnLCB0aGlzLm9uUmVzaXplLCB0aGlzKTtcbiAgICB9XG59XG4iXX0=