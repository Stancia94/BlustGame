"use strict";
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