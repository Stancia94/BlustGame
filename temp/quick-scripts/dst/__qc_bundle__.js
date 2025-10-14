
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/AudioManager');
require('./assets/scripts/Block');
require('./assets/scripts/BlockClickHandler');
require('./assets/scripts/BlockFactory');
require('./assets/scripts/Board');
require('./assets/scripts/BoardSizer');
require('./assets/scripts/Commands');
require('./assets/scripts/EventBus');
require('./assets/scripts/ExrtaBlock');
require('./assets/scripts/ExtraBlockClickHandler');
require('./assets/scripts/GameManager');
require('./assets/scripts/GridConfig');
require('./assets/scripts/HandlerInterface');
require('./assets/scripts/LimitNodeSize');
require('./assets/scripts/MatchFinder');
require('./assets/scripts/ResultScreen');
require('./assets/scripts/ScoreManager');
require('./assets/scripts/StartGameScript');
require('./assets/scripts/Types');
require('./assets/scripts/Utils');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BlockFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd87fVJhNtJvLCKKnzme0Aa', 'BlockFactory');
// scripts/BlockFactory.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = require("./Block");
var ExrtaBlock_1 = require("./ExrtaBlock");
var BlockFactory = /** @class */ (function () {
    function BlockFactory(blockPrefab, extraBlockPrefab, parent) {
        this.blockPrefab = blockPrefab;
        this.extraBlockPrefab = extraBlockPrefab;
        this.parent = parent;
    }
    BlockFactory.prototype.createBlock = function (row, col, blockType, size) {
        var block = cc.instantiate(this.blockPrefab);
        var blockComp = block.getComponent(Block_1.default);
        blockComp.init(row, col, blockType, size);
        this.parent.addChild(block);
        return blockComp;
    };
    BlockFactory.prototype.createExtraBlock = function (row, col, blockType, size) {
        var block = cc.instantiate(this.extraBlockPrefab);
        var blockComp = block.getComponent(ExrtaBlock_1.default);
        blockComp.init(row, col, blockType, size);
        this.parent.addChild(block);
        return blockComp;
    };
    return BlockFactory;
}());
exports.default = BlockFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2tGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTRCO0FBQzVCLDJDQUFzQztBQUd0QztJQUNJLHNCQUNZLFdBQXNCLEVBQ3RCLGdCQUEyQixFQUMzQixNQUFlO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBSSxDQUFDO0lBRXpCLGtDQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBbUIsRUFBRSxJQUFjO1FBQzVFLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7UUFDNUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBd0IsRUFBRSxJQUFjO1FBQ3RGLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgRXh0cmFCbG9jayBmcm9tIFwiLi9FeHJ0YUJsb2NrXCI7XG5pbXBvcnQgeyBCbG9ja0tleSwgRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYmxvY2tQcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgcHJpdmF0ZSBleHRyYUJsb2NrUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIHByaXZhdGUgcGFyZW50OiBjYy5Ob2RlKSB7IH1cblxuICAgIHB1YmxpYyBjcmVhdGVCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrVHlwZTogQmxvY2tLZXksIHNpemU/OiBjYy5WZWMyKTogQmxvY2sge1xuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xuICAgICAgICBjb25zdCBibG9ja0NvbXAgPSBibG9jay5nZXRDb21wb25lbnQoQmxvY2spO1xuICAgICAgICBibG9ja0NvbXAuaW5pdChyb3csIGNvbCwgYmxvY2tUeXBlLCBzaXplKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGQoYmxvY2spO1xuICAgICAgICByZXR1cm4gYmxvY2tDb21wO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVFeHRyYUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2tUeXBlOiBFeHRyYUJsb2NrS2V5LCBzaXplPzogY2MuVmVjMik6IEV4dHJhQmxvY2sge1xuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXh0cmFCbG9ja1ByZWZhYik7XG4gICAgICAgIGNvbnN0IGJsb2NrQ29tcCA9IGJsb2NrLmdldENvbXBvbmVudChFeHRyYUJsb2NrKTtcbiAgICAgICAgYmxvY2tDb21wLmluaXQocm93LCBjb2wsIGJsb2NrVHlwZSwgc2l6ZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29tcDtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ExrtaBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3e44F1XqVA/rIUI4wg3QZK', 'ExrtaBlock');
// scripts/ExrtaBlock.ts

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
var Block_1 = require("./Block");
var Types_1 = require("./Types");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExtraBlock = /** @class */ (function (_super) {
    __extends(ExtraBlock, _super);
    function ExtraBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.blockSpriteNode = null;
        _this.smokeNode = null;
        _this.blockType = 'bomb';
        return _this;
    }
    ExtraBlock.prototype.updateVisual = function () {
        var spriteFrame = this.atlas.getSpriteFrame(Types_1.extraBlock[this.blockType]);
        var sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], ExtraBlock.prototype, "atlas", void 0);
    __decorate([
        property(cc.Node)
    ], ExtraBlock.prototype, "blockSpriteNode", void 0);
    __decorate([
        property(cc.Node)
    ], ExtraBlock.prototype, "smokeNode", void 0);
    ExtraBlock = __decorate([
        ccclass
    ], ExtraBlock);
    return ExtraBlock;
}(Block_1.default));
exports.default = ExtraBlock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXhydGFCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsaUNBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFvQjtJQUE1RDtRQUFBLHFFQWNDO1FBWkcsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQWtCLE1BQU0sQ0FBQzs7SUFPaEQsQ0FBQztJQUxhLGlDQUFZLEdBQXRCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBTlQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWM5QjtJQUFELGlCQUFDO0NBZEQsQUFjQyxDQWR1QyxlQUFLLEdBYzVDO2tCQWRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgeyBleHRyYUJsb2NrLCBFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYUJsb2NrIGV4dGVuZHMgQmxvY2s8RXh0cmFCbG9ja0tleT4ge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBhdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb2NrU3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYmxvY2tUeXBlOiBFeHRyYUJsb2NrS2V5ID0gJ2JvbWInO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZpc3VhbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLmF0bGFzLmdldFNwcml0ZUZyYW1lKGV4dHJhQmxvY2tbdGhpcy5ibG9ja1R5cGVdKTtcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BoardSizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77005lE8T5JDpHIBsEMlK6+', 'BoardSizer');
// scripts/BoardSizer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridConfig_1 = require("./GridConfig");
var BoardSizer = /** @class */ (function () {
    function BoardSizer(container, columns, originalBlockSize) {
        this.container = container;
        this.columns = columns;
        this.originalBlockSize = originalBlockSize;
    }
    BoardSizer.prototype.calculateBlockSize = function () {
        var blockWidth = (this.container.width - GridConfig_1.GridConfig.marginX * 2) / this.columns;
        var blockHeight = blockWidth * (this.originalBlockSize.y / this.originalBlockSize.x);
        return new cc.Vec2(blockWidth, blockHeight);
    };
    BoardSizer.prototype.getBlockPosition = function (row, col, blockSize) {
        return new cc.Vec3(-(this.container.width / 2 - GridConfig_1.GridConfig.marginX - blockSize.x / 2) + blockSize.x * col, (this.container.height / 2 - GridConfig_1.GridConfig.marginX - blockSize.y / 2) - blockSize.y * row, 0);
    };
    BoardSizer.prototype.setBlockSize = function (blockSize) {
        this.blockSize = blockSize;
    };
    BoardSizer.prototype.getBlockSize = function () {
        return this.blockSize;
    };
    return BoardSizer;
}());
exports.default = BoardSizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmRTaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUUxQztJQUdJLG9CQUNZLFNBQWtCLEVBQ2xCLE9BQWUsRUFDZixpQkFBMEI7UUFGMUIsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO0lBQ2xDLENBQUM7SUFDRSx1Q0FBa0IsR0FBekI7UUFDSSxJQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEYsSUFBTSxXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEYsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDTSxxQ0FBZ0IsR0FBdkIsVUFBd0IsR0FBVyxFQUFFLEdBQVcsRUFBRSxTQUFrQjtRQUNoRSxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3RGLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3RGLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNNLGlDQUFZLEdBQW5CLFVBQW9CLFNBQWtCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDTSxpQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRTaXplciB7XG4gICAgcHJpdmF0ZSBibG9ja1NpemU6IGNjLlZlYzJcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbnRhaW5lcjogY2MuTm9kZSxcbiAgICAgICAgcHJpdmF0ZSBjb2x1bW5zOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgb3JpZ2luYWxCbG9ja1NpemU6IGNjLlZlYzIsXG4gICAgKSB7IH1cbiAgICBwdWJsaWMgY2FsY3VsYXRlQmxvY2tTaXplKCk6IGNjLlZlYzIge1xuICAgICAgICBjb25zdCBibG9ja1dpZHRoID0gKHRoaXMuY29udGFpbmVyLndpZHRoIC0gR3JpZENvbmZpZy5tYXJnaW5YICogMikgLyB0aGlzLmNvbHVtbnM7XG4gICAgICAgIGNvbnN0IGJsb2NrSGVpZ2h0ID0gYmxvY2tXaWR0aCAqICh0aGlzLm9yaWdpbmFsQmxvY2tTaXplLnkgLyB0aGlzLm9yaWdpbmFsQmxvY2tTaXplLngpXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMihibG9ja1dpZHRoLCBibG9ja0hlaWdodClcbiAgICB9XG4gICAgcHVibGljIGdldEJsb2NrUG9zaXRpb24ocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja1NpemU6IGNjLlZlYzIpOiBjYy5WZWMzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKFxuICAgICAgICAgICAgLSh0aGlzLmNvbnRhaW5lci53aWR0aCAvIDIgLSBHcmlkQ29uZmlnLm1hcmdpblggLSBibG9ja1NpemUueCAvIDIpICsgYmxvY2tTaXplLnggKiBjb2wsXG4gICAgICAgICAgICAodGhpcy5jb250YWluZXIuaGVpZ2h0IC8gMiAtIEdyaWRDb25maWcubWFyZ2luWCAtIGJsb2NrU2l6ZS55IC8gMikgLSBibG9ja1NpemUueSAqIHJvdyxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHNldEJsb2NrU2l6ZShibG9ja1NpemU6IGNjLlZlYzIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRCbG9ja1NpemUoKTogY2MuVmVjMiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrU2l6ZTtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/EventBus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1031b17tjJOaoSO1zgE7cBe', 'EventBus');
// scripts/EventBus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
exports.EventBus = new cc.EventTarget();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXZlbnRCdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsUUFBQSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRXZlbnRCdXMgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c83dPkm/1MII5N70drOG2A', 'GameManager');
// scripts/GameManager.ts

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
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.victoryScreenPrefab = null;
        _this.lossScreeenPrefab = null;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.onLoad = function () {
        EventBus_1.EventBus.on('gameEnd', this.onGameEnd, this);
    };
    GameManager.prototype.start = function () { };
    GameManager.prototype.onGameEnd = function (isWin) {
        var prefabScreen = isWin ? this.victoryScreenPrefab : this.lossScreeenPrefab;
        var screen = cc.instantiate(prefabScreen);
        screen.parent = cc.find("Canvas");
        screen.setPosition(0, 0, 0);
    };
    GameManager.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('gameEnd', this.onGameEnd, this);
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "victoryScreenPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "lossScreeenPrefab", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbUJDO1FBakJHLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUV0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7O1FBY3BDLGlCQUFpQjtJQUNyQixDQUFDO0lBZGEsNEJBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsMkJBQUssR0FBTCxjQUFVLENBQUM7SUFDSCwrQkFBUyxHQUFqQixVQUFrQixLQUFjO1FBQzVCLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDL0UsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDUywrQkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFmRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNnQjtJQUpuQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUIvQjtJQUFELGtCQUFDO0NBbkJELEFBbUJDLENBbkJ3QyxFQUFFLENBQUMsU0FBUyxHQW1CcEQ7a0JBbkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdmljdG9yeVNjcmVlblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxvc3NTY3JlZWVuUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEV2ZW50QnVzLm9uKCdnYW1lRW5kJywgdGhpcy5vbkdhbWVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICBzdGFydCgpIHsgfVxuICAgIHByaXZhdGUgb25HYW1lRW5kKGlzV2luOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZWZhYlNjcmVlbiA9IGlzV2luID8gdGhpcy52aWN0b3J5U2NyZWVuUHJlZmFiIDogdGhpcy5sb3NzU2NyZWVlblByZWZhYjtcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gY2MuaW5zdGFudGlhdGUocHJlZmFiU2NyZWVuKTtcbiAgICAgICAgc2NyZWVuLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIHNjcmVlbi5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdnYW1lRW5kJywgdGhpcy5vbkdhbWVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GridConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd97d2H/RllICp0630l1lVM1', 'GridConfig');
// scripts/GridConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridConfig = void 0;
exports.GridConfig = {
    width: 100,
    height: 112,
    behindScreen: 600,
    marginX: 40
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN0QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsWUFBWSxFQUFFLEdBQUc7SUFDakIsT0FBTyxFQUFFLEVBQUU7Q0FDZCxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdyaWRDb25maWcgPSB7XHJcbiAgICB3aWR0aDogMTAwLFxyXG4gICAgaGVpZ2h0OiAxMTIsXHJcbiAgICBiZWhpbmRTY3JlZW46IDYwMCxcclxuICAgIG1hcmdpblg6IDQwXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MatchFinder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e055rJKNBLQ7EaexNOmJ4d', 'MatchFinder');
// scripts/MatchFinder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExrtaBlock_1 = require("./ExrtaBlock");
var MatchFinder = /** @class */ (function () {
    function MatchFinder(board) {
        this.board = board;
    }
    MatchFinder.prototype.find = function (row, col, blockType) {
        var _this = this;
        var visited = new Set();
        var result = [];
        var dfs = function (row, col) {
            if (row < 0 || col < 0 || row >= _this.board.length || col >= _this.board[0].length)
                return;
            var block = _this.board[row][col];
            if (!block)
                return;
            if (block instanceof ExrtaBlock_1.default)
                return;
            var key = row + '_' + col;
            if (visited.has(key))
                return;
            visited.add(key);
            if (block.getType() !== blockType)
                return;
            result.push(block);
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };
        dfs(row, col);
        return result;
    };
    return MatchFinder;
}());
exports.default = MatchFinder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWF0Y2hGaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFHdEM7SUFDSSxxQkFBb0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUN4QyxDQUFDO0lBQ0QsMEJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBb0I7UUFBbkQsaUJBb0JDO1FBbkJHLElBQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDbEMsSUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixJQUFNLEdBQUcsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFXO1lBQ2pDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDMUYsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBQ25CLElBQUksS0FBSyxZQUFZLG9CQUFVO2dCQUFFLE9BQU87WUFDeEMsSUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssU0FBUztnQkFBRSxPQUFPO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxrQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFCbG9jayBmcm9tIFwiLi9FeHJ0YUJsb2NrXCI7XG5pbXBvcnQgeyBCbG9ja1R5cGUsIEJvYXJkVHlwZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoRmluZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvYXJkOiBCb2FyZFR5cGVbXVtdKSB7XG4gICAgfVxuICAgIGZpbmQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja1R5cGU6IEJsb2NrVHlwZSk6IEJvYXJkVHlwZVtdIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGNvbnN0IGRmcyA9IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IGNvbCA8IDAgfHwgcm93ID49IHRoaXMuYm9hcmQubGVuZ3RoIHx8IGNvbCA+PSB0aGlzLmJvYXJkWzBdLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICghYmxvY2spIHJldHVybjtcbiAgICAgICAgICAgIGlmIChibG9jayBpbnN0YW5jZW9mIEV4dHJhQmxvY2spIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdyArICdfJyArIGNvbDtcbiAgICAgICAgICAgIGlmICh2aXNpdGVkLmhhcyhrZXkpKSByZXR1cm47XG4gICAgICAgICAgICB2aXNpdGVkLmFkZChrZXkpO1xuICAgICAgICAgICAgaWYgKGJsb2NrLmdldFR5cGUoKSAhPT0gYmxvY2tUeXBlKSByZXR1cm47XG4gICAgICAgICAgICByZXN1bHQucHVzaChibG9jayk7XG4gICAgICAgICAgICBkZnMocm93ICsgMSwgY29sKTtcbiAgICAgICAgICAgIGRmcyhyb3cgLSAxLCBjb2wpO1xuICAgICAgICAgICAgZGZzKHJvdywgY29sICsgMSk7XG4gICAgICAgICAgICBkZnMocm93LCBjb2wgLSAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgZGZzKHJvdywgY29sKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LimitNodeSize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '421e9W0DTpFYI/QjB8ikRPz', 'LimitNodeSize');
// scripts/LimitNodeSize.ts

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
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LimitNodeSize = /** @class */ (function (_super) {
    __extends(LimitNodeSize, _super);
    function LimitNodeSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        _this.maxWidth = 300;
        _this.maxHeight = 300;
        _this.marginX = 50;
        return _this;
    }
    LimitNodeSize.prototype.onLoad = function () {
        cc.view.on('canvas-resize', this.onResize, this);
    };
    LimitNodeSize.prototype.start = function () {
        this.adjustSize();
    };
    LimitNodeSize.prototype.adjustSize = function () {
        if (!this.targetNode)
            return;
        var node = this.targetNode;
        var aspectRatio = node.height / node.width;
        if (cc.winSize.width < node.width) {
            node.width = cc.winSize.width - this.marginX * 2;
            node.height = node.width * aspectRatio;
        }
        else {
            node.width = this.maxWidth;
            node.height = this.maxWidth * aspectRatio;
        }
        EventBus_1.EventBus.emit('board-change-size');
        console.log(node.width);
    };
    LimitNodeSize.prototype.onResize = function () {
        this.adjustSize();
    };
    LimitNodeSize.prototype.onDestroy = function () {
        cc.view.off('canvas-resize', this.onResize, this);
    };
    __decorate([
        property(cc.Node)
    ], LimitNodeSize.prototype, "targetNode", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "maxWidth", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "maxHeight", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "marginX", void 0);
    LimitNodeSize = __decorate([
        ccclass
    ], LimitNodeSize);
    return LimitNodeSize;
}(cc.Component));
exports.default = LimitNodeSize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGltaXROb2RlU2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFvQ0M7UUFqQ0csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUV2QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGFBQU8sR0FBVyxFQUFFLENBQUM7O0lBMkJ6QixDQUFDO0lBMUJhLDhCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNTLGtDQUFVLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzFDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM3QztRQUNELG1CQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNTLGdDQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyxpQ0FBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUUzQjtRQURDLFFBQVE7bURBQ2M7SUFFdkI7UUFEQyxRQUFRO29EQUNlO0lBRXhCO1FBREMsUUFBUTtrREFDWTtJQVRKLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FvQ2pDO0lBQUQsb0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzBDLEVBQUUsQ0FBQyxTQUFTLEdBb0N0RDtrQkFwQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuL0V2ZW50QnVzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pdE5vZGVTaXplIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAzMDA7XG4gICAgQHByb3BlcnR5XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgPSAzMDA7XG4gICAgQHByb3BlcnR5XG4gICAgbWFyZ2luWDogbnVtYmVyID0gNTA7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY2Mudmlldy5vbignY2FudmFzLXJlc2l6ZScsIHRoaXMub25SZXNpemUsIHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRqdXN0U2l6ZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWRqdXN0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldE5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudGFyZ2V0Tm9kZTtcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBub2RlLmhlaWdodCAvIG5vZGUud2lkdGg7XG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgbm9kZS53aWR0aCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGggLSB0aGlzLm1hcmdpblggKiAyO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBub2RlLndpZHRoICogYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy5tYXhXaWR0aDtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5tYXhXaWR0aCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2JvYXJkLWNoYW5nZS1zaXplJylcbiAgICAgICAgY29uc29sZS5sb2cobm9kZS53aWR0aClcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkanVzdFNpemUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY2Mudmlldy5vZmYoJ2NhbnZhcy1yZXNpemUnLCB0aGlzLm9uUmVzaXplLCB0aGlzKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ResultScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '668bfixYq5P8ZAr4OaMux/o', 'ResultScreen');
// scripts/ResultScreen.ts

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
var ccclass = cc._decorator.ccclass;
var ResultScreen = /** @class */ (function (_super) {
    __extends(ResultScreen, _super);
    function ResultScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultScreen.prototype.onRestart = function () {
        cc.director.resume();
        cc.director.loadScene("Game");
    };
    ResultScreen.prototype.onMainMenu = function () {
        cc.director.resume();
        cc.director.loadScene("Start");
    };
    ResultScreen = __decorate([
        ccclass
    ], ResultScreen);
    return ResultScreen;
}(cc.Component));
exports.default = ResultScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmVzdWx0U2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBRWxDO0lBQTBDLGdDQUFZO0lBQXREOztJQVNBLENBQUM7SUFSVSxnQ0FBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLGlDQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBUmdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FTaEM7SUFBRCxtQkFBQztDQVRELEFBU0MsQ0FUeUMsRUFBRSxDQUFDLFNBQVMsR0FTckQ7a0JBVG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0U2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgb25SZXN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uTWFpbk1lbnUoKTogdm9pZCB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTdGFydFwiKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82049Ow64tIAJ8v0rLhmptr', 'ScoreManager');
// scripts/ScoreManager.ts

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
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreManager = /** @class */ (function (_super) {
    __extends(ScoreManager, _super);
    function ScoreManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.stepAmount = 0;
        _this.scoreAmount = 0;
        _this.currentScore = 0;
        _this.movesNode = null;
        _this.scoreNode = null;
        _this.minSteps = 10;
        _this.maxSteps = 40;
        _this.minTargetScore = 100;
        _this.maxTargetScore = 1000;
        return _this;
    }
    ScoreManager.prototype.onLoad = function () {
        EventBus_1.EventBus.on('blocks-destroy', this.onBlockDestroy, this);
        EventBus_1.EventBus.on('step', this.onStep, this);
    };
    ScoreManager.prototype.start = function () {
        this.stepAmount = this.randomNumber(this.minSteps, this.maxSteps);
        this.scoreAmount = this.randomNumber(this.minTargetScore, this.maxTargetScore);
        this.updateView();
    };
    ScoreManager.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ScoreManager.prototype.onBlockDestroy = function (destroyLength) {
        this.currentScore += destroyLength * 10;
        this.isWin();
        this.updateView();
    };
    ScoreManager.prototype.onStep = function () {
        this.stepAmount -= 1;
        this.isWin();
        this.updateView();
    };
    ScoreManager.prototype.isWin = function () {
        if (this.currentScore > this.scoreAmount) {
            EventBus_1.EventBus.emit('gameEnd', true);
        }
        else if (this.stepAmount === 0) {
            EventBus_1.EventBus.emit('gameEnd', false);
        }
    };
    ScoreManager.prototype.updateView = function () {
        this.movesNode.getComponent(cc.Label).string = String(this.stepAmount);
        this.scoreNode.getComponent(cc.Label).string = this.currentScore + "/" + this.scoreAmount;
    };
    ScoreManager.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('blocks-destroy', this.onBlockDestroy, this);
        EventBus_1.EventBus.off('step', this.onStep, this);
    };
    __decorate([
        property(cc.Node)
    ], ScoreManager.prototype, "movesNode", void 0);
    __decorate([
        property(cc.Node)
    ], ScoreManager.prototype, "scoreNode", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "minSteps", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "maxSteps", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "minTargetScore", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "maxTargetScore", void 0);
    ScoreManager = __decorate([
        ccclass
    ], ScoreManager);
    return ScoreManager;
}(cc.Component));
exports.default = ScoreManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNEQztRQXJERyxlQUFlO1FBQ1AsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3QixvQkFBYyxHQUFXLElBQUksQ0FBQzs7SUFzQ2xDLENBQUM7SUFyQ2EsNkJBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELG1CQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNPLG1DQUFZLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxHQUFXO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDTyxxQ0FBYyxHQUF0QixVQUF1QixhQUFxQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyw2QkFBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyw0QkFBSyxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUM5QixtQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBQ08saUNBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsWUFBWSxTQUFJLElBQUksQ0FBQyxXQUFhLENBQUM7SUFDOUYsQ0FBQztJQUNTLGdDQUFTLEdBQW5CO1FBQ0ksbUJBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUUxQjtRQURDLFFBQVE7a0RBQ2E7SUFFdEI7UUFEQyxRQUFRO2tEQUNhO0lBRXRCO1FBREMsUUFBUTt3REFDb0I7SUFFN0I7UUFEQyxRQUFRO3dEQUNxQjtJQWhCYixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0RoQztJQUFELG1CQUFDO0NBdERELEFBc0RDLENBdER5QyxFQUFFLENBQUMsU0FBUyxHQXNEckQ7a0JBdERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgcHJpdmF0ZSBzdGVwQW1vdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZUFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1vdmVzTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblN0ZXBzOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U3RlcHM6IG51bWJlciA9IDQwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5UYXJnZXRTY29yZTogbnVtYmVyID0gMTAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhUYXJnZXRTY29yZTogbnVtYmVyID0gMTAwMDtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ3N0ZXAnLCB0aGlzLm9uU3RlcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0ZXBBbW91bnQgPSB0aGlzLnJhbmRvbU51bWJlcih0aGlzLm1pblN0ZXBzLCB0aGlzLm1heFN0ZXBzKTtcclxuICAgICAgICB0aGlzLnNjb3JlQW1vdW50ID0gdGhpcy5yYW5kb21OdW1iZXIodGhpcy5taW5UYXJnZXRTY29yZSwgdGhpcy5tYXhUYXJnZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJsb2NrRGVzdHJveShkZXN0cm95TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSArPSBkZXN0cm95TGVuZ3RoICogMTA7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblN0ZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVwQW1vdW50IC09IDE7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1dpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NvcmUgPiB0aGlzLnNjb3JlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ2dhbWVFbmQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RlcEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBFdmVudEJ1cy5lbWl0KCdnYW1lRW5kJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVzTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0aGlzLnN0ZXBBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50U2NvcmV9LyR7dGhpcy5zY29yZUFtb3VudH1gO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdzdGVwJywgdGhpcy5vblN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StartGameScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78915q25xJAZpDEL/oqBYAE', 'StartGameScript');
// scripts/StartGameScript.ts

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
var ccclass = cc._decorator.ccclass;
var StartGame = /** @class */ (function (_super) {
    __extends(StartGame, _super);
    function StartGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartGame.prototype.onStartGame = function () {
        cc.director.loadScene("Game");
    };
    StartGame = __decorate([
        ccclass
    ], StartGame);
    return StartGame;
}(cc.Component));
exports.default = StartGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3RhcnRHYW1lU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXVDLDZCQUFZO0lBQW5EOztJQUtBLENBQUM7SUFIRywrQkFBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUpnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBSzdCO0lBQUQsZ0JBQUM7Q0FMRCxBQUtDLENBTHNDLEVBQUUsQ0FBQyxTQUFTLEdBS2xEO2tCQUxvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uU3RhcnRHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb489g224JCyIrtQfg7dIzl', 'Utils');
// scripts/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomExtraBlockKey = exports.getRandomBlockKey = void 0;
var Types_1 = require("./Types");
function getRandomBlockKey(exclude) {
    if (exclude === void 0) { exclude = []; }
    var keys = Object.keys(Types_1.blockColor);
    var filteredKeys = keys.filter(function (key) { return !exclude.includes(key); });
    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных BlockKey после исключений");
    }
    var randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
