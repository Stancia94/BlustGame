"use strict";
cc._RF.push(module, 'a41a5/8pm1E7ZTbXkxefwwa', 'BlockClickHandler');
// scripts/BlockClickHandler.ts

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
exports.BlockClickHandler = void 0;
var Commands_1 = require("./Commands");
var HandlerInterface_1 = require("./HandlerInterface");
var MatchFinder_1 = require("./MatchFinder");
var Types_1 = require("./Types");
var BlockClickHandler = /** @class */ (function (_super) {
    __extends(BlockClickHandler, _super);
    function BlockClickHandler(board) {
        var _this = _super.call(this, board) || this;
        _this.matchFinder = new MatchFinder_1.default(board);
        return _this;
    }
    BlockClickHandler.prototype.handle = function (data, commands) {
        if (Types_1.isBlockKey(data.blockType)) {
            var sameBlocks = [];
            sameBlocks = this.matchFinder.find(data.row, data.col, data.blockType);
            if (sameBlocks.length >= 2) {
                this.emitStep();
                if (sameBlocks.length >= 5) {
                    commands.push(new Commands_1.UpgradeToExtraBlock(data.row, data.col, sameBlocks));
                }
                commands.push(new Commands_1.DestroyGroup(sameBlocks));
                return commands;
            }
        }
        return _super.prototype.handle.call(this, data, commands);
    };
    return BlockClickHandler;
}(HandlerInterface_1.ClickHandler));
exports.BlockClickHandler = BlockClickHandler;

cc._RF.pop();