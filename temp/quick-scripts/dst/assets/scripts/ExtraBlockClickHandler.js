
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