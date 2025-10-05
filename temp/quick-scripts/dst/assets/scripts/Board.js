
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63747QUknZB3qJ0RhUyfLRw', 'Board');
// scripts/Board.ts

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
var Utils_1 = require("./Utils");
var EventBus_1 = require("./EventBus");
var GridConfig_1 = require("./GridConfig");
var MatchFinder_1 = require("./MatchFinder");
var BlockFactory_1 = require("./BlockFactory");
var ExtraBlockHandler_1 = require("./ExtraBlockHandler");
var Vec3 = cc.Vec3;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockPrefab = null;
        _this.extraBlockPrefab = null;
        _this.width = 9;
        _this.height = 9;
        return _this;
    }
    Board.prototype.onLoad = function () {
        EventBus_1.EventBus.on('block-clicked', this.onBlockClicked, this);
    };
    Board.prototype.start = function () {
        var _this = this;
        this.board = new Array(this.height).fill(0).map(function () { return new Array(_this.width).fill(null); });
        this.matchFinder = new MatchFinder_1.default(this.board);
        this.blockFactory = new BlockFactory_1.default(this.blockPrefab, this.extraBlockPrefab, this.node);
        this.extraBlockHandler = new ExtraBlockHandler_1.default(this.board);
        this.fill();
    };
    Board.prototype.fill = function () {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                if (this.board[y][x] === null) {
                    var block = this.blockFactory.createBlock(y, x, Utils_1.getRandomBlockKey());
                    this.setBlock(y, x, block);
                    var startPos = new Vec3(GridConfig_1.GridConfig.startXPosition + GridConfig_1.GridConfig.width * x, GridConfig_1.GridConfig.behindScreen);
                    var targetPos = new Vec3(GridConfig_1.GridConfig.startXPosition + GridConfig_1.GridConfig.width * x, GridConfig_1.GridConfig.startYPosition - GridConfig_1.GridConfig.height * y, 0);
                    block.fallAnimation(startPos, targetPos);
                }
            }
        }
    };
    Board.prototype.fall = function () {
        for (var x = 0; x < this.width; x++) {
            for (var y = this.height - 2; y >= 0; y--) {
                var block = this.board[y][x];
                if (!block)
                    continue;
                var newY = y;
                while (newY + 1 < this.height && this.board[newY + 1][x] === null) {
                    newY++;
                }
                if (newY !== y) {
                    this.board[y][x] = null;
                    this.setBlock(newY, x, block);
                    var targetPos = new Vec3(GridConfig_1.GridConfig.startXPosition + GridConfig_1.GridConfig.width * x, GridConfig_1.GridConfig.startYPosition - GridConfig_1.GridConfig.height * newY, 0);
                    block.fallTo(targetPos, 0.4);
                }
            }
        }
    };
    Board.prototype.destroyGroup = function (blocks) {
        var _this = this;
        EventBus_1.EventBus.emit('blocks-destroy', blocks.length);
        blocks.forEach(function (block) {
            block.destroyYourself();
            _this.board[block.getRow()][block.getCol()] = null;
        });
        this.fall();
        this.fill();
    };
    Board.prototype.onBlockClicked = function (data) {
        if (Types_1.isBlockKey(data.blockType)) {
            var sameBlocks = [];
            sameBlocks = this.matchFinder.find(data.row, data.col, data.blockType);
            if (sameBlocks.length >= 2) {
                EventBus_1.EventBus.emit('step');
                if (sameBlocks.length >= 5) {
                    this.upgradeToExtraBlock(data.row, data.col, sameBlocks);
                }
                this.destroyGroup(sameBlocks);
            }
        }
        else if (Types_1.isExtraBlockKey(data.blockType)) {
            var blockForDestroy = this.extraBlockHandler.handle(data);
            this.destroyGroup(blockForDestroy);
        }
    };
    Board.prototype.upgradeToExtraBlock = function (row, col, blocksForDestroy) {
        this.deleteBlock(row, col);
        var extraBlock = null;
        if (blocksForDestroy.length >= 8) {
            extraBlock = this.blockFactory.createExtraBlock(row, col, 'bomb_max');
        }
        else {
            extraBlock = this.blockFactory.createExtraBlock(row, col, Utils_1.getRandomExtraBlockKey(['bomb_max']));
        }
        this.setBlock(row, col, extraBlock);
        extraBlock.node.setPosition(new Vec3(GridConfig_1.GridConfig.startXPosition + GridConfig_1.GridConfig.width * col, GridConfig_1.GridConfig.startYPosition - GridConfig_1.GridConfig.height * row, 0));
        var index = blocksForDestroy.findIndex(function (block) { return block.getRow() === row && block.getCol() === col; });
        if (index >= 0)
            blocksForDestroy.splice(index, 1);
    };
    Board.prototype.deleteBlock = function (row, col) {
        var block = this.board[row][col];
        block.destroyYourself();
        this.board[row][col] = null;
    };
    Board.prototype.setBlock = function (row, col, block) {
        block.setRowCol(row, col);
        this.board[row][col] = block;
    };
    Board.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('block-clicked', this.onBlockClicked, this);
    };
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "extraBlockPrefab", void 0);
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWtGO0FBQ2xGLGlDQUFvRTtBQUNwRSx1Q0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMseURBQW9EO0FBRzVDLElBQUEsSUFBSSxHQUFLLEVBQUUsS0FBUCxDQUFRO0FBQ2QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF1SEM7UUFySEcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBQzNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFpSC9CLENBQUM7SUEzR2Esc0JBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRVMscUJBQUssR0FBZjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksc0JBQVksQ0FBQyxJQUFJLENBQUMs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QUFLLElBQUksQ0FBQztZQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNPLDJCQUFXLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxHQUFXO1FBQ3hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDTyx3QkFBUSxHQUFoQixVQUFpQixHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWdCO1FBQ3ZELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDUyx5QkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFwSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNlO0lBSmxCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F1SHpCO0lBQUQsWUFBQztDQXZIRCxBQXVIQyxDQXZIa0MsRUFBRSxDQUFDLFNBQVMsR0F1SDlDO2tCQXZIb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkVHlwZSwgQmxvY2tDbGlja0V2ZW50LCBpc0Jsb2NrS2V5LCBpc0V4dHJhQmxvY2tLZXkgfSBmcm9tIFwiLi9UeXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21CbG9ja0tleSwgZ2V0UmFuZG9tRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcclxuaW1wb3J0IE1hdGNoRmluZGVyIGZyb20gXCIuL01hdGNoRmluZGVyXCI7XHJcbmltcG9ydCBCbG9ja0ZhY3RvcnkgZnJvbSBcIi4vQmxvY2tGYWN0b3J5XCI7XHJcbmltcG9ydCBFeHRyYUJsb2NrSGFuZGxlciBmcm9tIFwiLi9FeHRyYUJsb2NrSGFuZGxlclwiO1xyXG5pbXBvcnQgRXh0cmFCbG9jayBmcm9tIFwiLi9FeHJ0YUJsb2NrXCI7XHJcblxyXG5jb25zdCB7IFZlYzMgfSA9IGNjO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZXh0cmFCbG9ja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlciA9IDk7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyID0gOTtcclxuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkVHlwZVtdW107XHJcbiAgICBwcml2YXRlIG1hdGNoRmluZGVyOiBNYXRjaEZpbmRlcjtcclxuICAgIHByaXZhdGUgYmxvY2tGYWN0b3J5OiBCbG9ja0ZhY3Rvcnk7XHJcbiAgICBwcml2YXRlIGV4dHJhQmxvY2tIYW5kbGVyOiBFeHRyYUJsb2NrSGFuZGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9uKCdibG9jay1jbGlja2VkJywgdGhpcy5vbkJsb2NrQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5oZWlnaHQpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLndpZHRoKS5maWxsKG51bGwpKTtcclxuICAgICAgICB0aGlzLm1hdGNoRmluZGVyID0gbmV3IE1hdGNoRmluZGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tGYWN0b3J5ID0gbmV3IEJsb2NrRmFjdG9yeSh0aGlzLmJsb2NrUHJlZmFiLCB0aGlzLmV4dHJhQmxvY2tQcmVmYWIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5leHRyYUJsb2NrSGFuZGxlciA9IG5ldyBFeHRyYUJsb2NrSGFuZGxlcih0aGlzLmJvYXJkKTtcclxuICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZmlsbCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJsb2NrRmFjdG9yeS5jcmVhdGVCbG9jayh5LCB4LCBnZXRSYW5kb21CbG9ja0tleSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJsb2NrKHksIHgsIGJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmlkQ29uZmlnLnN0YXJ0WFBvc2l0aW9uICsgR3JpZENvbmZpZy53aWR0aCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyaWRDb25maWcuYmVoaW5kU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmlkQ29uZmlnLnN0YXJ0WFBvc2l0aW9uICsgR3JpZENvbmZpZy53aWR0aCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyaWRDb25maWcuc3RhcnRZUG9zaXRpb24gLSBHcmlkQ29uZmlnLmhlaWdodCAqIHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZhbGxBbmltYXRpb24oc3RhcnRQb3MsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZhbGwoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMuaGVpZ2h0IC0gMjsgeSA+PSAwOyB5LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFt5XVt4XTtcclxuICAgICAgICAgICAgICAgIGlmICghYmxvY2spIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1kgPSB5O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1kgKyAxIDwgdGhpcy5oZWlnaHQgJiYgdGhpcy5ib2FyZFtuZXdZICsgMV1beF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdZKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WSAhPT0geSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QmxvY2sobmV3WSwgeCwgYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmlkQ29uZmlnLnN0YXJ0WFBvc2l0aW9uICsgR3JpZENvbmZpZy53aWR0aCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyaWRDb25maWcuc3RhcnRZUG9zaXRpb24gLSBHcmlkQ29uZmlnLmhlaWdodCAqIG5ld1ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZhbGxUbyh0YXJnZXRQb3MsIDAuNClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVzdHJveUdyb3VwKGJsb2NrczogQm9hcmRUeXBlW10pOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5lbWl0KCdibG9ja3MtZGVzdHJveScsIGJsb2Nrcy5sZW5ndGgpO1xyXG4gICAgICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgICAgICAgICBibG9jay5kZXN0cm95WW91cnNlbGYoKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtibG9jay5nZXRSb3coKV1bYmxvY2suZ2V0Q29sKCldID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZhbGwoKTtcclxuICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25CbG9ja0NsaWNrZWQoZGF0YTogQmxvY2tDbGlja0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGlzQmxvY2tLZXkoZGF0YS5ibG9ja1R5cGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBzYW1lQmxvY2tzOiBCb2FyZFR5cGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBzYW1lQmxvY2tzID0gdGhpcy5tYXRjaEZpbmRlci5maW5kKGRhdGEucm93LCBkYXRhLmNvbCwgZGF0YS5ibG9ja1R5cGUpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZUJsb2Nrcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRCdXMuZW1pdCgnc3RlcCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVUb0V4dHJhQmxvY2soZGF0YS5yb3csIGRhdGEuY29sLCBzYW1lQmxvY2tzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUdyb3VwKHNhbWVCbG9ja3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0V4dHJhQmxvY2tLZXkoZGF0YS5ibG9ja1R5cGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrRm9yRGVzdHJveSA9IHRoaXMuZXh0cmFCbG9ja0hhbmRsZXIuaGFuZGxlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lHcm91cChibG9ja0ZvckRlc3Ryb3kpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBncmFkZVRvRXh0cmFCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2Nrc0ZvckRlc3Ryb3k6IEJvYXJkVHlwZVtdKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVCbG9jayhyb3csIGNvbCk7XHJcbiAgICAgICAgbGV0IGV4dHJhQmxvY2s6IEV4dHJhQmxvY2sgPSBudWxsO1xyXG4gICAgICAgIGlmIChibG9ja3NGb3JEZXN0cm95Lmxlbmd0aCA+PSA4KSB7XHJcbiAgICAgICAgICAgIGV4dHJhQmxvY2sgPSB0aGlzLmJsb2NrRmFjdG9yeS5jcmVhdGVFeHRyYUJsb2NrKHJvdywgY29sLCAnYm9tYl9tYXgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShbJ2JvbWJfbWF4J10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRCbG9jayhyb3csIGNvbCwgZXh0cmFCbG9jayk7XHJcbiAgICAgICAgZXh0cmFCbG9jay5ub2RlLnNldFBvc2l0aW9uKG5ldyBWZWMzKFxyXG4gICAgICAgICAgICBHcmlkQ29uZmlnLnN0YXJ0WFBvc2l0aW9uICsgR3JpZENvbmZpZy53aWR0aCAqIGNvbCxcclxuICAgICAgICAgICAgR3JpZENvbmZpZy5zdGFydFlQb3NpdGlvbiAtIEdyaWRDb25maWcuaGVpZ2h0ICogcm93LFxyXG4gICAgICAgICAgICAwKSlcclxuICAgICAgICBjb25zdCBpbmRleCA9IGJsb2Nrc0ZvckRlc3Ryb3kuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAoYmxvY2spID0+IGJsb2NrLmdldFJvdygpID09PSByb3cgJiYgYmxvY2suZ2V0Q29sKCkgPT09IGNvbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIGJsb2Nrc0ZvckRlc3Ryb3kuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVsZXRlQmxvY2socm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcclxuICAgICAgICBibG9jay5kZXN0cm95WW91cnNlbGYoKTtcclxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldEJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2s6IEJvYXJkVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGJsb2NrLnNldFJvd0NvbChyb3csIGNvbCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBibG9jaztcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdibG9jay1jbGlja2VkJywgdGhpcy5vbkJsb2NrQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19