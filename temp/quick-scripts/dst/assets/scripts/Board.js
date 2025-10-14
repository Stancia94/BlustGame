
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
var Utils_1 = require("./Utils");
var EventBus_1 = require("./EventBus");
var GridConfig_1 = require("./GridConfig");
var BlockFactory_1 = require("./BlockFactory");
var BoardSizer_1 = require("./BoardSizer");
var BlockClickHandler_1 = require("./BlockClickHandler");
var ExtraBlockClickHandler_1 = require("./ExtraBlockClickHandler");
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
        this.blockFactory = new BlockFactory_1.default(this.blockPrefab, this.extraBlockPrefab, this.node);
        this.extraBlockHandler = new ExtraBlockClickHandler_1.default(this.board);
        this.blockHandler = new BlockClickHandler_1.BlockClickHandler(this.board);
        this.blockHandler.setNext(this.extraBlockHandler);
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
    Board.prototype.onBlockClicked = function (data) {
        var _this = this;
        var commands = [];
        this.blockHandler.handle(data, commands);
        console.log(commands);
        commands.forEach(function (comand) { return comand.execute(_this); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQTRDO0FBQzVDLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUd0Qyx5REFBd0Q7QUFDeEQsbUVBQThEO0FBRXRELElBQUEsSUFBSSxHQUFLLEVBQUUsS0FBUCxDQUFRO0FBQ2QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF3R0M7UUF0R0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFnRy9CLENBQUM7SUExRmEsc0JBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUyxxQkFBSyxHQUFmO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLENBQUMsSUFB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QVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMvRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyx1QkFBVSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMvRSxDQUFDLENBQUMsQ0FBQztnQkFDUCxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7YUFDdEM7U0FDSjtJQUNMLENBQUM7SUFDUyx5QkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsbUJBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXJHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2U7SUFFbkM7UUFEQyxRQUFRO3dDQUNpQjtJQUUxQjtRQURDLFFBQVE7eUNBQ2tCO0lBUlYsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdHekI7SUFBRCxZQUFDO0NBeEdELEFBd0dDLENBeEdrQyxFQUFFLENBQUMsU0FBUyxHQXdHOUM7a0JBeEdvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmRUeXBlLCBCbG9ja0NsaWNrRXZlbnQgfSBmcm9tIFwiLi9UeXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21CbG9ja0tleSB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcclxuaW1wb3J0IEJsb2NrRmFjdG9yeSBmcm9tIFwiLi9CbG9ja0ZhY3RvcnlcIjtcclxuaW1wb3J0IEJvYXJkU2l6ZXIgZnJvbSBcIi4vQm9hcmRTaXplclwiO1xyXG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSBcIi4vSGFuZGxlckludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBCb2FyZENvbW1hbmQgfSBmcm9tIFwiLi9Db21tYW5kc1wiO1xyXG5pbXBvcnQgeyBCbG9ja0NsaWNrSGFuZGxlciB9IGZyb20gXCIuL0Jsb2NrQ2xpY2tIYW5kbGVyXCI7XHJcbmltcG9ydCBFeHRyYUJsb2NrQ2xpY2tIYW5kbGVyIGZyb20gXCIuL0V4dHJhQmxvY2tDbGlja0hhbmRsZXJcIjtcclxuXHJcbmNvbnN0IHsgVmVjMyB9ID0gY2M7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBibG9ja1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBleHRyYUJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIgPSA5O1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyID0gOTtcclxuICAgIHB1YmxpYyBib2FyZDogQm9hcmRUeXBlW11bXTtcclxuICAgIHB1YmxpYyBibG9ja0ZhY3Rvcnk6IEJsb2NrRmFjdG9yeTtcclxuICAgIHByaXZhdGUgZXh0cmFCbG9ja0hhbmRsZXI6IEhhbmRsZXI7XHJcbiAgICBwcml2YXRlIGJsb2NrSGFuZGxlcjogSGFuZGxlcjtcclxuICAgIHB1YmxpYyBibG9ja1NpemVyOiBCb2FyZFNpemVyO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vbignYmxvY2stY2xpY2tlZCcsIHRoaXMub25CbG9ja0NsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50QnVzLm9uKCdib2FyZC1jaGFuZ2Utc2l6ZScsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KHRoaXMuaGVpZ2h0KS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkodGhpcy53aWR0aCkuZmlsbChudWxsKSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0ZhY3RvcnkgPSBuZXcgQmxvY2tGYWN0b3J5KHRoaXMuYmxvY2tQcmVmYWIsIHRoaXMuZXh0cmFCbG9ja1ByZWZhYiwgdGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5leHRyYUJsb2NrSGFuZGxlciA9IG5ldyBFeHRyYUJsb2NrQ2xpY2tIYW5kbGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tIYW5kbGVyID0gbmV3IEJsb2NrQ2xpY2tIYW5kbGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tIYW5kbGVyLnNldE5leHQodGhpcy5leHRyYUJsb2NrSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplciA9IG5ldyBCb2FyZFNpemVyKHRoaXMubm9kZSwgdGhpcy53aWR0aCwgbmV3IGNjLlZlYzIoR3JpZENvbmZpZy53aWR0aCwgR3JpZENvbmZpZy5oZWlnaHQpKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja1NpemVyLnNldEJsb2NrU2l6ZSh0aGlzLmJsb2NrU2l6ZXIuY2FsY3VsYXRlQmxvY2tTaXplKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmaWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYmxvY2tGYWN0b3J5LmNyZWF0ZUJsb2NrKHksIHgsIGdldFJhbmRvbUJsb2NrS2V5KCksIGJsb2NrU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCbG9jayh5LCB4LCBibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBuZXcgVmVjMyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLSh0aGlzLm5vZGUud2lkdGggLyAyIC0gR3JpZENvbmZpZy5tYXJnaW5YIC0gYmxvY2tTaXplLnggLyAyKSArIGJsb2NrU2l6ZS54ICogeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgR3JpZENvbmZpZy5iZWhpbmRTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrUG9zaXRpb24oeSwgeCwgYmxvY2tTaXplKVxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZhbGxBbmltYXRpb24oc3RhcnRQb3MsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZXIuZ2V0QmxvY2tTaXplKClcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAyOyB5ID49IDA7IHktLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFibG9jaykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3WSArIDEgPCB0aGlzLmhlaWdodCAmJiB0aGlzLmJvYXJkW25ld1kgKyAxXVt4XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1krKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdZICE9PSB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCbG9jayhuZXdZLCB4LCBibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrUG9zaXRpb24obmV3WSwgeCwgYmxvY2tTaXplKVxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZhbGxUbyh0YXJnZXRQb3MsIDAuNClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgb25CbG9ja0NsaWNrZWQoZGF0YTogQmxvY2tDbGlja0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZHM6IEJvYXJkQ29tbWFuZFtdID0gW107XHJcbiAgICAgICAgdGhpcy5ibG9ja0hhbmRsZXIuaGFuZGxlKGRhdGEsIGNvbW1hbmRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tYW5kcylcclxuICAgICAgICBjb21tYW5kcy5mb3JFYWNoKChjb21hbmQpID0+IGNvbWFuZC5leGVjdXRlKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlbGV0ZUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XHJcbiAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2s6IEJvYXJkVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGJsb2NrLnNldFJvd0NvbChyb3csIGNvbCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBibG9jaztcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJvYXJkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVyLnNldEJsb2NrU2l6ZSh0aGlzLmJsb2NrU2l6ZXIuY2FsY3VsYXRlQmxvY2tTaXplKCkpO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgICAgICAgICAgICAgYmxvY2s/LnNldFNpemUoYmxvY2tTaXplKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgIC0odGhpcy5ub2RlLndpZHRoIC8gMiAtIEdyaWRDb25maWcubWFyZ2luWCAtIGJsb2NrU2l6ZS54IC8gMikgKyBibG9ja1NpemUueCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMubm9kZS5oZWlnaHQgLyAyIC0gR3JpZENvbmZpZy5tYXJnaW5YIC0gYmxvY2tTaXplLnkgLyAyKSAtIGJsb2NrU2l6ZS55ICogeSxcclxuICAgICAgICAgICAgICAgICAgICAwKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrPy5ub2RlLnNldFBvc2l0aW9uKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9mZignYm9hcmQtY2hhbmdlLXNpemUnLCB0aGlzLm9uUmVzaXplLCB0aGlzKTtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2NrLWNsaWNrZWQnLCB0aGlzLm9uQmxvY2tDbGlja2VkLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=