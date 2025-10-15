
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Commands.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFzQztBQUd0QyxpQ0FBaUQ7QUFLakQ7SUFBQTtJQUVBLENBQUM7SUFBRCxrQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRnFCLGtDQUFXO0FBR2pDO0lBQWtDLGdDQUFXO0lBQ3pDLHNCQUNZLE1BQW1CO1FBRC9CLFlBR0ksaUJBQU8sU0FDVjtRQUhXLFlBQU0sR0FBTixNQUFNLENBQWE7O0lBRy9CLENBQUM7SUFDRCw4QkFBTyxHQUFQLFVBQVEsS0FBWTtRQUNoQixtQkFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNuRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWJBLEFBYUMsQ0FiaUMsV0FBVyxHQWE1QztBQWJZLG9DQUFZO0FBY3pCO0lBQXlDLHVDQUFXO0lBQ2hELDZCQUNZLEdBQVcsRUFDWCxHQUFXLEVBQ1gsZ0JBQTZCO1FBSHpDLFlBS0ksaUJBQU8sU0FDVjtRQUxXLFNBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxTQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFhOztJQUd6QyxDQUFDO0lBQ0QscUNBQU8sR0FBUCxVQUFRLEtBQVk7UUFBcEIsaUJBZUM7UUFkRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDakQsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbkMsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMvRjthQUFNO1lBQ0gsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLDhCQUFzQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN6SDtRQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDN0YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDekMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssS0FBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssS0FBSSxDQUFDLEdBQUcsRUFBMUQsQ0FBMEQsQ0FDeEUsQ0FBQztRQUNGLElBQUksS0FBSyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxDQXhCd0MsV0FBVyxHQXdCbkQ7QUF4Qlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuL0V2ZW50QnVzXCI7XG5pbXBvcnQgRXh0cmFCbG9jayBmcm9tIFwiLi9FeHJ0YUJsb2NrXCI7XG5pbXBvcnQgeyBCb2FyZFR5cGUgfSBmcm9tIFwiLi9UeXBlc1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9hcmRDb21tYW5kIHtcbiAgICBleGVjdXRlKGJvYXJkOiBCb2FyZCk6IHZvaWQ7XG59XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbW1hbmQgaW1wbGVtZW50cyBCb2FyZENvbW1hbmQge1xuICAgIGFic3RyYWN0IGV4ZWN1dGUoYm9hcmQ6IEJvYXJkKTogdm9pZDtcbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95R3JvdXAgZXh0ZW5kcyBCYXNlQ29tbWFuZCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYmxvY2tzOiBCb2FyZFR5cGVbXVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBleGVjdXRlKGJvYXJkOiBCb2FyZCk6IHZvaWQge1xuICAgICAgICBFdmVudEJ1cy5lbWl0KCdibG9ja3MtZGVzdHJveScsIHRoaXMuYmxvY2tzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBib2FyZC5ib2FyZFtibG9jay5nZXRSb3coKV1bYmxvY2suZ2V0Q29sKCldID0gbnVsbDtcbiAgICAgICAgICAgIGJsb2NrLmRlc3Ryb3lZb3Vyc2VsZigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVXBncmFkZVRvRXh0cmFCbG9jayBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3c6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBjb2w6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBibG9ja3NGb3JEZXN0cm95OiBCb2FyZFR5cGVbXVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBleGVjdXRlKGJvYXJkOiBCb2FyZCk6IHZvaWQge1xuICAgICAgICBib2FyZC5kZWxldGVCbG9jayh0aGlzLnJvdywgdGhpcy5jb2wpO1xuICAgICAgICBjb25zdCBibG9ja1NpemUgPSBib2FyZC5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXG4gICAgICAgIGxldCBleHRyYUJsb2NrOiBFeHRyYUJsb2NrID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzRm9yRGVzdHJveS5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgZXh0cmFCbG9jayA9IGJvYXJkLmJsb2NrRmFjdG9yeS5jcmVhdGVFeHRyYUJsb2NrKHRoaXMucm93LCB0aGlzLmNvbCwgJ2JvbWJfbWF4JywgYmxvY2tTaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4dHJhQmxvY2sgPSBib2FyZC5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayh0aGlzLnJvdywgdGhpcy5jb2wsIGdldFJhbmRvbUV4dHJhQmxvY2tLZXkoWydib21iX21heCddKSwgYmxvY2tTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5zZXRCbG9jayh0aGlzLnJvdywgdGhpcy5jb2wsIGV4dHJhQmxvY2spO1xuICAgICAgICBleHRyYUJsb2NrLm5vZGUuc2V0UG9zaXRpb24oYm9hcmQuYmxvY2tTaXplci5nZXRCbG9ja1Bvc2l0aW9uKHRoaXMucm93LCB0aGlzLmNvbCwgYmxvY2tTaXplKSlcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmJsb2Nrc0ZvckRlc3Ryb3kuZmluZEluZGV4KFxuICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5nZXRSb3coKSA9PT0gdGhpcy5yb3cgJiYgYmxvY2suZ2V0Q29sKCkgPT09IHRoaXMuY29sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLmJsb2Nrc0ZvckRlc3Ryb3kuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59Il19