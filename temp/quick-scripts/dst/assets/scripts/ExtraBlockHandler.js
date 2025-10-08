
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
Object.defineProperty(exports, "__esModule", { value: true });
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
        return (this.board[row]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXh0cmFCbG9ja0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUNJLDJCQUFvQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQUksQ0FBQztJQUN0QyxrQ0FBTSxHQUFiLFVBQWMsSUFBcUI7UUFDL0IsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BCLEtBQUssb0JBQW9CO2dCQUNyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxrQkFBa0I7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzNCLE1BQU07WUFDVjtnQkFDSSxPQUFPLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU87SUFDWCxDQUFDO0lBQ08sNkNBQWlCLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ08sMkNBQWUsR0FBdkIsVUFBd0IsR0FBVztRQUMvQixJQUFNLGVBQWUsR0FBZ0IsRUFBRSxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFDTyx1Q0FBVyxHQUFuQixVQUFvQixVQUFrQixFQUFFLFVBQWtCO1FBQ3RELElBQU0sZUFBZSxHQUFnQixFQUFFLENBQUM7UUFDeEMsS0FBSyxJQUFJLEdBQUcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pELEtBQUssSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07b0JBQ25DLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUMxQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDOUM7YUFDSjtTQUNKO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNPLHdDQUFZLEdBQXBCO1FBQ0ksT0FBTyxFQUFFLENBQUMsTUFBTSxPQUFULEVBQUUsRUFBVyxJQUFJLENBQUMsS0FBSyxFQUFDO0lBQ25DLENBQUM7SUFDTCx3QkFBQztBQUFELENBOUNBLEFBOENDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja0NsaWNrRXZlbnQsIEJvYXJkVHlwZSwgaXNFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFCbG9ja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYm9hcmQ6IEJvYXJkVHlwZVtdW10pIHsgfVxuICAgIHB1YmxpYyBoYW5kbGUoZGF0YTogQmxvY2tDbGlja0V2ZW50KTogQm9hcmRUeXBlW10ge1xuICAgICAgICBzd2l0Y2ggKGRhdGEuYmxvY2tUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyb2NrZXRzX2hvcml6b250YWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhvcml6b250YWxMaW5lKGRhdGEucm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvbWInOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJvbWJBcmVhKGRhdGEucm93LCBkYXRhLmNvbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyb2NrZXRzX3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWZXJ0aWNhbExpbmUoZGF0YS5jb2wpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm9tYl9tYXgnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFsbEJsb2NrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEhvcml6b250YWxMaW5lKHJvdzogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICByZXR1cm4gKHRoaXMuYm9hcmRbcm93XSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmVydGljYWxMaW5lKGNvbDogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3k6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZFswXS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgYmxvY2tGb3JEZXN0cm95LnB1c2godGhpcy5ib2FyZFt5XVtjb2xdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tGb3JEZXN0cm95O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEJvbWJBcmVhKGNsaWNrZWRSb3c6IG51bWJlciwgY2xpY2tlZENvbDogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3k6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGZvciAobGV0IHJvdyA9IGNsaWNrZWRSb3cgLSAxOyByb3cgPD0gY2xpY2tlZFJvdyArIDE7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBjbGlja2VkQ29sIC0gMTsgY29sIDw9IGNsaWNrZWRDb2wgKyAxOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPj0gMCAmJiByb3cgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICBjb2wgPj0gMCAmJiBjb2wgPCB0aGlzLmJvYXJkW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRm9yRGVzdHJveS5wdXNoKHRoaXMuYm9hcmRbcm93XVtjb2xdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2NrRm9yRGVzdHJveTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBbGxCbG9ja3MoKTogQm9hcmRUeXBlW10ge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KC4uLnRoaXMuYm9hcmQpXG4gICAgfVxufVxuIl19