exports.getRandomBlockKey = getRandomBlockKey;
function getRandomExtraBlockKey(exclude) {
    if (exclude === void 0) { exclude = []; }
    var keys = Object.keys(Types_1.extraBlock);
    var filteredKeys = keys.filter(function (key) { return !exclude.includes(key); });
    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных ExtraBlockKey после исключений");
    }
    var randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
exports.getRandomExtraBlockKey = getRandomExtraBlockKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTBFO0FBRTFFLFNBQWdCLGlCQUFpQixDQUFDLE9BQXdCO0lBQXhCLHdCQUFBLEVBQUEsWUFBd0I7SUFDdEQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFlLENBQUM7SUFDbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBRWhFLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFWRCw4Q0FVQztBQUNELFNBQWdCLHNCQUFzQixDQUFDLE9BQTZCO0lBQTdCLHdCQUFBLEVBQUEsWUFBNkI7SUFDaEUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFvQixDQUFDO0lBQ3hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUVoRSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTtJQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBVkQsd0RBVUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja0tleSwgRXh0cmFCbG9ja0tleSwgZXh0cmFCbG9jaywgYmxvY2tDb2xvciB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21CbG9ja0tleShleGNsdWRlOiBCbG9ja0tleVtdID0gW10pOiBCbG9ja0tleSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGJsb2NrQ29sb3IpIGFzIEJsb2NrS2V5W107XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICFleGNsdWRlLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgaWYgKGZpbHRlcmVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSBCbG9ja0tleSDQv9C+0YHQu9C1INC40YHQutC70Y7Rh9C10L3QuNC5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsdGVyZWRLZXlzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkS2V5c1tyYW5kb21JbmRleF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShleGNsdWRlOiBFeHRyYUJsb2NrS2V5W10gPSBbXSk6IEV4dHJhQmxvY2tLZXkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHRyYUJsb2NrKSBhcyBFeHRyYUJsb2NrS2V5W107XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICFleGNsdWRlLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgaWYgKGZpbHRlcmVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSBFeHRyYUJsb2NrS2V5INC/0L7RgdC70LUg0LjRgdC60LvRjtGH0LXQvdC40LlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZEtleXMubGVuZ3RoKTtcbiAgICByZXR1cm4gZmlsdGVyZWRLZXlzW3JhbmRvbUluZGV4XTtcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Types.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '062b3hgWxhCUI4RelELqNcX', 'Types');
// scripts/Types.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExtraBlockKey = exports.isBlockKey = exports.extraBlock = exports.blockColor = void 0;
exports.blockColor = {
    blue: 'block_blue',
    green: 'block_green',
    purpure: 'block_purpure',
    red: 'block_red',
    yellow: 'block_yellow'
};
exports.extraBlock = {
    bomb: 'block_bomb',
    bomb_max: 'block_bomb_max',
    rockets_vertical: 'block_rakets',
    rockets_horizontal: 'block_rockets_horisontal'
};
function isBlockKey(type) {
    return type in exports.blockColor;
}
exports.isBlockKey = isBlockKey;
function isExtraBlockKey(type) {
    return type in exports.extraBlock;
}
exports.isExtraBlockKey = isExtraBlockKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWEsUUFBQSxVQUFVLEdBQUc7SUFDdEIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsT0FBTyxFQUFFLGVBQWU7SUFDeEIsR0FBRyxFQUFFLFdBQVc7SUFDaEIsTUFBTSxFQUFFLGNBQWM7Q0FDaEIsQ0FBQztBQUlFLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLElBQUksRUFBRSxZQUFZO0lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxrQkFBa0IsRUFBRSwwQkFBMEI7Q0FDeEMsQ0FBQztBQVlYLFNBQWdCLFVBQVUsQ0FBQyxJQUFlO0lBQ3RDLE9BQU8sSUFBSSxJQUFJLGtCQUFVLENBQUM7QUFDOUIsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLElBQWU7SUFDM0MsT0FBTyxJQUFJLElBQUksa0JBQVUsQ0FBQztBQUM5QixDQUFDO0FBRkQsMENBRUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGNvbnN0IGJsb2NrQ29sb3IgPSB7XG4gICAgYmx1ZTogJ2Jsb2NrX2JsdWUnLFxuICAgIGdyZWVuOiAnYmxvY2tfZ3JlZW4nLFxuICAgIHB1cnB1cmU6ICdibG9ja19wdXJwdXJlJyxcbiAgICByZWQ6ICdibG9ja19yZWQnLFxuICAgIHllbGxvdzogJ2Jsb2NrX3llbGxvdydcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBCbG9ja0tleSA9IGtleW9mIHR5cGVvZiBibG9ja0NvbG9yO1xuZXhwb3J0IHR5cGUgQmxvY2tWYWx1ZSA9IHR5cGVvZiBibG9ja0NvbG9yW0Jsb2NrS2V5XTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhQmxvY2sgPSB7XG4gICAgYm9tYjogJ2Jsb2NrX2JvbWInLFxuICAgIGJvbWJfbWF4OiAnYmxvY2tfYm9tYl9tYXgnLFxuICAgIHJvY2tldHNfdmVydGljYWw6ICdibG9ja19yYWtldHMnLFxuICAgIHJvY2tldHNfaG9yaXpvbnRhbDogJ2Jsb2NrX3JvY2tldHNfaG9yaXNvbnRhbCdcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBFeHRyYUJsb2NrS2V5ID0ga2V5b2YgdHlwZW9mIGV4dHJhQmxvY2s7XG5leHBvcnQgdHlwZSBFeHRyYUJsb2NrVmFsdWUgPSB0eXBlb2YgZXh0cmFCbG9ja1tFeHRyYUJsb2NrS2V5XTtcblxuZXhwb3J0IHR5cGUgQmxvY2tDbGlja0V2ZW50ID0ge1xuICAgIHJvdzogbnVtYmVyO1xuICAgIGNvbDogbnVtYmVyO1xuICAgIGJsb2NrVHlwZTogQmxvY2tUeXBlO1xufVxuZXhwb3J0IHR5cGUgQmxvY2tUeXBlID0gQmxvY2tLZXkgfCBFeHRyYUJsb2NrS2V5O1xuZXhwb3J0IHR5cGUgQm9hcmRUeXBlID0gQmxvY2s8QmxvY2tLZXk+IHwgQmxvY2s8RXh0cmFCbG9ja0tleT47XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jsb2NrS2V5KHR5cGU6IEJsb2NrVHlwZSk6IHR5cGUgaXMgQmxvY2tLZXkge1xuICAgIHJldHVybiB0eXBlIGluIGJsb2NrQ29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4dHJhQmxvY2tLZXkodHlwZTogQmxvY2tUeXBlKTogdHlwZSBpcyBFeHRyYUJsb2NrS2V5IHtcbiAgICByZXR1cm4gdHlwZSBpbiBleHRyYUJsb2NrO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba6edbmLBRJW6xC4s4aq4Bn', 'AudioManager');
// scripts/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundMusicId = null;
        _this.backgroundMusicClip = null;
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.prototype.onLoad = function () {
        if (AudioManager_1.instance) {
            this.node.destroy();
            return;
        }
        AudioManager_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    AudioManager.prototype.start = function () {
        if (!this.isBGMPlaying()) {
            this.playBGM(true);
        }
    };
    AudioManager.prototype.isBGMPlaying = function () {
        if (this.backgroundMusicId !== null) {
            var state = cc.audioEngine.getState(this.backgroundMusicId);
            return state === cc.audioEngine.AudioState.PLAYING;
        }
        return false;
    };
    AudioManager.prototype.playBGM = function (loop) {
        if (loop === void 0) { loop = true; }
        if (this.backgroundMusicClip && !this.backgroundMusicId) {
            this.backgroundMusicId = cc.audioEngine.play(this.backgroundMusicClip, loop, 0.06);
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (this.backgroundMusicId) {
            cc.audioEngine.stop(this.backgroundMusicId);
            this.backgroundMusicId = null;
        }
    };
    var AudioManager_1;
    AudioManager.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "backgroundMusicClip", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkNDO1FBekNXLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUd6Qyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDOztJQXNDN0MsQ0FBQztxQkEzQ29CLFlBQVk7SUFPbkIsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLGNBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtZQUNqQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RCxPQUFPLEtBQUssS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDdEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sOEJBQU8sR0FBZixVQUFnQixJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ2hDLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RGO0lBQ0wsQ0FBQztJQUVNLDhCQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7SUF6Q2MscUJBQVEsR0FBaUIsSUFBSSxDQUFDO0lBSTdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkRBQ2tCO0lBTHhCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyQ2hDO0lBQUQsbUJBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBMkNyRDtrQkEzQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIGJhY2tncm91bmRNdXNpY0lkOiBudW1iZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBiYWNrZ3JvdW5kTXVzaWNDbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKEF1ZGlvTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0JHTVBsYXlpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QkdNKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0JHTVBsYXlpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0lkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNjLmF1ZGlvRW5naW5lLmdldFN0YXRlKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID09PSBjYy5hdWRpb0VuZ2luZS5BdWRpb1N0YXRlLlBMQVlJTkc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUJHTShsb29wOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kTXVzaWNDbGlwICYmICF0aGlzLmJhY2tncm91bmRNdXNpY0lkKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJhY2tncm91bmRNdXNpY0NsaXAsIGxvb3AsIDAuMDYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BCR00oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0lkKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTXVzaWNJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5759aozpf9DHrKg04Tf4B1h', 'Block');
// scripts/Block.ts

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
var EventBus_1 = require("./EventBus");
var GridConfig_1 = require("./GridConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.blockSpriteNode = null;
        _this.smokeNode = null;
        _this.row = 0;
        _this.col = 0;
        _this.blockType = 'blue';
        _this.width = GridConfig_1.GridConfig.width;
        _this.height = GridConfig_1.GridConfig.height;
        return _this;
    }
    Block.prototype.onLoad = function () {
        this.blockSpriteNode.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    };
    Block.prototype.start = function () { };
    Block.prototype.getRow = function () {
        return this.row;
    };
    Block.prototype.getCol = function () {
        return this.col;
    };
    Block.prototype.getType = function () {
        return this.blockType;
    };
    Block.prototype.setRowCol = function (row, col) {
        this.row = row;
        this.col = col;
    };
    Block.prototype.init = function (row, col, blockType, size) {
        this.row = row;
        this.col = col;
        this.blockType = blockType;
        this.setSize(size);
        this.updateVisual();
    };
    Block.prototype.setSize = function (size) {
        var scaleX = size.x / GridConfig_1.GridConfig.width;
        var scaleY = size.y / GridConfig_1.GridConfig.height;
        this.node.setScale(scaleX, scaleY);
    };
    Block.prototype.updateVisual = function () {
        var key = this.blockType;
        var spriteFrame = this.atlas.getSpriteFrame(Types_1.blockColor[key]);
        var sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    };
    Block.prototype.destroyYourself = function () {
        var _this = this;
        var anim = this.blockSpriteNode.getComponent(cc.Animation);
        var particle = this.smokeNode.getComponent(cc.ParticleSystem);
        anim.once('finished', function () {
            _this.node.destroy();
        }, this);
        anim.play();
        particle.resetSystem();
    };
    Block.prototype.fallTo = function (targetPos, time) {
        cc.tween(this.node)
            .to(time, { position: targetPos }, { easing: "sineOut" })
            .start();
    };
    Block.prototype.fallAnimation = function (startPos, targetPos) {
        this.node.setPosition(startPos);
        this.fallTo(targetPos, 0.5);
    };
    Block.prototype.onTouch = function () {
        EventBus_1.EventBus.emit('block-clicked', { blockType: this.blockType, row: this.row, col: this.col });
    };
    Block.prototype.onDestroy = function () {
        this.blockSpriteNode.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], Block.prototype, "atlas", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "blockSpriteNode", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "smokeNode", void 0);
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStDO0FBQy9DLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBZ0UseUJBQVk7SUFBNUU7UUFBQSxxRUF1RUM7UUFyRUcsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNoQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFNLE1BQVcsQ0FBQztRQUMzQixXQUFLLEdBQVcsdUJBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsWUFBTSxHQUFXLHVCQUFVLENBQUMsTUFBTSxDQUFDOztJQTREakQsQ0FBQztJQTNEYSxzQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxxQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUNKLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHlCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcs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QUM7SUFwRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3Q0FDSTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1E7SUFOVCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBdUV6QjtJQUFELFlBQUM7Q0F2RUQsQUF1RUMsQ0F2RStELEVBQUUsQ0FBQyxTQUFTLEdBdUUzRTtrQkF2RW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBibG9ja0NvbG9yLCBCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2s8VCBleHRlbmRzIHN0cmluZyA9IEJsb2NrS2V5PiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXHJcbiAgICBhdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBibG9ja1Nwcml0ZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbW9rZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHJvdzogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBjb2w6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgYmxvY2tUeXBlOiBUID0gJ2JsdWUnIGFzIFQ7XHJcbiAgICBwcm90ZWN0ZWQgd2lkdGg6IG51bWJlciA9IEdyaWRDb25maWcud2lkdGg7XHJcbiAgICBwcm90ZWN0ZWQgaGVpZ2h0OiBudW1iZXIgPSBHcmlkQ29uZmlnLmhlaWdodDtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ibG9ja1Nwcml0ZU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHsgfVxyXG4gICAgcHVibGljIGdldFJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDb2woKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ibG9ja1R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Um93Q29sKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sID0gY29sO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja1R5cGU6IFQsIHNpemU/OiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XHJcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XHJcbiAgICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgICAgdGhpcy5zZXRTaXplKHNpemUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzdWFsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0U2l6ZShzaXplOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gc2l6ZS54IC8gR3JpZENvbmZpZy53aWR0aDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBzaXplLnkgLyBHcmlkQ29uZmlnLmhlaWdodDtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZpc3VhbCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmJsb2NrVHlwZSBhcyBCbG9ja0tleVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gdGhpcy5hdGxhcy5nZXRTcHJpdGVGcmFtZShibG9ja0NvbG9yW2tleV0pO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuYmxvY2tTcHJpdGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3Ryb3lZb3Vyc2VsZigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhbmltID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFydGljbGUgPSB0aGlzLnNtb2tlTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGFuaW0ub25jZSgnZmluaXNoZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgICBwYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZhbGxUbyh0YXJnZXRQb3M6IGNjLlZlYzMsIHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRpbWUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmFsbEFuaW1hdGlvbihzdGFydFBvczogY2MuVmVjMywgdGFyZ2V0UG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLmZhbGxUbyh0YXJnZXRQb3MsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uVG91Y2goKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnYmxvY2stY2xpY2tlZCcsIHsgYmxvY2tUeXBlOiB0aGlzLmJsb2NrVHlwZSwgcm93OiB0aGlzLnJvdywgY29sOiB0aGlzLmNvbCB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ibG9ja1Nwcml0ZU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HandlerInterface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bb389aCzxMS5Zz/3hWYMPp', 'HandlerInterface');
// scripts/HandlerInterface.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHandler = void 0;
var EventBus_1 = require("./EventBus");
var ClickHandler = /** @class */ (function () {
    function ClickHandler(board) {
        this.board = board;
    }
    ClickHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    };
    ClickHandler.prototype.handle = function (data, commands) {
        if (this.nextHandler) {
            return this.nextHandler.handle(data, commands);
        }
        return null;
    };
    ClickHandler.prototype.emitStep = function () {
        EventBus_1.EventBus.emit('step');
    };
    return ClickHandler;
}());
exports.ClickHandler = ClickHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSGFuZGxlckludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFTdEM7SUFHSSxzQkFBWSxLQUFvQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sOEJBQU8sR0FBZCxVQUFlLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBQ00sNkJBQU0sR0FBYixVQUFjLElBQXFCLEVBQUUsUUFBd0I7UUFDekQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQ2pEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNTLCtCQUFRLEdBQWxCO1FBQ0ksbUJBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CcUIsb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuL0V2ZW50QnVzXCI7XG5pbXBvcnQgeyBCbG9ja0NsaWNrRXZlbnQsIEJvYXJkVHlwZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBCb2FyZENvbW1hbmQgfSBmcm9tIFwiLi9Db21tYW5kc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRsZXIge1xuICAgIHNldE5leHQoaGFuZGxlcjogSGFuZGxlcik6IEhhbmRsZXI7XG4gICAgaGFuZGxlKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCwgY29tbWFuZHM6IEJvYXJkQ29tbWFuZFtdKTogQm9hcmRDb21tYW5kW107XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGlja0hhbmRsZXIgaW1wbGVtZW50cyBIYW5kbGVyIHtcbiAgICBwcml2YXRlIG5leHRIYW5kbGVyOiBIYW5kbGVyO1xuICAgIHByb3RlY3RlZCBib2FyZDogQm9hcmRUeXBlW11bXTtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZDogQm9hcmRUeXBlW11bXSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXROZXh0KGhhbmRsZXI6IEhhbmRsZXIpOiBIYW5kbGVyIHtcbiAgICAgICAgdGhpcy5uZXh0SGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm5leHRIYW5kbGVyO1xuICAgIH1cbiAgICBwdWJsaWMgaGFuZGxlKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCwgY29tbWFuZHM6IEJvYXJkQ29tbWFuZFtdKTogQm9hcmRDb21tYW5kW10ge1xuICAgICAgICBpZiAodGhpcy5uZXh0SGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dEhhbmRsZXIuaGFuZGxlKGRhdGEsIGNvbW1hbmRzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZW1pdFN0ZXAoKSB7XG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ3N0ZXAnKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BlockClickHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a41a5/8pm1E7ZTbXkxefwwa', 'BlockClickHandler');
// scripts/BlockClickHandler.ts

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
exports.BlockClickHandler = void 0;
var Commands_1 = require("./Commands");
var HandlerInterface_1 = require("./HandlerInterface");
var MatchFinder_1 = require("./MatchFinder");
var Types_1 = require("./Types");
var BlockClickHandler = /** @class */ (function (_super) {
    __extends(BlockClickHandler, _super);
    function BlockClickHandler(board) {
        var _this = _super.call(this, board) || this;
        _this.matchFinder = new MatchFinder_1.default(board);
        return _this;
    }
    BlockClickHandler.prototype.handle = function (data, commands) {
        if (Types_1.isBlockKey(data.blockType)) {
            var sameBlocks = [];
            sameBlocks = this.matchFinder.find(data.row, data.col, data.blockType);
            if (sameBlocks.length >= 2) {
                this.emitStep();
                if (sameBlocks.length >= 5) {
                    commands.push(new Commands_1.UpgradeToExtraBlock(data.row, data.col, sameBlocks));
                }
                commands.push(new Commands_1.DestroyGroup(sameBlocks));
                return commands;
            }
        }
        return _super.prototype.handle.call(this, data, commands);
    };
    return BlockClickHandler;
}(HandlerInterface_1.ClickHandler));
exports.BlockClickHandler = BlockClickHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2tDbGlja0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2RTtBQUM3RSx1REFBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDLGlDQUFpRTtBQUVqRTtJQUF1QyxxQ0FBWTtJQUUvQywyQkFBWSxLQUFvQjtRQUFoQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUVmO1FBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQzlDLENBQUM7SUFDRCxrQ0FBTSxHQUFOLFVBQU8sSUFBcUIsRUFBRSxRQUF3QjtRQUNsRCxJQUFJLGtCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVCLElBQUksVUFBVSxHQUFnQixFQUFFLENBQUM7WUFDakMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkUsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQzFFO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sUUFBUSxDQUFDO2FBQ25CO1NBQ0o7UUFDRCxPQUFPLGlCQUFNLE1BQU0sWUFBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQnNDLCtCQUFZLEdBcUJsRDtBQXJCWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZENvbW1hbmQsIERlc3Ryb3lHcm91cCwgVXBncmFkZVRvRXh0cmFCbG9jayB9IGZyb20gXCIuL0NvbW1hbmRzXCI7XG5pbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi9IYW5kbGVySW50ZXJmYWNlXCI7XG5pbXBvcnQgTWF0Y2hGaW5kZXIgZnJvbSBcIi4vTWF0Y2hGaW5kZXJcIjtcbmltcG9ydCB7IEJsb2NrQ2xpY2tFdmVudCwgQm9hcmRUeXBlLCBpc0Jsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIEJsb2NrQ2xpY2tIYW5kbGVyIGV4dGVuZHMgQ2xpY2tIYW5kbGVyIHtcbiAgICBwcml2YXRlIG1hdGNoRmluZGVyOiBNYXRjaEZpbmRlcjtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZDogQm9hcmRUeXBlW11bXSkge1xuICAgICAgICBzdXBlcihib2FyZCk7XG4gICAgICAgIHRoaXMubWF0Y2hGaW5kZXIgPSBuZXcgTWF0Y2hGaW5kZXIoYm9hcmQpO1xuICAgIH1cbiAgICBoYW5kbGUoZGF0YTogQmxvY2tDbGlja0V2ZW50LCBjb21tYW5kczogQm9hcmRDb21tYW5kW10pOiBCb2FyZENvbW1hbmRbXSB7XG4gICAgICAgIGlmIChpc0Jsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xuICAgICAgICAgICAgbGV0IHNhbWVCbG9ja3M6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgICAgICBzYW1lQmxvY2tzID0gdGhpcy5tYXRjaEZpbmRlci5maW5kKGRhdGEucm93LCBkYXRhLmNvbCwgZGF0YS5ibG9ja1R5cGUpO1xuICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTdGVwKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChuZXcgVXBncmFkZVRvRXh0cmFCbG9jayhkYXRhLnJvdywgZGF0YS5jb2wsIHNhbWVCbG9ja3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChuZXcgRGVzdHJveUdyb3VwKHNhbWVCbG9ja3MpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZShkYXRhLCBjb21tYW5kcyk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ExtraBlockClickHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54521D6A49JzYHHQC4rvakF', 'ExtraBlockClickHandler');
// scripts/ExtraBlockClickHandler.ts

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
var HandlerInterface_1 = require("./HandlerInterface");
var Types_1 = require("./Types");
var Commands_1 = require("./Commands");
var ExtraBlockClickHandler = /** @class */ (function (_super) {
    __extends(ExtraBlockClickHandler, _super);
    function ExtraBlockClickHandler(board) {
        return _super.call(this, board) || this;
    }
    ExtraBlockClickHandler.prototype.handle = function (data, commands) {
        if (Types_1.isExtraBlockKey(data.blockType)) {
            var groupForDestroy = [];
            switch (data.blockType) {
                case 'rockets_horizontal':
                    groupForDestroy = this.getHorizontalLine(data.row);
                    break;
                case 'bomb':
                    groupForDestroy = this.getBombArea(data.row, data.col);
                    break;
                case 'rockets_vertical':
                    groupForDestroy = this.getVerticalLine(data.col);
                    break;
                case 'bomb_max':
                    groupForDestroy = this.getAllBlocks();
                    break;
                default:
                    return [];
            }
            if (groupForDestroy.length > 0) {
                commands.push(new Commands_1.DestroyGroup(groupForDestroy));
            }
        }
        return _super.prototype.handle.call(this, data, commands);
    };
    ExtraBlockClickHandler.prototype.getHorizontalLine = function (row) {
        return (this.board[row]);
    };
    ExtraBlockClickHandler.prototype.getVerticalLine = function (col) {
        var blockForDestroy = [];
        for (var y = 0; y < this.board[0].length; y++) {
            blockForDestroy.push(this.board[y][col]);
        }
        return blockForDestroy;
    };
    ExtraBlockClickHandler.prototype.getBombArea = function (clickedRow, clickedCol) {
        var blockForDestroy = [];
        for (var row = clickedRow - 1; row <= clickedRow + 1; row++) {
            for (var col = clickedCol - 1; col <= clickedCol + 1; col++) {
                if (row >= 0 && row < this.board.length &&
                    col >= 0 && col < this.board[row].length) {
                    blockForDestroy.push(this.board[row][col]);
                }
            }
        }
        return blockForDestroy;
    };
    ExtraBlockClickHandler.prototype.getAllBlocks = function () {
        return [].concat.apply([], this.board);
    };
    return ExtraBlockClickHandler;
}(HandlerInterface_1.ClickHandler));
exports.default = ExtraBlockClickHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXh0cmFCbG9ja0NsaWNrSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsaUNBQXNFO0FBQ3RFLHVDQUF3RDtBQUV4RDtJQUFvRCwwQ0FBWTtJQUM1RCxnQ0FBWSxLQUFvQjtlQUM1QixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUNNLHVDQUFNLEdBQWIsVUFBYyxJQUFxQixFQUFFLFFBQXdCO1FBQ3pELElBQUksdUJBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxlQUFlLEdBQWdCLEVBQUUsQ0FBQztZQUN0QyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLEtBQUssb0JBQW9CO29CQUNyQixlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkQsTUFBTTtnQkFDVixLQUFLLE1BQU07b0JBQ1AsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1YsS0FBSyxrQkFBa0I7b0JBQ25CLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakQsTUFBTTtnQkFDVixLQUFLLFVBQVU7b0JBQ1gsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDVjtvQkFDSSxPQUFPLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDSjtRQUNELE9BQU8saUJBQU0sTUFBTSxZQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ08sa0RBQWlCLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ08sZ0RBQWUsR0FBdkIsVUFBd0IsR0FBVztRQUMvQixJQUFNLGVBQWUsR0FBZ0IsRUFBRSxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFDTyw0Q0FBVyxHQUFuQixVQUFvQixVQUFrQixFQUFFLFVBQWtCO1FBQ3RELElBQU0sZUFBZSxHQUFnQixFQUFFLENBQUM7UUFDeEMsS0FBSyxJQUFJLEdBQUcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pELEtBQUssSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07b0JBQ25DLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUMxQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDOUM7YUFDSjtTQUNKO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNPLDZDQUFZLEdBQXBCO1FBQ0ksT0FBTyxFQUFFLENBQUMsTUFBTSxPQUFULEVBQUUsRUFBVyxJQUFJLENBQUMsS0FBSyxFQUFDO0lBQ25DLENBQUM7SUFDTCw2QkFBQztBQUFELENBdERBLEFBc0RDLENBdERtRCwrQkFBWSxHQXNEL0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi9IYW5kbGVySW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBCbG9ja0NsaWNrRXZlbnQsIEJvYXJkVHlwZSwgaXNFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbmltcG9ydCB7IEJvYXJkQ29tbWFuZCwgRGVzdHJveUdyb3VwIH0gZnJvbSBcIi4vQ29tbWFuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFCbG9ja0NsaWNrSGFuZGxlciBleHRlbmRzIENsaWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoYm9hcmQ6IEJvYXJkVHlwZVtdW10pIHtcbiAgICAgICAgc3VwZXIoYm9hcmQpO1xuICAgIH1cbiAgICBwdWJsaWMgaGFuZGxlKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCwgY29tbWFuZHM6IEJvYXJkQ29tbWFuZFtdKTogQm9hcmRDb21tYW5kW10ge1xuICAgICAgICBpZiAoaXNFeHRyYUJsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xuICAgICAgICAgICAgbGV0IGdyb3VwRm9yRGVzdHJveTogQm9hcmRUeXBlW10gPSBbXTtcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5ibG9ja1R5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyb2NrZXRzX2hvcml6b250YWwnOlxuICAgICAgICAgICAgICAgICAgICBncm91cEZvckRlc3Ryb3kgPSB0aGlzLmdldEhvcml6b250YWxMaW5lKGRhdGEucm93KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm9tYic6XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRm9yRGVzdHJveSA9IHRoaXMuZ2V0Qm9tYkFyZWEoZGF0YS5yb3csIGRhdGEuY29sKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncm9ja2V0c192ZXJ0aWNhbCc6XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRm9yRGVzdHJveSA9IHRoaXMuZ2V0VmVydGljYWxMaW5lKGRhdGEuY29sKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm9tYl9tYXgnOlxuICAgICAgICAgICAgICAgICAgICBncm91cEZvckRlc3Ryb3kgPSB0aGlzLmdldEFsbEJsb2NrcygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXBGb3JEZXN0cm95Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kcy5wdXNoKG5ldyBEZXN0cm95R3JvdXAoZ3JvdXBGb3JEZXN0cm95KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZShkYXRhLCBjb21tYW5kcyk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SG9yaXpvbnRhbExpbmUocm93OiBudW1iZXIpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ib2FyZFtyb3ddKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWZXJ0aWNhbExpbmUoY29sOiBudW1iZXIpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIGNvbnN0IGJsb2NrRm9yRGVzdHJveTogQm9hcmRUeXBlW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkWzBdLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICBibG9ja0ZvckRlc3Ryb3kucHVzaCh0aGlzLmJvYXJkW3ldW2NvbF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja0ZvckRlc3Ryb3k7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0Qm9tYkFyZWEoY2xpY2tlZFJvdzogbnVtYmVyLCBjbGlja2VkQ29sOiBudW1iZXIpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIGNvbnN0IGJsb2NrRm9yRGVzdHJveTogQm9hcmRUeXBlW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gY2xpY2tlZFJvdyAtIDE7IHJvdyA8PSBjbGlja2VkUm93ICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IGNsaWNrZWRDb2wgLSAxOyBjb2wgPD0gY2xpY2tlZENvbCArIDE7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+PSAwICYmIHJvdyA8IHRoaXMuYm9hcmQubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbCA+PSAwICYmIGNvbCA8IHRoaXMuYm9hcmRbcm93XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tGb3JEZXN0cm95LnB1c2godGhpcy5ib2FyZFtyb3ddW2NvbF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tGb3JEZXN0cm95O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbEJsb2NrcygpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoLi4udGhpcy5ib2FyZClcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
