
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
require('./assets/scripts/BlockFactory');
require('./assets/scripts/Board');
require('./assets/scripts/EventBus');
require('./assets/scripts/ExrtaBlock');
require('./assets/scripts/ExtraBlockHandler');
require('./assets/scripts/GameManager');
require('./assets/scripts/GridConfig');
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
    BlockFactory.prototype.createBlock = function (row, col, blockType) {
        var block = cc.instantiate(this.blockPrefab);
        var blockComp = block.getComponent(Block_1.default);
        blockComp.init(row, col, blockType);
        this.parent.addChild(block);
        return blockComp;
    };
    BlockFactory.prototype.createExtraBlock = function (row, col, blockType) {
        var block = cc.instantiate(this.extraBlockPrefab);
        var blockComp = block.getComponent(ExrtaBlock_1.default);
        blockComp.init(row, col, blockType);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2tGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTRCO0FBQzVCLDJDQUFzQztBQUd0QztJQUNJLHNCQUNZLFdBQXNCLEVBQ3RCLGdCQUEyQixFQUMzQixNQUFlO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBSSxDQUFDO0lBRXpCLGtDQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBbUI7UUFDNUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVNLHVDQUFnQixHQUF2QixVQUF3QixHQUFXLEVBQUUsR0FBVyxFQUFFLFNBQXdCO1FBQ3RFLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFTCxtQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcbmltcG9ydCBFeHRyYUJsb2NrIGZyb20gXCIuL0V4cnRhQmxvY2tcIjtcbmltcG9ydCB7IEJsb2NrS2V5LCBFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBibG9ja1ByZWZhYjogY2MuUHJlZmFiLFxuICAgICAgICBwcml2YXRlIGV4dHJhQmxvY2tQcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgcHJpdmF0ZSBwYXJlbnQ6IGNjLk5vZGUpIHsgfVxuXG4gICAgcHVibGljIGNyZWF0ZUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2tUeXBlOiBCbG9ja0tleSk6IEJsb2NrIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcbiAgICAgICAgY29uc3QgYmxvY2tDb21wID0gYmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrKTtcbiAgICAgICAgYmxvY2tDb21wLmluaXQocm93LCBjb2wsIGJsb2NrVHlwZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29tcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlRXh0cmFCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrVHlwZTogRXh0cmFCbG9ja0tleSk6IEV4dHJhQmxvY2sge1xuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXh0cmFCbG9ja1ByZWZhYik7XG4gICAgICAgIGNvbnN0IGJsb2NrQ29tcCA9IGJsb2NrLmdldENvbXBvbmVudChFeHRyYUJsb2NrKTtcbiAgICAgICAgYmxvY2tDb21wLmluaXQocm93LCBjb2wsIGJsb2NrVHlwZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29tcDtcbiAgICB9XG5cbn1cbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/scripts/ExtraBlockHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54521D6A49JzYHHQC4rvakF', 'ExtraBlockHandler');
// scripts/ExtraBlockHandler.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("./Types");
var ExtraBlockHandler = /** @class */ (function () {
    function ExtraBlockHandler(board) {
        this.board = board;
    }
    ExtraBlockHandler.prototype.handle = function (data) {
        switch (data.blockType) {
            case 'rockets_horizontal':
                return this.getHorizontalLine(data.row);
                break;
            case 'bomb':
                return this.getBombArea(data.row, data.col);
                break;
            case 'rockets_vertical':
                return this.getVerticalLine(data.col);
                break;
            case 'bomb_max':
                return this.getAllBlocks();
                break;
            default:
                return [];
        }
        return;
    };
    ExtraBlockHandler.prototype.getHorizontalLine = function (row) {
        return this.includesExtraBlock(this.board[row]);
    };
    ExtraBlockHandler.prototype.getVerticalLine = function (col) {
        var blockForDestroy = [];
        for (var y = 0; y < this.board[0].length; y++) {
            blockForDestroy.push(this.board[y][col]);
        }
        return blockForDestroy;
    };
    ExtraBlockHandler.prototype.getBombArea = function (clickedRow, clickedCol) {
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
    ExtraBlockHandler.prototype.getAllBlocks = function () {
        return [].concat.apply([], this.board);
    };
    ExtraBlockHandler.prototype.includesExtraBlock = function (initialBlocks) {
        var result = [];
        var visited = new Set();
        var queue = __spreadArrays(initialBlocks);
        while (queue.length > 0) {
            var block = queue.shift();
            if (!block || visited.has(block))
                continue;
            visited.add(block);
            result.push(block);
            if (Types_1.isExtraBlockKey(block.getType())) {
                var data = {
                    blockType: block.getType(),
                    row: block.getRow(),
                    col: block.getCol(),
                };
                // вместо рекурсии — просто добавляем в очередь
                var extraBlocks = this.handle(data);
                queue.push.apply(queue, extraBlocks);
            }
        }
        return result;
    };
    return ExtraBlockHandler;
}());
exports.default = ExtraBlockHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXh0cmFCbG9ja0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQXNFO0FBRXRFO0lBQ0ksMkJBQW9CLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7SUFBSSxDQUFDO0lBQ3RDLGtDQUFNLEdBQWIsVUFBYyxJQUFxQjtRQUMvQixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxvQkFBb0I7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVDLE1BQU07WUFDVixLQUFLLGtCQUFrQjtnQkFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDM0IsTUFBTTtZQUNWO2dCQUNJLE9BQU8sRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTztJQUNYLENBQUM7SUFDTyw2Q0FBaUIsR0FBekIsVUFBMEIsR0FBVztRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNPLDJDQUFlLEdBQXZCLFVBQXdCLEdBQVc7UUFDL0IsSUFBTSxlQUFlLEdBQWdCLEVBQUUsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBQ08sdUNBQVcsR0FBbkIsVUFBb0IsVUFBa0IsRUFBRSxVQUFrQjtRQUN0RCxJQUFNLGVBQWUsR0FBZ0IsRUFBRSxDQUFDO1FBQ3hDLEtBQUssSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN6RCxLQUFLLElBQUksR0FBRyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ3pELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUNuQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDMUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzlDO2FBQ0o7U0FDSjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFDTyx3Q0FBWSxHQUFwQjtRQUNJLE9BQU8sRUFBRSxDQUFDLE1BQU0sT0FBVCxFQUFFLEVBQVcsSUFBSSxDQUFDLEtBQUssRUFBQztJQUNuQyxDQUFDO0lBQ08sOENBQWtCLEdBQTFCLFVBQ0ksYUFBMEI7UUFFMUIsSUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixJQUFNLE9BQU8sR0FBbUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFNLEtBQUssa0JBQW9CLGFBQWEsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsU0FBUztZQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsSUFBSSx1QkFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQyxJQUFNLElBQUksR0FBb0I7b0JBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFO29CQUMxQixHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbkIsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUU7aUJBQ3RCLENBQUM7Z0JBRUYsK0NBQStDO2dCQUMvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssRUFBUyxXQUFXLEVBQUU7YUFDOUI7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFJTCx3QkFBQztBQUFELENBOUVBLEFBOEVDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja0NsaWNrRXZlbnQsIEJvYXJkVHlwZSwgaXNFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFCbG9ja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYm9hcmQ6IEJvYXJkVHlwZVtdW10pIHsgfVxuICAgIHB1YmxpYyBoYW5kbGUoZGF0YTogQmxvY2tDbGlja0V2ZW50KTogQm9hcmRUeXBlW10ge1xuICAgICAgICBzd2l0Y2ggKGRhdGEuYmxvY2tUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyb2NrZXRzX2hvcml6b250YWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhvcml6b250YWxMaW5lKGRhdGEucm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvbWInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJvbWJBcmVhKGRhdGEucm93LCBkYXRhLmNvbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyb2NrZXRzX3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWZXJ0aWNhbExpbmUoZGF0YS5jb2wpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm9tYl9tYXgnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFsbEJsb2NrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEhvcml6b250YWxMaW5lKHJvdzogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmNsdWRlc0V4dHJhQmxvY2sodGhpcy5ib2FyZFtyb3ddKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWZXJ0aWNhbExpbmUoY29sOiBudW1iZXIpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIGNvbnN0IGJsb2NrRm9yRGVzdHJveTogQm9hcmRUeXBlW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkWzBdLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICBibG9ja0ZvckRlc3Ryb3kucHVzaCh0aGlzLmJvYXJkW3ldW2NvbF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja0ZvckRlc3Ryb3k7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0Qm9tYkFyZWEoY2xpY2tlZFJvdzogbnVtYmVyLCBjbGlja2VkQ29sOiBudW1iZXIpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIGNvbnN0IGJsb2NrRm9yRGVzdHJveTogQm9hcmRUeXBlW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gY2xpY2tlZFJvdyAtIDE7IHJvdyA8PSBjbGlja2VkUm93ICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IGNsaWNrZWRDb2wgLSAxOyBjb2wgPD0gY2xpY2tlZENvbCArIDE7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+PSAwICYmIHJvdyA8IHRoaXMuYm9hcmQubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbCA+PSAwICYmIGNvbCA8IHRoaXMuYm9hcmRbcm93XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tGb3JEZXN0cm95LnB1c2godGhpcy5ib2FyZFtyb3ddW2NvbF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tGb3JEZXN0cm95O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbEJsb2NrcygpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoLi4udGhpcy5ib2FyZClcbiAgICB9XG4gICAgcHJpdmF0ZSBpbmNsdWRlc0V4dHJhQmxvY2soXG4gICAgICAgIGluaXRpYWxCbG9ja3M6IEJvYXJkVHlwZVtdXG4gICAgKTogQm9hcmRUeXBlW10ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQ6IFNldDxCb2FyZFR5cGU+ID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBxdWV1ZTogQm9hcmRUeXBlW10gPSBbLi4uaW5pdGlhbEJsb2Nrc107XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmICghYmxvY2sgfHwgdmlzaXRlZC5oYXMoYmxvY2spKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdmlzaXRlZC5hZGQoYmxvY2spO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYmxvY2spO1xuXG4gICAgICAgICAgICBpZiAoaXNFeHRyYUJsb2NrS2V5KGJsb2NrLmdldFR5cGUoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBCbG9ja0NsaWNrRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVHlwZTogYmxvY2suZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICByb3c6IGJsb2NrLmdldFJvdygpLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IGJsb2NrLmdldENvbCgpLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyDQstC80LXRgdGC0L4g0YDQtdC60YPRgNGB0LjQuCDigJQg0L/RgNC+0YHRgtC+INC00L7QsdCw0LLQu9GP0LXQvCDQsiDQvtGH0LXRgNC10LTRjFxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhQmxvY2tzID0gdGhpcy5oYW5kbGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCguLi5leHRyYUJsb2Nrcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG5cbn1cbiJdfQ==
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
    ExtraBlock.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXhydGFCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsaUNBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFvQjtJQUE1RDtRQUFBLHFFQWdCQztRQWRHLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRTdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDaEIsZUFBUyxHQUFrQixNQUFNLENBQUM7O0lBU2hELENBQUM7SUFSRywwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNTLGlDQUFZLEdBQXRCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBTlQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdCOUI7SUFBRCxpQkFBQztDQWhCRCxBQWdCQyxDQWhCdUMsZUFBSyxHQWdCNUM7a0JBaEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgeyBleHRyYUJsb2NrLCBFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYUJsb2NrIGV4dGVuZHMgQmxvY2s8RXh0cmFCbG9ja0tleT4ge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBhdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb2NrU3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYmxvY2tUeXBlOiBFeHRyYUJsb2NrS2V5ID0gJ2JvbWInO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWaXN1YWwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gdGhpcy5hdGxhcy5nZXRTcHJpdGVGcmFtZShleHRyYUJsb2NrW3RoaXMuYmxvY2tUeXBlXSk7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuYmxvY2tTcHJpdGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9XG59XG4iXX0=
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
    startXPosition: -400,
    startYPosition: 440,
    behindScreen: 600
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN0QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsY0FBYyxFQUFFLENBQUMsR0FBRztJQUNwQixjQUFjLEVBQUUsR0FBRztJQUNuQixZQUFZLEVBQUUsR0FBRztDQUNwQixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdyaWRDb25maWcgPSB7XHJcbiAgICB3aWR0aDogMTAwLFxyXG4gICAgaGVpZ2h0OiAxMTIsXHJcbiAgICBzdGFydFhQb3NpdGlvbjogLTQwMCxcclxuICAgIHN0YXJ0WVBvc2l0aW9uOiA0NDAsXHJcbiAgICBiZWhpbmRTY3JlZW46IDYwMFxyXG59Il19
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
        _this.minTargetScore = 300;
        _this.maxTargetScore = 100;
        return _this;
        // update (dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQXRERyxlQUFlO1FBQ1AsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3QixvQkFBYyxHQUFXLEdBQUcsQ0FBQzs7UUFzQzdCLGlCQUFpQjtJQUNyQixDQUFDO0lBdENhLDZCQUFNLEdBQWhCO1FBQ0ksbUJBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyxtQ0FBWSxHQUFwQixVQUFxQixHQUFXLEVBQUUsR0FBVztRQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBQ08scUNBQWMsR0FBdEIsVUFBdUIsYUFBcUI7UUFDeEMsSUFBSSxDQUFDLFlBQVksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ08sNkJBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ08sNEJBQUssR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLG1CQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDOUIsbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUNPLGlDQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFlBQVksU0FBSSxJQUFJLENBQUMsV0FBYSxDQUFDO0lBQzlGLENBQUM7SUFDUyxnQ0FBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsbUJBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUFFMUI7UUFEQyxRQUFRO2tEQUNhO0lBRXRCO1FBREMsUUFBUTtrREFDYTtJQUV0QjtRQURDLFFBQVE7d0RBQ29CO0lBRTdCO1FBREMsUUFBUTt3REFDb0I7SUFoQlosWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVEaEM7SUFBRCxtQkFBQztDQXZERCxBQXVEQyxDQXZEeUMsRUFBRSxDQUFDLFNBQVMsR0F1RHJEO2tCQXZEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHByaXZhdGUgc3RlcEFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmVBbW91bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY3VycmVudFNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtb3Zlc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5TdGVwczogbnVtYmVyID0gMTA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFN0ZXBzOiBudW1iZXIgPSA0MDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWluVGFyZ2V0U2NvcmU6IG51bWJlciA9IDMwMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4VGFyZ2V0U2NvcmU6IG51bWJlciA9IDEwMDtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ3N0ZXAnLCB0aGlzLm9uU3RlcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0ZXBBbW91bnQgPSB0aGlzLnJhbmRvbU51bWJlcih0aGlzLm1pblN0ZXBzLCB0aGlzLm1heFN0ZXBzKTtcclxuICAgICAgICB0aGlzLnNjb3JlQW1vdW50ID0gdGhpcy5yYW5kb21OdW1iZXIodGhpcy5taW5UYXJnZXRTY29yZSwgdGhpcy5tYXhUYXJnZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJsb2NrRGVzdHJveShkZXN0cm95TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSArPSBkZXN0cm95TGVuZ3RoICogMTA7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblN0ZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVwQW1vdW50IC09IDE7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1dpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NvcmUgPiB0aGlzLnNjb3JlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ2dhbWVFbmQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RlcEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBFdmVudEJ1cy5lbWl0KCdnYW1lRW5kJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVzTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0aGlzLnN0ZXBBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50U2NvcmV9LyR7dGhpcy5zY29yZUFtb3VudH1gO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdzdGVwJywgdGhpcy5vblN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
    Block.prototype.init = function (row, col, blockType) {
        this.row = row;
        this.col = col;
        this.blockType = blockType;
        this.updateVisual();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStDO0FBQy9DLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFnRSx5QkFBWTtJQUE1RTtRQUFBLHFFQWdFQztRQTlERyxXQUFLLEdBQW1CLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQU0sTUFBVyxDQUFDOztJQXVEekMsQ0FBQztJQXREYSxzQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxxQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUNKLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHlCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNNLG9CQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUUsR0FBVyxFQUFFLFNBQVk7UUFDOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ1MsNEJBQVksR0FBdEI7UUFDSSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBcUIsQ0FBQTtRQUN0QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxrQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ3JDLENBQUM7SUFFTSwrQkFBZSxHQUF0QjtRQUFBLGlCQVFDO1FBUEcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNSLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00sc0JBQU0sR0FBYixVQUFjLFNBQWtCLEVBQUUsSUFBWTtRQUMxQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2FBQ3hELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSw2QkFBYSxHQUFwQixVQUFxQixRQUFpQixFQUFFLFNBQWtCO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTyx1QkFBTyxHQUFmO1FBQ0ksbUJBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDUyx5QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3Q0FDSTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1E7SUFOVCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ0V6QjtJQUFELFlBQUM7Q0FoRUQsQUFnRUMsQ0FoRStELEVBQUUsQ0FBQyxTQUFTLEdBZ0UzRTtrQkFoRW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBibG9ja0NvbG9yLCBCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrPFQgZXh0ZW5kcyBzdHJpbmcgPSBCbG9ja0tleT4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgYXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmxvY2tTcHJpdGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCByb3c6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgY29sOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIGJsb2NrVHlwZTogVCA9ICdibHVlJyBhcyBUO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJsb2NrU3ByaXRlTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkgeyB9XHJcbiAgICBwdWJsaWMgZ2V0Um93KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENvbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrVHlwZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRSb3dDb2wocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XHJcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrVHlwZTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sID0gY29sO1xyXG4gICAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzdWFsKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmlzdWFsKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuYmxvY2tUeXBlIGFzIEJsb2NrS2V5XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLmF0bGFzLmdldFNwcml0ZUZyYW1lKGJsb2NrQ29sb3Jba2V5XSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3lZb3Vyc2VsZigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhbmltID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFydGljbGUgPSB0aGlzLnNtb2tlTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGFuaW0ub25jZSgnZmluaXNoZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgICBwYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZhbGxUbyh0YXJnZXRQb3M6IGNjLlZlYzMsIHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRpbWUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmFsbEFuaW1hdGlvbihzdGFydFBvczogY2MuVmVjMywgdGFyZ2V0UG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLmZhbGxUbyh0YXJnZXRQb3MsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uVG91Y2goKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnYmxvY2stY2xpY2tlZCcsIHsgYmxvY2tUeXBlOiB0aGlzLmJsb2NrVHlwZSwgcm93OiB0aGlzLnJvdywgY29sOiB0aGlzLmNvbCB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ibG9ja1Nwcml0ZU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        this.playBGM(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBL0JXLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUd6Qyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDOztJQTRCN0MsQ0FBQztxQkFqQ29CLFlBQVk7SUFPbkIsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLGNBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVPLDhCQUFPLEdBQWYsVUFBZ0IsSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxXQUFvQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUM7SUFFTSw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUNqQztJQUNMLENBQUM7O0lBL0JjLHFCQUFRLEdBQWlCLElBQUksQ0FBQztJQUk3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZEQUNrQjtJQUx4QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBaUNoQztJQUFELG1CQUFDO0NBakNELEFBaUNDLENBakN5QyxFQUFFLENBQUMsU0FBUyxHQWlDckQ7a0JBakNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kTXVzaWNJZDogbnVtYmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYmFja2dyb3VuZE11c2ljQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmIChBdWRpb01hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXlCR00odHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5QkdNKGxvb3A6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0NsaXAgJiYgIXRoaXMuYmFja2dyb3VuZE11c2ljSWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmFja2dyb3VuZE11c2ljQ2xpcCwgbG9vcCwgMC4wNik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iYWNrZ3JvdW5kTXVzaWNJZCk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0lkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------
