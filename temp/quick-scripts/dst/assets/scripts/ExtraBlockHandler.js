
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