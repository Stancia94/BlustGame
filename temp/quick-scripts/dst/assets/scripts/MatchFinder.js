
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