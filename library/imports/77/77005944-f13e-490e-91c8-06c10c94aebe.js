"use strict";
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