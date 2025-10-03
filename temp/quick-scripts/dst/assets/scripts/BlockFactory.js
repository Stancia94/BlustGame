
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BlockFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd87fVJhNtJvLCKKnzme0Aa', 'BlockFactory');
// scripts/BlockFactory.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = require("./Block");
var ExrtaBlock_1 = require("./ExrtaBlock");
var BlockFactory = /** @class */ (function () {
    function BlockFactory(blockPrefab, extraBlockPrefab, parent) {
        this.blockPrefab = blockPrefab;
        this.extraBlockPrefab = extraBlockPrefab;
        this.parent = parent;
    }
    BlockFactory.prototype.createBlock = function (row, col, blockType) {
        var block = cc.instantiate(this.blockPrefab);
        var blockComp = block.getComponent(Block_1.default);
        blockComp.init(row, col, blockType);
        this.parent.addChild(block);
        return blockComp;
    };
    BlockFactory.prototype.createExtraBlock = function (row, col, blockType) {
        var block = cc.instantiate(this.extraBlockPrefab);
        var blockComp = block.getComponent(ExrtaBlock_1.default);
        blockComp.init(row, col, blockType);
        this.parent.addChild(block);
        return blockComp;
    };
    return BlockFactory;
}());
exports.default = BlockFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2tGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTRCO0FBQzVCLDJDQUFzQztBQUd0QztJQUNJLHNCQUNZLFdBQXNCLEVBQ3RCLGdCQUEyQixFQUMzQixNQUFlO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBSSxDQUFDO0lBRXpCLGtDQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBbUI7UUFDNUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVNLHVDQUFnQixHQUF2QixVQUF3QixHQUFXLEVBQUUsR0FBVyxFQUFFLFNBQXdCO1FBQ3RFLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFTCxtQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcbmltcG9ydCBFeHRyYUJsb2NrIGZyb20gXCIuL0V4cnRhQmxvY2tcIjtcbmltcG9ydCB7IEJsb2NrS2V5LCBFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBibG9ja1ByZWZhYjogY2MuUHJlZmFiLFxuICAgICAgICBwcml2YXRlIGV4dHJhQmxvY2tQcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgcHJpdmF0ZSBwYXJlbnQ6IGNjLk5vZGUpIHsgfVxuXG4gICAgcHVibGljIGNyZWF0ZUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2tUeXBlOiBCbG9ja0tleSk6IEJsb2NrIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcbiAgICAgICAgY29uc3QgYmxvY2tDb21wID0gYmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrKTtcbiAgICAgICAgYmxvY2tDb21wLmluaXQocm93LCBjb2wsIGJsb2NrVHlwZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29tcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlRXh0cmFCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrVHlwZTogRXh0cmFCbG9ja0tleSk6IEV4dHJhQmxvY2sge1xuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXh0cmFCbG9ja1ByZWZhYik7XG4gICAgICAgIGNvbnN0IGJsb2NrQ29tcCA9IGJsb2NrLmdldENvbXBvbmVudChFeHRyYUJsb2NrKTtcbiAgICAgICAgYmxvY2tDb21wLmluaXQocm93LCBjb2wsIGJsb2NrVHlwZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29tcDtcbiAgICB9XG5cbn1cbiJdfQ==