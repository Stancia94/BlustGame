
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BlockClickHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2tDbGlja0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2RTtBQUM3RSx1REFBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDLGlDQUFpRTtBQUVqRTtJQUF1QyxxQ0FBWTtJQUUvQywyQkFBWSxLQUFvQjtRQUFoQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUVmO1FBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQzlDLENBQUM7SUFDRCxrQ0FBTSxHQUFOLFVBQU8sSUFBcUIsRUFBRSxRQUF3QjtRQUNsRCxJQUFJLGtCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVCLElBQUksVUFBVSxHQUFnQixFQUFFLENBQUM7WUFDakMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkUsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQzFFO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sUUFBUSxDQUFDO2FBQ25CO1NBQ0o7UUFDRCxPQUFPLGlCQUFNLE1BQU0sWUFBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQnNDLCtCQUFZLEdBcUJsRDtBQXJCWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZENvbW1hbmQsIERlc3Ryb3lHcm91cCwgVXBncmFkZVRvRXh0cmFCbG9jayB9IGZyb20gXCIuL0NvbW1hbmRzXCI7XG5pbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi9IYW5kbGVySW50ZXJmYWNlXCI7XG5pbXBvcnQgTWF0Y2hGaW5kZXIgZnJvbSBcIi4vTWF0Y2hGaW5kZXJcIjtcbmltcG9ydCB7IEJsb2NrQ2xpY2tFdmVudCwgQm9hcmRUeXBlLCBpc0Jsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIEJsb2NrQ2xpY2tIYW5kbGVyIGV4dGVuZHMgQ2xpY2tIYW5kbGVyIHtcbiAgICBwcml2YXRlIG1hdGNoRmluZGVyOiBNYXRjaEZpbmRlcjtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZDogQm9hcmRUeXBlW11bXSkge1xuICAgICAgICBzdXBlcihib2FyZCk7XG4gICAgICAgIHRoaXMubWF0Y2hGaW5kZXIgPSBuZXcgTWF0Y2hGaW5kZXIoYm9hcmQpO1xuICAgIH1cbiAgICBoYW5kbGUoZGF0YTogQmxvY2tDbGlja0V2ZW50LCBjb21tYW5kczogQm9hcmRDb21tYW5kW10pOiBCb2FyZENvbW1hbmRbXSB7XG4gICAgICAgIGlmIChpc0Jsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xuICAgICAgICAgICAgbGV0IHNhbWVCbG9ja3M6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgICAgICBzYW1lQmxvY2tzID0gdGhpcy5tYXRjaEZpbmRlci5maW5kKGRhdGEucm93LCBkYXRhLmNvbCwgZGF0YS5ibG9ja1R5cGUpO1xuICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTdGVwKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChuZXcgVXBncmFkZVRvRXh0cmFCbG9jayhkYXRhLnJvdywgZGF0YS5jb2wsIHNhbWVCbG9ja3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChuZXcgRGVzdHJveUdyb3VwKHNhbWVCbG9ja3MpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZShkYXRhLCBjb21tYW5kcyk7XG4gICAgfVxufSJdfQ==