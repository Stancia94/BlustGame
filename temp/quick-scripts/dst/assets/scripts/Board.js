
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
var BoardSizer_1 = require("./BoardSizer");
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
        EventBus_1.EventBus.on('board-change-size', this.onResize, this);
    };
    Board.prototype.start = function () {
        var _this = this;
        this.board = new Array(this.height).fill(0).map(function () { return new Array(_this.width).fill(null); });
        this.matchFinder = new MatchFinder_1.default(this.board);
        this.blockFactory = new BlockFactory_1.default(this.blockPrefab, this.extraBlockPrefab, this.node);
        this.extraBlockHandler = new ExtraBlockHandler_1.default(this.board);
        this.blockSizer = new BoardSizer_1.default(this.node, this.width, new cc.Vec2(GridConfig_1.GridConfig.width, GridConfig_1.GridConfig.height));
        this.scheduleOnce(function () {
            _this.blockSizer.setBlockSize(_this.blockSizer.calculateBlockSize());
            _this.fill();
        }, 0);
    };
    Board.prototype.fill = function () {
        var blockSize = this.blockSizer.getBlockSize();
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                if (this.board[y][x] === null) {
                    var block = this.blockFactory.createBlock(y, x, Utils_1.getRandomBlockKey(), blockSize);
                    this.setBlock(y, x, block);
                    var startPos = new Vec3(-(this.node.width / 2 - GridConfig_1.GridConfig.marginX - blockSize.x / 2) + blockSize.x * x, GridConfig_1.GridConfig.behindScreen);
                    var targetPos = this.blockSizer.getBlockPosition(y, x, blockSize);
                    block.fallAnimation(startPos, targetPos);
                }
            }
        }
    };
    Board.prototype.fall = function () {
        var blockSize = this.blockSizer.getBlockSize();
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
                    var targetPos = this.blockSizer.getBlockPosition(newY, x, blockSize);
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
        var blockSize = this.blockSizer.getBlockSize();
        var extraBlock = null;
        if (blocksForDestroy.length >= 8) {
            extraBlock = this.blockFactory.createExtraBlock(row, col, 'bomb_max', blockSize);
        }
        else {
            extraBlock = this.blockFactory.createExtraBlock(row, col, Utils_1.getRandomExtraBlockKey(['bomb_max']), blockSize);
        }
        this.setBlock(row, col, extraBlock);
        extraBlock.node.setPosition(this.blockSizer.getBlockPosition(row, col, blockSize));
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
    Board.prototype.onResize = function () {
        if (!this.board)
            return;
        this.blockSizer.setBlockSize(this.blockSizer.calculateBlockSize());
        var blockSize = this.blockSizer.getBlockSize();
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                var block = this.board[y][x];
                block === null || block === void 0 ? void 0 : block.setSize(blockSize);
                var targetPos = new Vec3(-(this.node.width / 2 - GridConfig_1.GridConfig.marginX - blockSize.x / 2) + blockSize.x * x, (this.node.height / 2 - GridConfig_1.GridConfig.marginX - blockSize.y / 2) - blockSize.y * y, 0);
                block === null || block === void 0 ? void 0 : block.node.setPosition(targetPos);
            }
        }
    };
    Board.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('board-change-size', this.onResize, this);
        EventBus_1.EventBus.off('block-clicked', this.onBlockClicked, this);
    };
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "extraBlockPrefab", void 0);
    __decorate([
        property
    ], Board.prototype, "width", void 0);
    __decorate([
        property
    ], Board.prototype, "height", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWtGO0FBQ2xGLGlDQUFvRTtBQUNwRSx1Q0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMseURBQW9EO0FBRXBELDJDQUFzQztBQUU5QixJQUFBLElBQUksR0FBSyxFQUFFLEtBQVAsQ0FBUTtBQUNkLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBd0lDO1FBdElHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBZ0kvQixDQUFDO0lBMUhhLHNCQUFNLEdBQWhCO1FBQ0ksbUJBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsbUJBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMscUJBQUssR0FBZjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxx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dEM7U0FDSjtJQUNMLENBQUM7SUFDUyx5QkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsbUJBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXJJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2U7SUFFbkM7UUFEQyxRQUFRO3dDQUNpQjtJQUUxQjtRQURDLFFBQVE7eUNBQ2tCO0lBUlYsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdJekI7SUFBRCxZQUFDO0NBeElELEFBd0lDLENBeElrQyxFQUFFLENBQUMsU0FBUyxHQXdJOUM7a0JBeElvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmRUeXBlLCBCbG9ja0NsaWNrRXZlbnQsIGlzQmxvY2tLZXksIGlzRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUJsb2NrS2V5LCBnZXRSYW5kb21FeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnIH0gZnJvbSBcIi4vR3JpZENvbmZpZ1wiO1xyXG5pbXBvcnQgTWF0Y2hGaW5kZXIgZnJvbSBcIi4vTWF0Y2hGaW5kZXJcIjtcclxuaW1wb3J0IEJsb2NrRmFjdG9yeSBmcm9tIFwiLi9CbG9ja0ZhY3RvcnlcIjtcclxuaW1wb3J0IEV4dHJhQmxvY2tIYW5kbGVyIGZyb20gXCIuL0V4dHJhQmxvY2tIYW5kbGVyXCI7XHJcbmltcG9ydCBFeHRyYUJsb2NrIGZyb20gXCIuL0V4cnRhQmxvY2tcIjtcclxuaW1wb3J0IEJvYXJkU2l6ZXIgZnJvbSBcIi4vQm9hcmRTaXplclwiO1xyXG5cclxuY29uc3QgeyBWZWMzIH0gPSBjYztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGV4dHJhQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlciA9IDk7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSA5O1xyXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmRUeXBlW11bXTtcclxuICAgIHByaXZhdGUgbWF0Y2hGaW5kZXI6IE1hdGNoRmluZGVyO1xyXG4gICAgcHJpdmF0ZSBibG9ja0ZhY3Rvcnk6IEJsb2NrRmFjdG9yeTtcclxuICAgIHByaXZhdGUgZXh0cmFCbG9ja0hhbmRsZXI6IEV4dHJhQmxvY2tIYW5kbGVyO1xyXG4gICAgcHJpdmF0ZSBibG9ja1NpemVyOiBCb2FyZFNpemVyO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vbignYmxvY2stY2xpY2tlZCcsIHRoaXMub25CbG9ja0NsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50QnVzLm9uKCdib2FyZC1jaGFuZ2Utc2l6ZScsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KHRoaXMuaGVpZ2h0KS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkodGhpcy53aWR0aCkuZmlsbChudWxsKSk7XHJcbiAgICAgICAgdGhpcy5tYXRjaEZpbmRlciA9IG5ldyBNYXRjaEZpbmRlcih0aGlzLmJvYXJkKTtcclxuICAgICAgICB0aGlzLmJsb2NrRmFjdG9yeSA9IG5ldyBCbG9ja0ZhY3RvcnkodGhpcy5ibG9ja1ByZWZhYiwgdGhpcy5leHRyYUJsb2NrUHJlZmFiLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZXh0cmFCbG9ja0hhbmRsZXIgPSBuZXcgRXh0cmFCbG9ja0hhbmRsZXIodGhpcy5ib2FyZCk7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVyID0gbmV3IEJvYXJkU2l6ZXIodGhpcy5ub2RlLCB0aGlzLndpZHRoLCBuZXcgY2MuVmVjMihHcmlkQ29uZmlnLndpZHRoLCBHcmlkQ29uZmlnLmhlaWdodCkpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrU2l6ZXIuc2V0QmxvY2tTaXplKHRoaXMuYmxvY2tTaXplci5jYWxjdWxhdGVCbG9ja1NpemUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYmxvY2tGYWN0b3J5LmNyZWF0ZUJsb2NrKHksIHgsIGdldFJhbmRvbUJsb2NrS2V5KCksIGJsb2NrU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCbG9jayh5LCB4LCBibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBuZXcgVmVjMyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLSh0aGlzLm5vZGUud2lkdGggLyAyIC0gR3JpZENvbmZpZy5tYXJnaW5YIC0gYmxvY2tTaXplLnggLyAyKSArIGJsb2NrU2l6ZS54ICogeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JpZENvbmZpZy5iZWhpbmRTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrUG9zaXRpb24oeSwgeCwgYmxvY2tTaXplKVxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZhbGxBbmltYXRpb24oc3RhcnRQb3MsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZhbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMuaGVpZ2h0IC0gMjsgeSA+PSAwOyB5LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFt5XVt4XTtcclxuICAgICAgICAgICAgICAgIGlmICghYmxvY2spIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1kgPSB5O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1kgKyAxIDwgdGhpcy5oZWlnaHQgJiYgdGhpcy5ib2FyZFtuZXdZICsgMV1beF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdZKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WSAhPT0geSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QmxvY2sobmV3WSwgeCwgYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1Bvc2l0aW9uKG5ld1ksIHgsIGJsb2NrU2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICBibG9jay5mYWxsVG8odGFyZ2V0UG9zLCAwLjQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlc3Ryb3lHcm91cChibG9ja3M6IEJvYXJkVHlwZVtdKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnYmxvY2tzLWRlc3Ryb3knLCBibG9ja3MubGVuZ3RoKTtcclxuICAgICAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbYmxvY2suZ2V0Um93KCldW2Jsb2NrLmdldENvbCgpXSA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mYWxsKCk7XHJcbiAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uQmxvY2tDbGlja2VkKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc0Jsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xyXG4gICAgICAgICAgICBsZXQgc2FtZUJsb2NrczogQm9hcmRUeXBlW10gPSBbXTtcclxuICAgICAgICAgICAgc2FtZUJsb2NrcyA9IHRoaXMubWF0Y2hGaW5kZXIuZmluZChkYXRhLnJvdywgZGF0YS5jb2wsIGRhdGEuYmxvY2tUeXBlKTtcclxuICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ3N0ZXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYW1lQmxvY2tzLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGdyYWRlVG9FeHRyYUJsb2NrKGRhdGEucm93LCBkYXRhLmNvbCwgc2FtZUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lHcm91cChzYW1lQmxvY2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNFeHRyYUJsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3kgPSB0aGlzLmV4dHJhQmxvY2tIYW5kbGVyLmhhbmRsZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95R3JvdXAoYmxvY2tGb3JEZXN0cm95KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZ3JhZGVUb0V4dHJhQmxvY2socm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja3NGb3JEZXN0cm95OiBCb2FyZFR5cGVbXSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQmxvY2socm93LCBjb2wpO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGxldCBleHRyYUJsb2NrOiBFeHRyYUJsb2NrID0gbnVsbDtcclxuICAgICAgICBpZiAoYmxvY2tzRm9yRGVzdHJveS5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgJ2JvbWJfbWF4JywgYmxvY2tTaXplKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShbJ2JvbWJfbWF4J10pLCBibG9ja1NpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEJsb2NrKHJvdywgY29sLCBleHRyYUJsb2NrKTtcclxuICAgICAgICBleHRyYUJsb2NrLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ibG9ja1NpemVyLmdldEJsb2NrUG9zaXRpb24ocm93LCBjb2wsIGJsb2NrU2l6ZSkpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBibG9ja3NGb3JEZXN0cm95LmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5nZXRSb3coKSA9PT0gcm93ICYmIGJsb2NrLmdldENvbCgpID09PSBjb2xcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSBibG9ja3NGb3JEZXN0cm95LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlbGV0ZUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XHJcbiAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrOiBCb2FyZFR5cGUpOiB2b2lkIHtcclxuICAgICAgICBibG9jay5zZXRSb3dDb2wocm93LCBjb2wpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5ib2FyZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplci5zZXRCbG9ja1NpemUodGhpcy5ibG9ja1NpemVyLmNhbGN1bGF0ZUJsb2NrU2l6ZSgpKTtcclxuICAgICAgICBjb25zdCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZXIuZ2V0QmxvY2tTaXplKClcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFt5XVt4XTtcclxuICAgICAgICAgICAgICAgIGJsb2NrPy5zZXRTaXplKGJsb2NrU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSBuZXcgVmVjMyhcclxuICAgICAgICAgICAgICAgICAgICAtKHRoaXMubm9kZS53aWR0aCAvIDIgLSBHcmlkQ29uZmlnLm1hcmdpblggLSBibG9ja1NpemUueCAvIDIpICsgYmxvY2tTaXplLnggKiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIEdyaWRDb25maWcubWFyZ2luWCAtIGJsb2NrU2l6ZS55IC8gMikgLSBibG9ja1NpemUueSAqIHksXHJcbiAgICAgICAgICAgICAgICAgICAgMCk7XHJcbiAgICAgICAgICAgICAgICBibG9jaz8ubm9kZS5zZXRQb3NpdGlvbih0YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2JvYXJkLWNoYW5nZS1zaXplJywgdGhpcy5vblJlc2l6ZSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdibG9jay1jbGlja2VkJywgdGhpcy5vbkJsb2NrQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19