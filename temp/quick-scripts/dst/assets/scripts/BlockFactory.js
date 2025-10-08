
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
    BlockFactory.prototype.createBlock = function (row, col, blockType, size) {
        var block = cc.instantiate(this.blockPrefab);
        var blockComp = block.getComponent(Block_1.default);
        blockComp.init(row, col, blockType, size);
        this.parent.addChild(block);
        return blockComp;
    };
    BlockFactory.prototype.createExtraBlock = function (row, col, blockType, size) {
        var block = cc.instantiate(this.extraBlockPrefab);
        var blockComp = block.getComponent(ExrtaBlock_1.default);
        blockComp.init(row, col, blockType, size);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2tGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTRCO0FBQzVCLDJDQUFzQztBQUd0QztJQUNJLHNCQUNZLFdBQXNCLEVBQ3RCLGdCQUEyQixFQUMzQixNQUFlO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBSSxDQUFDO0lBRXpCLGtDQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBbUIsRUFBRSxJQUFjO1FBQzVFLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7UUFDNUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBd0IsRUFBRSxJQUFjO1FBQ3RGLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgRXh0cmFCbG9jayBmcm9tIFwiLi9FeHJ0YUJsb2NrXCI7XG5pbXBvcnQgeyBCbG9ja0tleSwgRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYmxvY2tQcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgcHJpdmF0ZSBleHRyYUJsb2NrUHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIHByaXZhdGUgcGFyZW50OiBjYy5Ob2RlKSB7IH1cblxuICAgIHB1YmxpYyBjcmVhdGVCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrVHlwZTogQmxvY2tLZXksIHNpemU/OiBjYy5WZWMyKTogQmxvY2sge1xuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2tQcmVmYWIpO1xuICAgICAgICBjb25zdCBibG9ja0NvbXAgPSBibG9jay5nZXRDb21wb25lbnQoQmxvY2spO1xuICAgICAgICBibG9ja0NvbXAuaW5pdChyb3csIGNvbCwgYmxvY2tUeXBlLCBzaXplKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGQoYmxvY2spO1xuICAgICAgICByZXR1cm4gYmxvY2tDb21wO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVFeHRyYUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgYmxvY2tUeXBlOiBFeHRyYUJsb2NrS2V5LCBzaXplPzogY2MuVmVjMik6IEV4dHJhQmxvY2sge1xuICAgICAgICBjb25zdCBibG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXh0cmFCbG9ja1ByZWZhYik7XG4gICAgICAgIGNvbnN0IGJsb2NrQ29tcCA9IGJsb2NrLmdldENvbXBvbmVudChFeHRyYUJsb2NrKTtcbiAgICAgICAgYmxvY2tDb21wLmluaXQocm93LCBjb2wsIGJsb2NrVHlwZSwgc2l6ZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkKGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrQ29tcDtcbiAgICB9XG5cbn1cbiJdfQ==