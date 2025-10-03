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
        var extraBlock = this.blockFactory.createExtraBlock(row, col, Utils_1.getRandomExtraBlockKey());
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