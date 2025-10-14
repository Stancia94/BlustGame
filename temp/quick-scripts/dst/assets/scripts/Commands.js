
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFzQztBQUd0QyxpQ0FBaUQ7QUFLakQ7SUFBQTtJQUVBLENBQUM7SUFBRCxrQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRnFCLGtDQUFXO0FBR2pDO0lBQWtDLGdDQUFXO0lBQ3pDLHNCQUNZLE1BQW1CO1FBRC9CLFlBR0ksaUJBQU8sU0FDVjtRQUhXLFlBQU0sR0FBTixNQUFNLENBQWE7O0lBRy9CLENBQUM7SUFDRCw4QkFBTyxHQUFQLFVBQVEsS0FBWTtRQUNoQixtQkFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNuRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FmQSxBQWVDLENBZmlDLFdBQVcsR0FlNUM7QUFmWSxvQ0FBWTtBQWdCekI7SUFBeUMsdUNBQVc7SUFDaEQsNkJBQ1ksR0FBVyxFQUNYLEdBQVcsRUFDWCxnQkFBNkI7UUFIekMsWUFLSSxpQkFBTyxTQUNWO1FBTFcsU0FBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWE7O0lBR3pDLENBQUM7SUFDRCxxQ0FBTyxHQUFQLFVBQVEsS0FBWTtRQUFwQixpQkFlQztRQWRHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNqRCxJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNuQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9GO2FBQU07WUFDSCxVQUFVLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsOEJBQXNCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3pIO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0MsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUM3RixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUN6QyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFJLENBQUMsR0FBRyxFQUExRCxDQUEwRCxDQUN4RSxDQUFDO1FBQ0YsSUFBSSxLQUFLLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTCwwQkFBQztBQUFELENBeEJBLEFBd0JDLENBeEJ3QyxXQUFXLEdBd0JuRDtBQXhCWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vQm9hcmRcIjtcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcbmltcG9ydCBFeHRyYUJsb2NrIGZyb20gXCIuL0V4cnRhQmxvY2tcIjtcbmltcG9ydCB7IEJvYXJkVHlwZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21FeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb2FyZENvbW1hbmQge1xuICAgIGV4ZWN1dGUoYm9hcmQ6IEJvYXJkKTogdm9pZDtcbn1cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29tbWFuZCBpbXBsZW1lbnRzIEJvYXJkQ29tbWFuZCB7XG4gICAgYWJzdHJhY3QgZXhlY3V0ZShib2FyZDogQm9hcmQpOiB2b2lkO1xufVxuZXhwb3J0IGNsYXNzIERlc3Ryb3lHcm91cCBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBibG9ja3M6IEJvYXJkVHlwZVtdXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGV4ZWN1dGUoYm9hcmQ6IEJvYXJkKTogdm9pZCB7XG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5ibG9ja3MubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5ibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmJvYXJkW2Jsb2NrLmdldFJvdygpXVtibG9jay5nZXRDb2woKV0gPSBudWxsO1xuICAgICAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBib2FyZC5mYWxsKCk7XG4gICAgICAgIGJvYXJkLmZpbGwoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVXBncmFkZVRvRXh0cmFCbG9jayBleHRlbmRzIEJhc2VDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3c6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBjb2w6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBibG9ja3NGb3JEZXN0cm95OiBCb2FyZFR5cGVbXVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBleGVjdXRlKGJvYXJkOiBCb2FyZCk6IHZvaWQge1xuICAgICAgICBib2FyZC5kZWxldGVCbG9jayh0aGlzLnJvdywgdGhpcy5jb2wpO1xuICAgICAgICBjb25zdCBibG9ja1NpemUgPSBib2FyZC5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXG4gICAgICAgIGxldCBleHRyYUJsb2NrOiBFeHRyYUJsb2NrID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzRm9yRGVzdHJveS5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgZXh0cmFCbG9jayA9IGJvYXJkLmJsb2NrRmFjdG9yeS5jcmVhdGVFeHRyYUJsb2NrKHRoaXMucm93LCB0aGlzLmNvbCwgJ2JvbWJfbWF4JywgYmxvY2tTaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4dHJhQmxvY2sgPSBib2FyZC5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayh0aGlzLnJvdywgdGhpcy5jb2wsIGdldFJhbmRvbUV4dHJhQmxvY2tLZXkoWydib21iX21heCddKSwgYmxvY2tTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5zZXRCbG9jayh0aGlzLnJvdywgdGhpcy5jb2wsIGV4dHJhQmxvY2spO1xuICAgICAgICBleHRyYUJsb2NrLm5vZGUuc2V0UG9zaXRpb24oYm9hcmQuYmxvY2tTaXplci5nZXRCbG9ja1Bvc2l0aW9uKHRoaXMucm93LCB0aGlzLmNvbCwgYmxvY2tTaXplKSlcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmJsb2Nrc0ZvckRlc3Ryb3kuZmluZEluZGV4KFxuICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5nZXRSb3coKSA9PT0gdGhpcy5yb3cgJiYgYmxvY2suZ2V0Q29sKCkgPT09IHRoaXMuY29sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLmJsb2Nrc0ZvckRlc3Ryb3kuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59Il19