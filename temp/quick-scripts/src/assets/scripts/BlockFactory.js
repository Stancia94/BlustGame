"use strict";
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