
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
        return this.board[row];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXh0cmFCbG9ja0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUNJLDJCQUFvQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQUksQ0FBQztJQUN0QyxrQ0FBTSxHQUFiLFVBQWMsSUFBcUI7UUFDL0IsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BCLEtBQUssb0JBQW9CO2dCQUNyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1YsS0FBSyxrQkFBa0I7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzNCLE1BQU07WUFDVjtnQkFDSSxPQUFPLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU87SUFDWCxDQUFDO0lBQ08sNkNBQWlCLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDTywyQ0FBZSxHQUF2QixVQUF3QixHQUFXO1FBQy9CLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBQ08sdUNBQVcsR0FBbkIsVUFBb0IsVUFBa0IsRUFBRSxVQUFrQjtRQUN0RCxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pELEtBQUssSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07b0JBQ25DLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUMxQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDOUM7YUFDSjtTQUNKO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNPLHdDQUFZLEdBQXBCO1FBQ0ksT0FBTyxFQUFFLENBQUMsTUFBTSxPQUFULEVBQUUsRUFBVyxJQUFJLENBQUMsS0FBSyxFQUFDO0lBQ25DLENBQUM7SUFDTCx3QkFBQztBQUFELENBOUNBLEFBOENDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja0NsaWNrRXZlbnQsIEJvYXJkVHlwZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhQmxvY2tIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvYXJkOiBCb2FyZFR5cGVbXVtdKSB7IH1cbiAgICBwdWJsaWMgaGFuZGxlKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCk6IEJvYXJkVHlwZVtdIHtcbiAgICAgICAgc3dpdGNoIChkYXRhLmJsb2NrVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncm9ja2V0c19ob3Jpem9udGFsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIb3Jpem9udGFsTGluZShkYXRhLnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib21iJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb21iQXJlYShkYXRhLnJvdywgZGF0YS5jb2wpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncm9ja2V0c192ZXJ0aWNhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmVydGljYWxMaW5lKGRhdGEuY29sKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvbWJfbWF4JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxCbG9ja3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRIb3Jpem9udGFsTGluZShyb3c6IG51bWJlcik6IEJvYXJkVHlwZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVxuICAgIH1cbiAgICBwcml2YXRlIGdldFZlcnRpY2FsTGluZShjb2w6IG51bWJlcik6IEJvYXJkVHlwZVtdIHtcbiAgICAgICAgY29uc3QgYmxvY2tGb3JEZXN0cm95ID0gW107XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZFswXS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgYmxvY2tGb3JEZXN0cm95LnB1c2godGhpcy5ib2FyZFt5XVtjb2xdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tGb3JEZXN0cm95O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEJvbWJBcmVhKGNsaWNrZWRSb3c6IG51bWJlciwgY2xpY2tlZENvbDogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3kgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gY2xpY2tlZFJvdyAtIDE7IHJvdyA8PSBjbGlja2VkUm93ICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IGNsaWNrZWRDb2wgLSAxOyBjb2wgPD0gY2xpY2tlZENvbCArIDE7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA+PSAwICYmIHJvdyA8IHRoaXMuYm9hcmQubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbCA+PSAwICYmIGNvbCA8IHRoaXMuYm9hcmRbcm93XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tGb3JEZXN0cm95LnB1c2godGhpcy5ib2FyZFtyb3ddW2NvbF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tGb3JEZXN0cm95O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbEJsb2NrcygpOiBCb2FyZFR5cGVbXSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoLi4udGhpcy5ib2FyZClcbiAgICB9XG59XG4iXX0=