"use strict";
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