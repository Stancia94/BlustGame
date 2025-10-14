"use strict";
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