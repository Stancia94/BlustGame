"use strict";
cc._RF.push(module, '59a33fD4iJD1L3tKJ6yxCG4', 'Commands');
// scripts/Commands.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeToExtraBlock = exports.DestroyGroup = exports.BaseCommand = void 0;
var EventBus_1 = require("./EventBus");
var Utils_1 = require("./Utils");
var BaseCommand = /** @class */ (function () {
    function BaseCommand() {
    }
    return BaseCommand;
}());
exports.BaseCommand = BaseCommand;
var DestroyGroup = /** @class */ (function (_super) {
    __extends(DestroyGroup, _super);
    function DestroyGroup(blocks) {
        var _this = _super.call(this) || this;
        _this.blocks = blocks;
        return _this;
    }
    DestroyGroup.prototype.execute = function (board) {
        EventBus_1.EventBus.emit('blocks-destroy', this.blocks.length);
        this.blocks.forEach(function (block) {
            board.board[block.getRow()][block.getCol()] = null;
            block.destroyYourself();
        });
        board.fall();
        board.fill();
    };
    return DestroyGroup;
}(BaseCommand));
exports.DestroyGroup = DestroyGroup;
var UpgradeToExtraBlock = /** @class */ (function (_super) {
    __extends(UpgradeToExtraBlock, _super);
    function UpgradeToExtraBlock(row, col, blocksForDestroy) {
        var _this = _super.call(this) || this;
        _this.row = row;
        _this.col = col;
        _this.blocksForDestroy = blocksForDestroy;
        return _this;
    }
    UpgradeToExtraBlock.prototype.execute = function (board) {
        var _this = this;
        board.deleteBlock(this.row, this.col);
        var blockSize = board.blockSizer.getBlockSize();
        var extraBlock = null;
        if (this.blocksForDestroy.length >= 8) {
            extraBlock = board.blockFactory.createExtraBlock(this.row, this.col, 'bomb_max', blockSize);
        }
        else {
            extraBlock = board.blockFactory.createExtraBlock(this.row, this.col, Utils_1.getRandomExtraBlockKey(['bomb_max']), blockSize);
        }
        board.setBlock(this.row, this.col, extraBlock);
        extraBlock.node.setPosition(board.blockSizer.getBlockPosition(this.row, this.col, blockSize));
        var index = this.blocksForDestroy.findIndex(function (block) { return block.getRow() === _this.row && block.getCol() === _this.col; });
        if (index >= 0)
            this.blocksForDestroy.splice(index, 1);
    };
    return UpgradeToExtraBlock;
}(BaseCommand));
exports.UpgradeToExtraBlock = UpgradeToExtraBlock;

cc._RF.pop();