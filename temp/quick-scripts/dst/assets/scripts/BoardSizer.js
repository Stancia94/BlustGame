
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BoardSizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77005lE8T5JDpHIBsEMlK6+', 'BoardSizer');
// scripts/BoardSizer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardSizer = /** @class */ (function () {
    function BoardSizer(container, columns, originalBlockSize) {
        this.container = container;
        this.columns = columns;
        this.originalBlockSize = originalBlockSize;
    }
    BoardSizer.prototype.calculateBlockSize = function () {
        var blockWidth = (this.container.width - 80) / this.columns;
        var blockHeight = blockWidth * (this.originalBlockSize.y / this.originalBlockSize.x);
        return new cc.Vec2(blockWidth, blockHeight);
    };
    BoardSizer.prototype.setBlockSize = function (blockSize) {
        this.blockSize = blockSize;
    };
    BoardSizer.prototype.getBlockSize = function () {
        return this.blockSize;
    };
    return BoardSizer;
}());
exports.default = BoardSizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmRTaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRUksb0JBQ1ksU0FBa0IsRUFDbEIsT0FBZSxFQUNmLGlCQUEwQjtRQUYxQixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVM7SUFDbEMsQ0FBQztJQUNFLHVDQUFrQixHQUF6QjtRQUNJLElBQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5RCxJQUFNLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RixPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUNNLGlDQUFZLEdBQW5CLFVBQW9CLFNBQWtCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDTSxpQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRTaXplciB7XG4gICAgcHJpdmF0ZSBibG9ja1NpemU6IGNjLlZlYzJcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb250YWluZXI6IGNjLk5vZGUsXG4gICAgICAgIHByaXZhdGUgY29sdW1uczogbnVtYmVyLFxuICAgICAgICBwcml2YXRlIG9yaWdpbmFsQmxvY2tTaXplOiBjYy5WZWMyLFxuICAgICkgeyB9XG4gICAgcHVibGljIGNhbGN1bGF0ZUJsb2NrU2l6ZSgpOiBjYy5WZWMyIHtcbiAgICAgICAgY29uc3QgYmxvY2tXaWR0aCA9ICh0aGlzLmNvbnRhaW5lci53aWR0aCAtIDgwKSAvIHRoaXMuY29sdW1ucztcbiAgICAgICAgY29uc3QgYmxvY2tIZWlnaHQgPSBibG9ja1dpZHRoICogKHRoaXMub3JpZ2luYWxCbG9ja1NpemUueSAvIHRoaXMub3JpZ2luYWxCbG9ja1NpemUueClcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0QmxvY2tTaXplKGJsb2NrU2l6ZTogY2MuVmVjMik6IHZvaWQge1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICB9XG4gICAgcHVibGljIGdldEJsb2NrU2l6ZSgpOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tTaXplO1xuICAgIH1cbn1cbiJdfQ==