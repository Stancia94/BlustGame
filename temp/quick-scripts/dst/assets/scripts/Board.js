
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
        commands.forEach(function (comand) { return comand.execute(_this); });
        this.fall();
        this.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQTRDO0FBQzVDLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUd0Qyx5REFBd0Q7QUFDeEQsbUVBQThEO0FBRXRELElBQUEsSUFBSSxHQUFLLEVBQUUsS0FBUCxDQUFRO0FBQ2QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF5R0M7UUF2R0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFpRy9CLENBQUM7SUEzRmEsc0JBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUyxxQkFBSyxHQUFmO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLENBQUMsSUFB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QUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9FLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9FLENBQUMsQ0FBQyxDQUFDO2dCQUNQLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUN0QztTQUNKO0lBQ0wsQ0FBQztJQUNTLHlCQUFTLEdBQW5CO1FBQ0ksbUJBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBdEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDZTtJQUVuQztRQURDLFFBQVE7d0NBQ2lCO0lBRTFCO1FBREMsUUFBUTt5Q0FDa0I7SUFSVixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBeUd6QjtJQUFELFlBQUM7Q0F6R0QsQUF5R0MsQ0F6R2tDLEVBQUUsQ0FBQyxTQUFTLEdBeUc5QztrQkF6R29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZFR5cGUsIEJsb2NrQ2xpY2tFdmVudCB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUJsb2NrS2V5IH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnIH0gZnJvbSBcIi4vR3JpZENvbmZpZ1wiO1xyXG5pbXBvcnQgQmxvY2tGYWN0b3J5IGZyb20gXCIuL0Jsb2NrRmFjdG9yeVwiO1xyXG5pbXBvcnQgQm9hcmRTaXplciBmcm9tIFwiLi9Cb2FyZFNpemVyXCI7XHJcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tIFwiLi9IYW5kbGVySW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJvYXJkQ29tbWFuZCB9IGZyb20gXCIuL0NvbW1hbmRzXCI7XHJcbmltcG9ydCB7IEJsb2NrQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vQmxvY2tDbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IEV4dHJhQmxvY2tDbGlja0hhbmRsZXIgZnJvbSBcIi4vRXh0cmFCbG9ja0NsaWNrSGFuZGxlclwiO1xyXG5cclxuY29uc3QgeyBWZWMzIH0gPSBjYztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGV4dHJhQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlciA9IDk7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSA5O1xyXG4gICAgcHVibGljIGJvYXJkOiBCb2FyZFR5cGVbXVtdO1xyXG4gICAgcHVibGljIGJsb2NrRmFjdG9yeTogQmxvY2tGYWN0b3J5O1xyXG4gICAgcHJpdmF0ZSBleHRyYUJsb2NrSGFuZGxlcjogSGFuZGxlcjtcclxuICAgIHByaXZhdGUgYmxvY2tIYW5kbGVyOiBIYW5kbGVyO1xyXG4gICAgcHVibGljIGJsb2NrU2l6ZXI6IEJvYXJkU2l6ZXI7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9uKCdibG9jay1jbGlja2VkJywgdGhpcy5vbkJsb2NrQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2JvYXJkLWNoYW5nZS1zaXplJywgdGhpcy5vblJlc2l6ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5oZWlnaHQpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLndpZHRoKS5maWxsKG51bGwpKTtcclxuICAgICAgICB0aGlzLmJsb2NrRmFjdG9yeSA9IG5ldyBCbG9ja0ZhY3RvcnkodGhpcy5ibG9ja1ByZWZhYiwgdGhpcy5leHRyYUJsb2NrUHJlZmFiLCB0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLmV4dHJhQmxvY2tIYW5kbGVyID0gbmV3IEV4dHJhQmxvY2tDbGlja0hhbmRsZXIodGhpcy5ib2FyZCk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0hhbmRsZXIgPSBuZXcgQmxvY2tDbGlja0hhbmRsZXIodGhpcy5ib2FyZCk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0hhbmRsZXIuc2V0TmV4dCh0aGlzLmV4dHJhQmxvY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVyID0gbmV3IEJvYXJkU2l6ZXIodGhpcy5ub2RlLCB0aGlzLndpZHRoLCBuZXcgY2MuVmVjMihHcmlkQ29uZmlnLndpZHRoLCBHcmlkQ29uZmlnLmhlaWdodCkpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrU2l6ZXIuc2V0QmxvY2tTaXplKHRoaXMuYmxvY2tTaXplci5jYWxjdWxhdGVCbG9ja1NpemUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZpbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlQmxvY2soeSwgeCwgZ2V0UmFuZG9tQmxvY2tLZXkoKSwgYmxvY2tTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJsb2NrKHksIHgsIGJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtKHRoaXMubm9kZS53aWR0aCAvIDIgLSBHcmlkQ29uZmlnLm1hcmdpblggLSBibG9ja1NpemUueCAvIDIpICsgYmxvY2tTaXplLnggKiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmlkQ29uZmlnLmJlaGluZFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSB0aGlzLmJsb2NrU2l6ZXIuZ2V0QmxvY2tQb3NpdGlvbih5LCB4LCBibG9ja1NpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmFsbEFuaW1hdGlvbihzdGFydFBvcywgdGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBmYWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLmhlaWdodCAtIDI7IHkgPj0gMDsgeS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYm9hcmRbeV1beF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2NrKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdZID0geTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdZICsgMSA8IHRoaXMuaGVpZ2h0ICYmIHRoaXMuYm9hcmRbbmV3WSArIDFdW3hdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3WSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1kgIT09IHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3hdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJsb2NrKG5ld1ksIHgsIGJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3MgPSB0aGlzLmJsb2NrU2l6ZXIuZ2V0QmxvY2tQb3NpdGlvbihuZXdZLCB4LCBibG9ja1NpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmFsbFRvKHRhcmdldFBvcywgMC40KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJsb2NrQ2xpY2tlZChkYXRhOiBCbG9ja0NsaWNrRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb21tYW5kczogQm9hcmRDb21tYW5kW10gPSBbXTtcclxuICAgICAgICB0aGlzLmJsb2NrSGFuZGxlci5oYW5kbGUoZGF0YSwgY29tbWFuZHMpO1xyXG4gICAgICAgIGNvbW1hbmRzLmZvckVhY2goKGNvbWFuZCkgPT4gY29tYW5kLmV4ZWN1dGUodGhpcykpXHJcbiAgICAgICAgdGhpcy5mYWxsKCk7XHJcbiAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVsZXRlQmxvY2socm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcclxuICAgICAgICBibG9jay5kZXN0cm95WW91cnNlbGYoKTtcclxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0QmxvY2socm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9jazogQm9hcmRUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgYmxvY2suc2V0Um93Q29sKHJvdywgY29sKTtcclxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm9hcmQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZXIuc2V0QmxvY2tTaXplKHRoaXMuYmxvY2tTaXplci5jYWxjdWxhdGVCbG9ja1NpemUoKSk7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYm9hcmRbeV1beF07XHJcbiAgICAgICAgICAgICAgICBibG9jaz8uc2V0U2l6ZShibG9ja1NpemUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gbmV3IFZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgLSh0aGlzLm5vZGUud2lkdGggLyAyIC0gR3JpZENvbmZpZy5tYXJnaW5YIC0gYmxvY2tTaXplLnggLyAyKSArIGJsb2NrU2l6ZS54ICogeCxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5ub2RlLmhlaWdodCAvIDIgLSBHcmlkQ29uZmlnLm1hcmdpblggLSBibG9ja1NpemUueSAvIDIpIC0gYmxvY2tTaXplLnkgKiB5LFxyXG4gICAgICAgICAgICAgICAgICAgIDApO1xyXG4gICAgICAgICAgICAgICAgYmxvY2s/Lm5vZGUuc2V0UG9zaXRpb24odGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdib2FyZC1jaGFuZ2Utc2l6ZScsIHRoaXMub25SZXNpemUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50QnVzLm9mZignYmxvY2stY2xpY2tlZCcsIHRoaXMub25CbG9ja0NsaWNrZWQsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==