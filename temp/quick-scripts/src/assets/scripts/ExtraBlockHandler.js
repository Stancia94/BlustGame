"use strict";
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