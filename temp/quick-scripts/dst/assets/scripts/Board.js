
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
                    var startPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, GridConfig_1.GridConfig.behindScreen);
                    var targetPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, (this.node.height / 2 - blockSize.y) - blockSize.y * y, 0);
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
                    var targetPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, (this.node.height / 2 - blockSize.y) - blockSize.y * newY, 0);
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
        extraBlock.node.setPosition(new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * col, (this.node.height / 2 - blockSize.y) - blockSize.y * row, 0));
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
                var targetPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, (this.node.height / 2 - blockSize.y) - blockSize.y * y, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWtGO0FBQ2xGLGlDQUFvRTtBQUNwRSx1Q0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMseURBQW9EO0FBRXBELDJDQUFzQztBQUU5QixJQUFBLElBQUksR0FBSyxFQUFFLEtBQVAsQ0FBUTtBQUNkLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBaUpDO1FBL0lHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBMkkvQixDQUFDO0lBcklhLHNCQUFNLEdBQWhCO1FBQ0ksbUJBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsbUJBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMscUJBQUssR0FBZjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxx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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQzFCLElBQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDdEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUN0RCxDQUFDLENBQUMsQ0FBQztnQkFDUCxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7YUFDdEM7U0FDSjtJQUNMLENBQUM7SUFDUyx5QkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsbUJBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTlJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2U7SUFKbEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlKekI7SUFBRCxZQUFDO0NBakpELEFBaUpDLENBakprQyxFQUFFLENBQUMsU0FBUyxHQWlKOUM7a0JBakpvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmRUeXBlLCBCbG9ja0NsaWNrRXZlbnQsIGlzQmxvY2tLZXksIGlzRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUJsb2NrS2V5LCBnZXRSYW5kb21FeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnIH0gZnJvbSBcIi4vR3JpZENvbmZpZ1wiO1xyXG5pbXBvcnQgTWF0Y2hGaW5kZXIgZnJvbSBcIi4vTWF0Y2hGaW5kZXJcIjtcclxuaW1wb3J0IEJsb2NrRmFjdG9yeSBmcm9tIFwiLi9CbG9ja0ZhY3RvcnlcIjtcclxuaW1wb3J0IEV4dHJhQmxvY2tIYW5kbGVyIGZyb20gXCIuL0V4dHJhQmxvY2tIYW5kbGVyXCI7XHJcbmltcG9ydCBFeHRyYUJsb2NrIGZyb20gXCIuL0V4cnRhQmxvY2tcIjtcclxuaW1wb3J0IEJvYXJkU2l6ZXIgZnJvbSBcIi4vQm9hcmRTaXplclwiO1xyXG5cclxuY29uc3QgeyBWZWMzIH0gPSBjYztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGV4dHJhQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIgPSA5O1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlciA9IDk7XHJcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZFR5cGVbXVtdO1xyXG4gICAgcHJpdmF0ZSBtYXRjaEZpbmRlcjogTWF0Y2hGaW5kZXI7XHJcbiAgICBwcml2YXRlIGJsb2NrRmFjdG9yeTogQmxvY2tGYWN0b3J5O1xyXG4gICAgcHJpdmF0ZSBleHRyYUJsb2NrSGFuZGxlcjogRXh0cmFCbG9ja0hhbmRsZXI7XHJcbiAgICBwcml2YXRlIGJsb2NrU2l6ZXI6IEJvYXJkU2l6ZXI7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9uKCdibG9jay1jbGlja2VkJywgdGhpcy5vbkJsb2NrQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2JvYXJkLWNoYW5nZS1zaXplJywgdGhpcy5vblJlc2l6ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5oZWlnaHQpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLndpZHRoKS5maWxsKG51bGwpKTtcclxuICAgICAgICB0aGlzLm1hdGNoRmluZGVyID0gbmV3IE1hdGNoRmluZGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tGYWN0b3J5ID0gbmV3IEJsb2NrRmFjdG9yeSh0aGlzLmJsb2NrUHJlZmFiLCB0aGlzLmV4dHJhQmxvY2tQcmVmYWIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5leHRyYUJsb2NrSGFuZGxlciA9IG5ldyBFeHRyYUJsb2NrSGFuZGxlcih0aGlzLmJvYXJkKTtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZXIgPSBuZXcgQm9hcmRTaXplcih0aGlzLm5vZGUsIHRoaXMud2lkdGgsIG5ldyBjYy5WZWMyKEdyaWRDb25maWcud2lkdGgsIEdyaWRDb25maWcuaGVpZ2h0KSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaXplci5zZXRCbG9ja1NpemUodGhpcy5ibG9ja1NpemVyLmNhbGN1bGF0ZUJsb2NrU2l6ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlQmxvY2soeSwgeCwgZ2V0UmFuZG9tQmxvY2tLZXkoKSwgYmxvY2tTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJsb2NrKHksIHgsIGJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtKHRoaXMubm9kZS53aWR0aCAvIDIgLSBibG9ja1NpemUueCkgKyBibG9ja1NpemUueCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyaWRDb25maWcuYmVoaW5kU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtKHRoaXMubm9kZS53aWR0aCAvIDIgLSBibG9ja1NpemUueCkgKyBibG9ja1NpemUueCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIGJsb2NrU2l6ZS55KSAtIGJsb2NrU2l6ZS55ICogeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmFsbEFuaW1hdGlvbihzdGFydFBvcywgdGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZmFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZXIuZ2V0QmxvY2tTaXplKClcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAyOyB5ID49IDA7IHktLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFibG9jaykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3WSArIDEgPCB0aGlzLmhlaWdodCAmJiB0aGlzLmJvYXJkW25ld1kgKyAxXVt4XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1krKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdZICE9PSB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCbG9jayhuZXdZLCB4LCBibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gbmV3IFZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0odGhpcy5ub2RlLndpZHRoIC8gMiAtIGJsb2NrU2l6ZS54KSArIGJsb2NrU2l6ZS54ICogeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubm9kZS5oZWlnaHQgLyAyIC0gYmxvY2tTaXplLnkpIC0gYmxvY2tTaXplLnkgKiBuZXdZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9jay5mYWxsVG8odGFyZ2V0UG9zLCAwLjQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlc3Ryb3lHcm91cChibG9ja3M6IEJvYXJkVHlwZVtdKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnYmxvY2tzLWRlc3Ryb3knLCBibG9ja3MubGVuZ3RoKTtcclxuICAgICAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbYmxvY2suZ2V0Um93KCldW2Jsb2NrLmdldENvbCgpXSA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mYWxsKCk7XHJcbiAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uQmxvY2tDbGlja2VkKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc0Jsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xyXG4gICAgICAgICAgICBsZXQgc2FtZUJsb2NrczogQm9hcmRUeXBlW10gPSBbXTtcclxuICAgICAgICAgICAgc2FtZUJsb2NrcyA9IHRoaXMubWF0Y2hGaW5kZXIuZmluZChkYXRhLnJvdywgZGF0YS5jb2wsIGRhdGEuYmxvY2tUeXBlKTtcclxuICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ3N0ZXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYW1lQmxvY2tzLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGdyYWRlVG9FeHRyYUJsb2NrKGRhdGEucm93LCBkYXRhLmNvbCwgc2FtZUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lHcm91cChzYW1lQmxvY2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNFeHRyYUJsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3kgPSB0aGlzLmV4dHJhQmxvY2tIYW5kbGVyLmhhbmRsZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95R3JvdXAoYmxvY2tGb3JEZXN0cm95KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZ3JhZGVUb0V4dHJhQmxvY2socm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja3NGb3JEZXN0cm95OiBCb2FyZFR5cGVbXSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQmxvY2socm93LCBjb2wpO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGxldCBleHRyYUJsb2NrOiBFeHRyYUJsb2NrID0gbnVsbDtcclxuICAgICAgICBpZiAoYmxvY2tzRm9yRGVzdHJveS5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgJ2JvbWJfbWF4JywgYmxvY2tTaXplKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShbJ2JvbWJfbWF4J10pLCBibG9ja1NpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEJsb2NrKHJvdywgY29sLCBleHRyYUJsb2NrKTtcclxuICAgICAgICBleHRyYUJsb2NrLm5vZGUuc2V0UG9zaXRpb24obmV3IFZlYzMoXHJcbiAgICAgICAgICAgIC0odGhpcy5ub2RlLndpZHRoIC8gMiAtIGJsb2NrU2l6ZS54KSArIGJsb2NrU2l6ZS54ICogY29sLFxyXG4gICAgICAgICAgICAodGhpcy5ub2RlLmhlaWdodCAvIDIgLSBibG9ja1NpemUueSkgLSBibG9ja1NpemUueSAqIHJvdyxcclxuICAgICAgICAgICAgMCkpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBibG9ja3NGb3JEZXN0cm95LmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5nZXRSb3coKSA9PT0gcm93ICYmIGJsb2NrLmdldENvbCgpID09PSBjb2xcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSBibG9ja3NGb3JEZXN0cm95LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlbGV0ZUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XHJcbiAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrOiBCb2FyZFR5cGUpOiB2b2lkIHtcclxuICAgICAgICBibG9jay5zZXRSb3dDb2wocm93LCBjb2wpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5ib2FyZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZXIuc2V0QmxvY2tTaXplKHRoaXMuYmxvY2tTaXplci5jYWxjdWxhdGVCbG9ja1NpemUoKSk7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYm9hcmRbeV1beF07XHJcbiAgICAgICAgICAgICAgICBibG9jaz8uc2V0U2l6ZShibG9ja1NpemUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gbmV3IFZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgLSh0aGlzLm5vZGUud2lkdGggLyAyIC0gYmxvY2tTaXplLngpICsgYmxvY2tTaXplLnggKiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIGJsb2NrU2l6ZS55KSAtIGJsb2NrU2l6ZS55ICogeSxcclxuICAgICAgICAgICAgICAgICAgICAwKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrPy5ub2RlLnNldFBvc2l0aW9uKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9mZignYm9hcmQtY2hhbmdlLXNpemUnLCB0aGlzLm9uUmVzaXplLCB0aGlzKTtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2NrLWNsaWNrZWQnLCB0aGlzLm9uQmxvY2tDbGlja2VkLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=