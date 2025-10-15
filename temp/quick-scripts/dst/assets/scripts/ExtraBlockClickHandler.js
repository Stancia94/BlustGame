
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
        if (!Types_1.isExtraBlockKey(data.blockType))
            return _super.prototype.handle.call(this, data, commands);
        var toProcess = [data];
        var processed = new Set();
        while (toProcess.length > 0) {
            var current = toProcess.pop();
            var key = current.row + "_" + current.col;
            if (processed.has(key))
                continue;
            processed.add(key);
            var groupForDestroy = [];
            switch (current.blockType) {
                case 'rockets_horizontal':
                    groupForDestroy = this.getHorizontalLine(current.row);
                    break;
                case 'bomb':
                    groupForDestroy = this.getBombArea(current.row, current.col);
                    break;
                case 'rockets_vertical':
                    groupForDestroy = this.getVerticalLine(current.col);
                    break;
                case 'bomb_max':
                    groupForDestroy = this.getAllBlocks();
                    break;
            }
            if (groupForDestroy.length > 0) {
                groupForDestroy.forEach(function (block) {
                    if (Types_1.isExtraBlockKey(block.getType())) {
                        var next = {
                            blockType: block.getType(),
                            row: block.getRow(),
                            col: block.getCol(),
                        };
                        toProcess.push(next);
                    }
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXh0cmFCbG9ja0NsaWNrSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsaUNBQXNFO0FBQ3RFLHVDQUF3RDtBQUV4RDtJQUFvRCwwQ0FBWTtJQUM1RCxnQ0FBWSxLQUFvQjtlQUM1QixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUNNLHVDQUFNLEdBQWIsVUFBYyxJQUFxQixFQUFFLFFBQXdCO1FBQ3pELElBQUksQ0FBQyx1QkFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFBRSxPQUFPLGlCQUFNLE1BQU0sWUFBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFMUUsSUFBTSxTQUFTLEdBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBTSxTQUFTLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFekMsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFHLENBQUM7WUFDakMsSUFBTSxHQUFHLEdBQU0sT0FBTyxDQUFDLEdBQUcsU0FBSSxPQUFPLENBQUMsR0FBSyxDQUFDO1lBQzVDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsU0FBUztZQUNqQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksZUFBZSxHQUFnQixFQUFFLENBQUM7WUFDdEMsUUFBUSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUN2QixLQUFLLG9CQUFvQjtvQkFDckIsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELE1BQU07Z0JBQ1YsS0FBSyxNQUFNO29CQUNQLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFD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aW1wb3J0IHsgQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vSGFuZGxlckludGVyZmFjZVwiO1xuaW1wb3J0IHsgQmxvY2tDbGlja0V2ZW50LCBCb2FyZFR5cGUsIGlzRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBCb2FyZENvbW1hbmQsIERlc3Ryb3lHcm91cCB9IGZyb20gXCIuL0NvbW1hbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhQmxvY2tDbGlja0hhbmRsZXIgZXh0ZW5kcyBDbGlja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkOiBCb2FyZFR5cGVbXVtdKSB7XG4gICAgICAgIHN1cGVyKGJvYXJkKTtcbiAgICB9XG4gICAgcHVibGljIGhhbmRsZShkYXRhOiBCbG9ja0NsaWNrRXZlbnQsIGNvbW1hbmRzOiBCb2FyZENvbW1hbmRbXSk6IEJvYXJkQ29tbWFuZFtdIHtcbiAgICAgICAgaWYgKCFpc0V4dHJhQmxvY2tLZXkoZGF0YS5ibG9ja1R5cGUpKSByZXR1cm4gc3VwZXIuaGFuZGxlKGRhdGEsIGNvbW1hbmRzKTtcblxuICAgICAgICBjb25zdCB0b1Byb2Nlc3M6IEJsb2NrQ2xpY2tFdmVudFtdID0gW2RhdGFdO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHdoaWxlICh0b1Byb2Nlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRvUHJvY2Vzcy5wb3AoKSE7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtjdXJyZW50LnJvd31fJHtjdXJyZW50LmNvbH1gO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3NlZC5oYXMoa2V5KSkgY29udGludWU7XG4gICAgICAgICAgICBwcm9jZXNzZWQuYWRkKGtleSk7XG4gICAgICAgICAgICBsZXQgZ3JvdXBGb3JEZXN0cm95OiBCb2FyZFR5cGVbXSA9IFtdO1xuICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50LmJsb2NrVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JvY2tldHNfaG9yaXpvbnRhbCc6XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRm9yRGVzdHJveSA9IHRoaXMuZ2V0SG9yaXpvbnRhbExpbmUoY3VycmVudC5yb3cpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdib21iJzpcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBGb3JEZXN0cm95ID0gdGhpcy5nZXRCb21iQXJlYShjdXJyZW50LnJvdywgY3VycmVudC5jb2wpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyb2NrZXRzX3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBGb3JEZXN0cm95ID0gdGhpcy5nZXRWZXJ0aWNhbExpbmUoY3VycmVudC5jb2wpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdib21iX21heCc6XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRm9yRGVzdHJveSA9IHRoaXMuZ2V0QWxsQmxvY2tzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdyb3VwRm9yRGVzdHJveS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBGb3JEZXN0cm95LmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeHRyYUJsb2NrS2V5KGJsb2NrLmdldFR5cGUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQ6IEJsb2NrQ2xpY2tFdmVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1R5cGU6IGJsb2NrLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IGJsb2NrLmdldFJvdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogYmxvY2suZ2V0Q29sKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Qcm9jZXNzLnB1c2gobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb21tYW5kcy5wdXNoKG5ldyBEZXN0cm95R3JvdXAoZ3JvdXBGb3JEZXN0cm95KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuaGFuZGxlKGRhdGEsIGNvbW1hbmRzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhvcml6b250YWxMaW5lKHJvdzogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICByZXR1cm4gKHRoaXMuYm9hcmRbcm93XSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmVydGljYWxMaW5lKGNvbDogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3k6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZFswXS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgYmxvY2tGb3JEZXN0cm95LnB1c2godGhpcy5ib2FyZFt5XVtjb2xdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tGb3JEZXN0cm95O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEJvbWJBcmVhKGNsaWNrZWRSb3c6IG51bWJlciwgY2xpY2tlZENvbDogbnVtYmVyKTogQm9hcmRUeXBlW10ge1xuICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3k6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGZvciAobGV0IHJvdyA9IGNsaWNrZWRSb3cgLSAxOyByb3cgPD0gY2xpY2tlZFJvdyArIDE7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBjbGlja2VkQ29sIC0gMTsgY29sIDw9IGNsaWNrZWRDb2wgKyAxOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPj0gMCAmJiByb3cgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICBjb2wgPj0gMCAmJiBjb2wgPCB0aGlzLmJvYXJkW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRm9yRGVzdHJveS5wdXNoKHRoaXMuYm9hcmRbcm93XVtjb2xdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsb2NrRm9yRGVzdHJveTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBbGxCbG9ja3MoKTogQm9hcmRUeXBlW10ge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KC4uLnRoaXMuYm9hcmQpXG4gICAgfVxufVxuIl19