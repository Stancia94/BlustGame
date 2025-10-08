
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/AudioManager');
require('./assets/scripts/Block');
require('./assets/scripts/BlockFactory');
require('./assets/scripts/Board');
require('./assets/scripts/BoardSizer');
require('./assets/scripts/EventBus');
require('./assets/scripts/ExrtaBlock');
require('./assets/scripts/ExtraBlockHandler');
require('./assets/scripts/GameManager');
require('./assets/scripts/GridConfig');
require('./assets/scripts/LimitNodeSize');
require('./assets/scripts/MatchFinder');
require('./assets/scripts/ResultScreen');
require('./assets/scripts/ScoreManager');
require('./assets/scripts/StartGameScript');
require('./assets/scripts/Types');
require('./assets/scripts/Utils');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ExrtaBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3e44F1XqVA/rIUI4wg3QZK', 'ExrtaBlock');
// scripts/ExrtaBlock.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = require("./Block");
var Types_1 = require("./Types");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExtraBlock = /** @class */ (function (_super) {
    __extends(ExtraBlock, _super);
    function ExtraBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.blockSpriteNode = null;
        _this.smokeNode = null;
        _this.blockType = 'bomb';
        return _this;
    }
    ExtraBlock.prototype.updateVisual = function () {
        var spriteFrame = this.atlas.getSpriteFrame(Types_1.extraBlock[this.blockType]);
        var sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], ExtraBlock.prototype, "atlas", void 0);
    __decorate([
        property(cc.Node)
    ], ExtraBlock.prototype, "blockSpriteNode", void 0);
    __decorate([
        property(cc.Node)
    ], ExtraBlock.prototype, "smokeNode", void 0);
    ExtraBlock = __decorate([
        ccclass
    ], ExtraBlock);
    return ExtraBlock;
}(Block_1.default));
exports.default = ExtraBlock;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXhydGFCbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsaUNBQW9EO0FBRTlDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFvQjtJQUE1RDtRQUFBLHFFQWNDO1FBWkcsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQWtCLE1BQU0sQ0FBQzs7SUFPaEQsQ0FBQztJQUxhLGlDQUFZLEdBQXRCO1FBQ0ksSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsa0JBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ0k7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBTlQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWM5QjtJQUFELGlCQUFDO0NBZEQsQUFjQyxDQWR1QyxlQUFLLEdBYzVDO2tCQWRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgeyBleHRyYUJsb2NrLCBFeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYUJsb2NrIGV4dGVuZHMgQmxvY2s8RXh0cmFCbG9ja0tleT4ge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBhdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb2NrU3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYmxvY2tUeXBlOiBFeHRyYUJsb2NrS2V5ID0gJ2JvbWInO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZpc3VhbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLmF0bGFzLmdldFNwcml0ZUZyYW1lKGV4dHJhQmxvY2tbdGhpcy5ibG9ja1R5cGVdKTtcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/EventBus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1031b17tjJOaoSO1zgE7cBe', 'EventBus');
// scripts/EventBus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
exports.EventBus = new cc.EventTarget();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXZlbnRCdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsUUFBQSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRXZlbnRCdXMgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c83dPkm/1MII5N70drOG2A', 'GameManager');
// scripts/GameManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.victoryScreenPrefab = null;
        _this.lossScreeenPrefab = null;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.onLoad = function () {
        EventBus_1.EventBus.on('gameEnd', this.onGameEnd, this);
    };
    GameManager.prototype.start = function () { };
    GameManager.prototype.onGameEnd = function (isWin) {
        var prefabScreen = isWin ? this.victoryScreenPrefab : this.lossScreeenPrefab;
        var screen = cc.instantiate(prefabScreen);
        screen.parent = cc.find("Canvas");
        screen.setPosition(0, 0, 0);
    };
    GameManager.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('gameEnd', this.onGameEnd, this);
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "victoryScreenPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "lossScreeenPrefab", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbUJDO1FBakJHLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUV0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7O1FBY3BDLGlCQUFpQjtJQUNyQixDQUFDO0lBZGEsNEJBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsMkJBQUssR0FBTCxjQUFVLENBQUM7SUFDSCwrQkFBUyxHQUFqQixVQUFrQixLQUFjO1FBQzVCLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDL0UsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDUywrQkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFmRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNnQjtJQUpuQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUIvQjtJQUFELGtCQUFDO0NBbkJELEFBbUJDLENBbkJ3QyxFQUFFLENBQUMsU0FBUyxHQW1CcEQ7a0JBbkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdmljdG9yeVNjcmVlblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxvc3NTY3JlZWVuUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEV2ZW50QnVzLm9uKCdnYW1lRW5kJywgdGhpcy5vbkdhbWVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICBzdGFydCgpIHsgfVxuICAgIHByaXZhdGUgb25HYW1lRW5kKGlzV2luOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZWZhYlNjcmVlbiA9IGlzV2luID8gdGhpcy52aWN0b3J5U2NyZWVuUHJlZmFiIDogdGhpcy5sb3NzU2NyZWVlblByZWZhYjtcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gY2MuaW5zdGFudGlhdGUocHJlZmFiU2NyZWVuKTtcbiAgICAgICAgc2NyZWVuLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIHNjcmVlbi5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdnYW1lRW5kJywgdGhpcy5vbkdhbWVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63747QUknZB3qJ0RhUyfLRw', 'Board');
// scripts/Board.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("./Types");
var Utils_1 = require("./Utils");
var EventBus_1 = require("./EventBus");
var GridConfig_1 = require("./GridConfig");
var MatchFinder_1 = require("./MatchFinder");
var BlockFactory_1 = require("./BlockFactory");
var ExtraBlockHandler_1 = require("./ExtraBlockHandler");
var BoardSizer_1 = require("./BoardSizer");
var Vec3 = cc.Vec3;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockPrefab = null;
        _this.extraBlockPrefab = null;
        _this.width = 9;
        _this.height = 9;
        return _this;
    }
    Board.prototype.onLoad = function () {
        EventBus_1.EventBus.on('block-clicked', this.onBlockClicked, this);
        EventBus_1.EventBus.on('board-change-size', this.onResize, this);
    };
    Board.prototype.start = function () {
        var _this = this;
        this.board = new Array(this.height).fill(0).map(function () { return new Array(_this.width).fill(null); });
        this.matchFinder = new MatchFinder_1.default(this.board);
        this.blockFactory = new BlockFactory_1.default(this.blockPrefab, this.extraBlockPrefab, this.node);
        this.extraBlockHandler = new ExtraBlockHandler_1.default(this.board);
        this.blockSizer = new BoardSizer_1.default(this.node, this.width, new cc.Vec2(GridConfig_1.GridConfig.width, GridConfig_1.GridConfig.height));
        this.scheduleOnce(function () {
            _this.blockSizer.setBlockSize(_this.blockSizer.calculateBlockSize());
            _this.fill();
        }, 0);
    };
    Board.prototype.fill = function () {
        var blockSize = this.blockSizer.getBlockSize();
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                if (this.board[y][x] === null) {
                    var block = this.blockFactory.createBlock(y, x, Utils_1.getRandomBlockKey(), blockSize);
                    this.setBlock(y, x, block);
                    var startPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, GridConfig_1.GridConfig.behindScreen);
                    var targetPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, (this.node.height / 2 - blockSize.y) - blockSize.y * y, 0);
                    block.fallAnimation(startPos, targetPos);
                }
            }
        }
    };
    Board.prototype.fall = function () {
        var blockSize = this.blockSizer.getBlockSize();
        for (var x = 0; x < this.width; x++) {
            for (var y = this.height - 2; y >= 0; y--) {
                var block = this.board[y][x];
                if (!block)
                    continue;
                var newY = y;
                while (newY + 1 < this.height && this.board[newY + 1][x] === null) {
                    newY++;
                }
                if (newY !== y) {
                    this.board[y][x] = null;
                    this.setBlock(newY, x, block);
                    var targetPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, (this.node.height / 2 - blockSize.y) - blockSize.y * newY, 0);
                    block.fallTo(targetPos, 0.4);
                }
            }
        }
    };
    Board.prototype.destroyGroup = function (blocks) {
        var _this = this;
        EventBus_1.EventBus.emit('blocks-destroy', blocks.length);
        blocks.forEach(function (block) {
            block.destroyYourself();
            _this.board[block.getRow()][block.getCol()] = null;
        });
        this.fall();
        this.fill();
    };
    Board.prototype.onBlockClicked = function (data) {
        if (Types_1.isBlockKey(data.blockType)) {
            var sameBlocks = [];
            sameBlocks = this.matchFinder.find(data.row, data.col, data.blockType);
            if (sameBlocks.length >= 2) {
                EventBus_1.EventBus.emit('step');
                if (sameBlocks.length >= 5) {
                    this.upgradeToExtraBlock(data.row, data.col, sameBlocks);
                }
                this.destroyGroup(sameBlocks);
            }
        }
        else if (Types_1.isExtraBlockKey(data.blockType)) {
            var blockForDestroy = this.extraBlockHandler.handle(data);
            this.destroyGroup(blockForDestroy);
        }
    };
    Board.prototype.upgradeToExtraBlock = function (row, col, blocksForDestroy) {
        this.deleteBlock(row, col);
        var blockSize = this.blockSizer.getBlockSize();
        var extraBlock = null;
        if (blocksForDestroy.length >= 8) {
            extraBlock = this.blockFactory.createExtraBlock(row, col, 'bomb_max', blockSize);
        }
        else {
            extraBlock = this.blockFactory.createExtraBlock(row, col, Utils_1.getRandomExtraBlockKey(['bomb_max']), blockSize);
        }
        this.setBlock(row, col, extraBlock);
        extraBlock.node.setPosition(new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * col, (this.node.height / 2 - blockSize.y) - blockSize.y * row, 0));
        var index = blocksForDestroy.findIndex(function (block) { return block.getRow() === row && block.getCol() === col; });
        if (index >= 0)
            blocksForDestroy.splice(index, 1);
    };
    Board.prototype.deleteBlock = function (row, col) {
        var block = this.board[row][col];
        block.destroyYourself();
        this.board[row][col] = null;
    };
    Board.prototype.setBlock = function (row, col, block) {
        block.setRowCol(row, col);
        this.board[row][col] = block;
    };
    Board.prototype.onResize = function () {
        if (!this.board)
            return;
        this.blockSizer.setBlockSize(this.blockSizer.calculateBlockSize());
        var blockSize = this.blockSizer.getBlockSize();
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                var block = this.board[y][x];
                block === null || block === void 0 ? void 0 : block.setSize(blockSize);
                var targetPos = new Vec3(-(this.node.width / 2 - blockSize.x) + blockSize.x * x, (this.node.height / 2 - blockSize.y) - blockSize.y * y, 0);
                block === null || block === void 0 ? void 0 : block.node.setPosition(targetPos);
            }
        }
    };
    Board.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('board-change-size', this.onResize, this);
        EventBus_1.EventBus.off('block-clicked', this.onBlockClicked, this);
    };
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "blockPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "extraBlockPrefab", void 0);
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWtGO0FBQ2xGLGlDQUFvRTtBQUNwRSx1Q0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMseURBQW9EO0FBRXBELDJDQUFzQztBQUU5QixJQUFBLElBQUksR0FBSyxFQUFFLEtBQVAsQ0FBUTtBQUNkLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBaUpDO1FBL0lHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBMkkvQixDQUFDO0lBcklhLHNCQUFNLEdBQWhCO1FBQ0ksbUJBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsbUJBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMscUJBQUssR0FBZjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxx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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQzFCLElBQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDdEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUN0RCxDQUFDLENBQUMsQ0FBQztnQkFDUCxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7YUFDdEM7U0FDSjtJQUNMLENBQUM7SUFDUyx5QkFBUyxHQUFuQjtRQUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsbUJBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTlJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ2U7SUFKbEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlKekI7SUFBRCxZQUFDO0NBakpELEFBaUpDLENBakprQyxFQUFFLENBQUMsU0FBUyxHQWlKOUM7a0JBakpvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmRUeXBlLCBCbG9ja0NsaWNrRXZlbnQsIGlzQmxvY2tLZXksIGlzRXh0cmFCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUJsb2NrS2V5LCBnZXRSYW5kb21FeHRyYUJsb2NrS2V5IH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnIH0gZnJvbSBcIi4vR3JpZENvbmZpZ1wiO1xyXG5pbXBvcnQgTWF0Y2hGaW5kZXIgZnJvbSBcIi4vTWF0Y2hGaW5kZXJcIjtcclxuaW1wb3J0IEJsb2NrRmFjdG9yeSBmcm9tIFwiLi9CbG9ja0ZhY3RvcnlcIjtcclxuaW1wb3J0IEV4dHJhQmxvY2tIYW5kbGVyIGZyb20gXCIuL0V4dHJhQmxvY2tIYW5kbGVyXCI7XHJcbmltcG9ydCBFeHRyYUJsb2NrIGZyb20gXCIuL0V4cnRhQmxvY2tcIjtcclxuaW1wb3J0IEJvYXJkU2l6ZXIgZnJvbSBcIi4vQm9hcmRTaXplclwiO1xyXG5cclxuY29uc3QgeyBWZWMzIH0gPSBjYztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJsb2NrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGV4dHJhQmxvY2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIgPSA5O1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlciA9IDk7XHJcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZFR5cGVbXVtdO1xyXG4gICAgcHJpdmF0ZSBtYXRjaEZpbmRlcjogTWF0Y2hGaW5kZXI7XHJcbiAgICBwcml2YXRlIGJsb2NrRmFjdG9yeTogQmxvY2tGYWN0b3J5O1xyXG4gICAgcHJpdmF0ZSBleHRyYUJsb2NrSGFuZGxlcjogRXh0cmFCbG9ja0hhbmRsZXI7XHJcbiAgICBwcml2YXRlIGJsb2NrU2l6ZXI6IEJvYXJkU2l6ZXI7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9uKCdibG9jay1jbGlja2VkJywgdGhpcy5vbkJsb2NrQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2JvYXJkLWNoYW5nZS1zaXplJywgdGhpcy5vblJlc2l6ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5oZWlnaHQpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLndpZHRoKS5maWxsKG51bGwpKTtcclxuICAgICAgICB0aGlzLm1hdGNoRmluZGVyID0gbmV3IE1hdGNoRmluZGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tGYWN0b3J5ID0gbmV3IEJsb2NrRmFjdG9yeSh0aGlzLmJsb2NrUHJlZmFiLCB0aGlzLmV4dHJhQmxvY2tQcmVmYWIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5leHRyYUJsb2NrSGFuZGxlciA9IG5ldyBFeHRyYUJsb2NrSGFuZGxlcih0aGlzLmJvYXJkKTtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZXIgPSBuZXcgQm9hcmRTaXplcih0aGlzLm5vZGUsIHRoaXMud2lkdGgsIG5ldyBjYy5WZWMyKEdyaWRDb25maWcud2lkdGgsIEdyaWRDb25maWcuaGVpZ2h0KSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaXplci5zZXRCbG9ja1NpemUodGhpcy5ibG9ja1NpemVyLmNhbGN1bGF0ZUJsb2NrU2l6ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlQmxvY2soeSwgeCwgZ2V0UmFuZG9tQmxvY2tLZXkoKSwgYmxvY2tTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJsb2NrKHksIHgsIGJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtKHRoaXMubm9kZS53aWR0aCAvIDIgLSBibG9ja1NpemUueCkgKyBibG9ja1NpemUueCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdyaWRDb25maWcuYmVoaW5kU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IG5ldyBWZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtKHRoaXMubm9kZS53aWR0aCAvIDIgLSBibG9ja1NpemUueCkgKyBibG9ja1NpemUueCAqIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIGJsb2NrU2l6ZS55KSAtIGJsb2NrU2l6ZS55ICogeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmFsbEFuaW1hdGlvbihzdGFydFBvcywgdGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZmFsbCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZXIuZ2V0QmxvY2tTaXplKClcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAyOyB5ID49IDA7IHktLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFibG9jaykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3WSArIDEgPCB0aGlzLmhlaWdodCAmJiB0aGlzLmJvYXJkW25ld1kgKyAxXVt4XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1krKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdZICE9PSB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCbG9jayhuZXdZLCB4LCBibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gbmV3IFZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0odGhpcy5ub2RlLndpZHRoIC8gMiAtIGJsb2NrU2l6ZS54KSArIGJsb2NrU2l6ZS54ICogeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubm9kZS5oZWlnaHQgLyAyIC0gYmxvY2tTaXplLnkpIC0gYmxvY2tTaXplLnkgKiBuZXdZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9jay5mYWxsVG8odGFyZ2V0UG9zLCAwLjQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlc3Ryb3lHcm91cChibG9ja3M6IEJvYXJkVHlwZVtdKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnYmxvY2tzLWRlc3Ryb3knLCBibG9ja3MubGVuZ3RoKTtcclxuICAgICAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbYmxvY2suZ2V0Um93KCldW2Jsb2NrLmdldENvbCgpXSA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mYWxsKCk7XHJcbiAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uQmxvY2tDbGlja2VkKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc0Jsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xyXG4gICAgICAgICAgICBsZXQgc2FtZUJsb2NrczogQm9hcmRUeXBlW10gPSBbXTtcclxuICAgICAgICAgICAgc2FtZUJsb2NrcyA9IHRoaXMubWF0Y2hGaW5kZXIuZmluZChkYXRhLnJvdywgZGF0YS5jb2wsIGRhdGEuYmxvY2tUeXBlKTtcclxuICAgICAgICAgICAgaWYgKHNhbWVCbG9ja3MubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ3N0ZXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzYW1lQmxvY2tzLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGdyYWRlVG9FeHRyYUJsb2NrKGRhdGEucm93LCBkYXRhLmNvbCwgc2FtZUJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lHcm91cChzYW1lQmxvY2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNFeHRyYUJsb2NrS2V5KGRhdGEuYmxvY2tUeXBlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBibG9ja0ZvckRlc3Ryb3kgPSB0aGlzLmV4dHJhQmxvY2tIYW5kbGVyLmhhbmRsZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95R3JvdXAoYmxvY2tGb3JEZXN0cm95KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZ3JhZGVUb0V4dHJhQmxvY2socm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja3NGb3JEZXN0cm95OiBCb2FyZFR5cGVbXSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQmxvY2socm93LCBjb2wpO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplci5nZXRCbG9ja1NpemUoKVxyXG4gICAgICAgIGxldCBleHRyYUJsb2NrOiBFeHRyYUJsb2NrID0gbnVsbDtcclxuICAgICAgICBpZiAoYmxvY2tzRm9yRGVzdHJveS5sZW5ndGggPj0gOCkge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgJ2JvbWJfbWF4JywgYmxvY2tTaXplKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleHRyYUJsb2NrID0gdGhpcy5ibG9ja0ZhY3RvcnkuY3JlYXRlRXh0cmFCbG9jayhyb3csIGNvbCwgZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShbJ2JvbWJfbWF4J10pLCBibG9ja1NpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEJsb2NrKHJvdywgY29sLCBleHRyYUJsb2NrKTtcclxuICAgICAgICBleHRyYUJsb2NrLm5vZGUuc2V0UG9zaXRpb24obmV3IFZlYzMoXHJcbiAgICAgICAgICAgIC0odGhpcy5ub2RlLndpZHRoIC8gMiAtIGJsb2NrU2l6ZS54KSArIGJsb2NrU2l6ZS54ICogY29sLFxyXG4gICAgICAgICAgICAodGhpcy5ub2RlLmhlaWdodCAvIDIgLSBibG9ja1NpemUueSkgLSBibG9ja1NpemUueSAqIHJvdyxcclxuICAgICAgICAgICAgMCkpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBibG9ja3NGb3JEZXN0cm95LmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5nZXRSb3coKSA9PT0gcm93ICYmIGJsb2NrLmdldENvbCgpID09PSBjb2xcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSBibG9ja3NGb3JEZXN0cm95LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlbGV0ZUJsb2NrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XHJcbiAgICAgICAgYmxvY2suZGVzdHJveVlvdXJzZWxmKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRCbG9jayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrOiBCb2FyZFR5cGUpOiB2b2lkIHtcclxuICAgICAgICBibG9jay5zZXRSb3dDb2wocm93LCBjb2wpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gYmxvY2s7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5ib2FyZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZXIuc2V0QmxvY2tTaXplKHRoaXMuYmxvY2tTaXplci5jYWxjdWxhdGVCbG9ja1NpemUoKSk7XHJcbiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemVyLmdldEJsb2NrU2l6ZSgpXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYm9hcmRbeV1beF07XHJcbiAgICAgICAgICAgICAgICBibG9jaz8uc2V0U2l6ZShibG9ja1NpemUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gbmV3IFZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgLSh0aGlzLm5vZGUud2lkdGggLyAyIC0gYmxvY2tTaXplLngpICsgYmxvY2tTaXplLnggKiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIGJsb2NrU2l6ZS55KSAtIGJsb2NrU2l6ZS55ICogeSxcclxuICAgICAgICAgICAgICAgICAgICAwKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrPy5ub2RlLnNldFBvc2l0aW9uKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50QnVzLm9mZignYm9hcmQtY2hhbmdlLXNpemUnLCB0aGlzLm9uUmVzaXplLCB0aGlzKTtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2NrLWNsaWNrZWQnLCB0aGlzLm9uQmxvY2tDbGlja2VkLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GridConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd97d2H/RllICp0630l1lVM1', 'GridConfig');
// scripts/GridConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridConfig = void 0;
exports.GridConfig = {
    width: 100,
    height: 112,
    startXPosition: -410,
    startYPosition: 440,
    behindScreen: 600
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN0QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsY0FBYyxFQUFFLENBQUMsR0FBRztJQUNwQixjQUFjLEVBQUUsR0FBRztJQUNuQixZQUFZLEVBQUUsR0FBRztDQUNwQixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdyaWRDb25maWcgPSB7XHJcbiAgICB3aWR0aDogMTAwLFxyXG4gICAgaGVpZ2h0OiAxMTIsXHJcbiAgICBzdGFydFhQb3NpdGlvbjogLTQxMCxcclxuICAgIHN0YXJ0WVBvc2l0aW9uOiA0NDAsXHJcbiAgICBiZWhpbmRTY3JlZW46IDYwMFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MatchFinder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e055rJKNBLQ7EaexNOmJ4d', 'MatchFinder');
// scripts/MatchFinder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExrtaBlock_1 = require("./ExrtaBlock");
var MatchFinder = /** @class */ (function () {
    function MatchFinder(board) {
        this.board = board;
    }
    MatchFinder.prototype.find = function (row, col, blockType) {
        var _this = this;
        var visited = new Set();
        var result = [];
        var dfs = function (row, col) {
            if (row < 0 || col < 0 || row >= _this.board.length || col >= _this.board[0].length)
                return;
            var block = _this.board[row][col];
            if (!block)
                return;
            if (block instanceof ExrtaBlock_1.default)
                return;
            var key = row + '_' + col;
            if (visited.has(key))
                return;
            visited.add(key);
            if (block.getType() !== blockType)
                return;
            result.push(block);
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };
        dfs(row, col);
        return result;
    };
    return MatchFinder;
}());
exports.default = MatchFinder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWF0Y2hGaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFHdEM7SUFDSSxxQkFBb0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUN4QyxDQUFDO0lBQ0QsMEJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxHQUFXLEVBQUUsU0FBb0I7UUFBbkQsaUJBb0JDO1FBbkJHLElBQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDbEMsSUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixJQUFNLEdBQUcsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFXO1lBQ2pDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDMUYsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBQ25CLElBQUksS0FBSyxZQUFZLG9CQUFVO2dCQUFFLE9BQU87WUFDeEMsSUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssU0FBUztnQkFBRSxPQUFPO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxrQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFCbG9jayBmcm9tIFwiLi9FeHJ0YUJsb2NrXCI7XG5pbXBvcnQgeyBCbG9ja1R5cGUsIEJvYXJkVHlwZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoRmluZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvYXJkOiBCb2FyZFR5cGVbXVtdKSB7XG4gICAgfVxuICAgIGZpbmQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja1R5cGU6IEJsb2NrVHlwZSk6IEJvYXJkVHlwZVtdIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IEJvYXJkVHlwZVtdID0gW107XG4gICAgICAgIGNvbnN0IGRmcyA9IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IGNvbCA8IDAgfHwgcm93ID49IHRoaXMuYm9hcmQubGVuZ3RoIHx8IGNvbCA+PSB0aGlzLmJvYXJkWzBdLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICghYmxvY2spIHJldHVybjtcbiAgICAgICAgICAgIGlmIChibG9jayBpbnN0YW5jZW9mIEV4dHJhQmxvY2spIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvdyArICdfJyArIGNvbDtcbiAgICAgICAgICAgIGlmICh2aXNpdGVkLmhhcyhrZXkpKSByZXR1cm47XG4gICAgICAgICAgICB2aXNpdGVkLmFkZChrZXkpO1xuICAgICAgICAgICAgaWYgKGJsb2NrLmdldFR5cGUoKSAhPT0gYmxvY2tUeXBlKSByZXR1cm47XG4gICAgICAgICAgICByZXN1bHQucHVzaChibG9jayk7XG4gICAgICAgICAgICBkZnMocm93ICsgMSwgY29sKTtcbiAgICAgICAgICAgIGRmcyhyb3cgLSAxLCBjb2wpO1xuICAgICAgICAgICAgZGZzKHJvdywgY29sICsgMSk7XG4gICAgICAgICAgICBkZnMocm93LCBjb2wgLSAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgZGZzKHJvdywgY29sKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ResultScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '668bfixYq5P8ZAr4OaMux/o', 'ResultScreen');
// scripts/ResultScreen.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var ResultScreen = /** @class */ (function (_super) {
    __extends(ResultScreen, _super);
    function ResultScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultScreen.prototype.onRestart = function () {
        cc.director.resume();
        cc.director.loadScene("Game");
    };
    ResultScreen.prototype.onMainMenu = function () {
        cc.director.resume();
        cc.director.loadScene("Start");
    };
    ResultScreen = __decorate([
        ccclass
    ], ResultScreen);
    return ResultScreen;
}(cc.Component));
exports.default = ResultScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmVzdWx0U2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBRWxDO0lBQTBDLGdDQUFZO0lBQXREOztJQVNBLENBQUM7SUFSVSxnQ0FBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLGlDQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBUmdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FTaEM7SUFBRCxtQkFBQztDQVRELEFBU0MsQ0FUeUMsRUFBRSxDQUFDLFNBQVMsR0FTckQ7a0JBVG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0U2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgb25SZXN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uTWFpbk1lbnUoKTogdm9pZCB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTdGFydFwiKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StartGameScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78915q25xJAZpDEL/oqBYAE', 'StartGameScript');
// scripts/StartGameScript.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var StartGame = /** @class */ (function (_super) {
    __extends(StartGame, _super);
    function StartGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartGame.prototype.onStartGame = function () {
        cc.director.loadScene("Game");
    };
    StartGame = __decorate([
        ccclass
    ], StartGame);
    return StartGame;
}(cc.Component));
exports.default = StartGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3RhcnRHYW1lU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXVDLDZCQUFZO0lBQW5EOztJQUtBLENBQUM7SUFIRywrQkFBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUpnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBSzdCO0lBQUQsZ0JBQUM7Q0FMRCxBQUtDLENBTHNDLEVBQUUsQ0FBQyxTQUFTLEdBS2xEO2tCQUxvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uU3RhcnRHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82049Ow64tIAJ8v0rLhmptr', 'ScoreManager');
// scripts/ScoreManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreManager = /** @class */ (function (_super) {
    __extends(ScoreManager, _super);
    function ScoreManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.stepAmount = 0;
        _this.scoreAmount = 0;
        _this.currentScore = 0;
        _this.movesNode = null;
        _this.scoreNode = null;
        _this.minSteps = 10;
        _this.maxSteps = 40;
        _this.minTargetScore = 100;
        _this.maxTargetScore = 1000;
        return _this;
    }
    ScoreManager.prototype.onLoad = function () {
        EventBus_1.EventBus.on('blocks-destroy', this.onBlockDestroy, this);
        EventBus_1.EventBus.on('step', this.onStep, this);
    };
    ScoreManager.prototype.start = function () {
        this.stepAmount = this.randomNumber(this.minSteps, this.maxSteps);
        this.scoreAmount = this.randomNumber(this.minTargetScore, this.maxTargetScore);
        this.updateView();
    };
    ScoreManager.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ScoreManager.prototype.onBlockDestroy = function (destroyLength) {
        this.currentScore += destroyLength * 10;
        this.isWin();
        this.updateView();
    };
    ScoreManager.prototype.onStep = function () {
        this.stepAmount -= 1;
        this.isWin();
        this.updateView();
    };
    ScoreManager.prototype.isWin = function () {
        if (this.currentScore > this.scoreAmount) {
            EventBus_1.EventBus.emit('gameEnd', true);
        }
        else if (this.stepAmount === 0) {
            EventBus_1.EventBus.emit('gameEnd', false);
        }
    };
    ScoreManager.prototype.updateView = function () {
        this.movesNode.getComponent(cc.Label).string = String(this.stepAmount);
        this.scoreNode.getComponent(cc.Label).string = this.currentScore + "/" + this.scoreAmount;
    };
    ScoreManager.prototype.onDestroy = function () {
        EventBus_1.EventBus.off('blocks-destroy', this.onBlockDestroy, this);
        EventBus_1.EventBus.off('step', this.onStep, this);
    };
    __decorate([
        property(cc.Node)
    ], ScoreManager.prototype, "movesNode", void 0);
    __decorate([
        property(cc.Node)
    ], ScoreManager.prototype, "scoreNode", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "minSteps", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "maxSteps", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "minTargetScore", void 0);
    __decorate([
        property
    ], ScoreManager.prototype, "maxTargetScore", void 0);
    ScoreManager = __decorate([
        ccclass
    ], ScoreManager);
    return ScoreManager;
}(cc.Component));
exports.default = ScoreManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNEQztRQXJERyxlQUFlO1FBQ1AsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixvQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUU3QixvQkFBYyxHQUFXLElBQUksQ0FBQzs7SUFzQ2xDLENBQUM7SUFyQ2EsNkJBQU0sR0FBaEI7UUFDSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELG1CQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNPLG1DQUFZLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxHQUFXO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDTyxxQ0FBYyxHQUF0QixVQUF1QixhQUFxQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyw2QkFBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTyw0QkFBSyxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUM5QixtQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBQ08saUNBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsWUFBWSxTQUFJLElBQUksQ0FBQyxXQUFhLENBQUM7SUFDOUYsQ0FBQztJQUNTLGdDQUFTLEdBQW5CO1FBQ0ksbUJBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUUxQjtRQURDLFFBQVE7a0RBQ2E7SUFFdEI7UUFEQyxRQUFRO2tEQUNhO0lBRXRCO1FBREMsUUFBUTt3REFDb0I7SUFFN0I7UUFEQyxRQUFRO3dEQUNxQjtJQWhCYixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBc0RoQztJQUFELG1CQUFDO0NBdERELEFBc0RDLENBdER5QyxFQUFFLENBQUMsU0FBUyxHQXNEckQ7a0JBdERvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tIFwiLi9FdmVudEJ1c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgcHJpdmF0ZSBzdGVwQW1vdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZUFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjdXJyZW50U2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1vdmVzTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblN0ZXBzOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U3RlcHM6IG51bWJlciA9IDQwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5UYXJnZXRTY29yZTogbnVtYmVyID0gMTAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhUYXJnZXRTY29yZTogbnVtYmVyID0gMTAwMDtcclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub24oJ3N0ZXAnLCB0aGlzLm9uU3RlcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0ZXBBbW91bnQgPSB0aGlzLnJhbmRvbU51bWJlcih0aGlzLm1pblN0ZXBzLCB0aGlzLm1heFN0ZXBzKTtcclxuICAgICAgICB0aGlzLnNjb3JlQW1vdW50ID0gdGhpcy5yYW5kb21OdW1iZXIodGhpcy5taW5UYXJnZXRTY29yZSwgdGhpcy5tYXhUYXJnZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJsb2NrRGVzdHJveShkZXN0cm95TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSArPSBkZXN0cm95TGVuZ3RoICogMTA7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblN0ZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVwQW1vdW50IC09IDE7XHJcbiAgICAgICAgdGhpcy5pc1dpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1dpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NvcmUgPiB0aGlzLnNjb3JlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ2dhbWVFbmQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RlcEFtb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBFdmVudEJ1cy5lbWl0KCdnYW1lRW5kJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVzTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0aGlzLnN0ZXBBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7dGhpcy5jdXJyZW50U2NvcmV9LyR7dGhpcy5zY29yZUFtb3VudH1gO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEJ1cy5vZmYoJ2Jsb2Nrcy1kZXN0cm95JywgdGhpcy5vbkJsb2NrRGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnRCdXMub2ZmKCdzdGVwJywgdGhpcy5vblN0ZXAsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb489g224JCyIrtQfg7dIzl', 'Utils');
// scripts/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomExtraBlockKey = exports.getRandomBlockKey = void 0;
var Types_1 = require("./Types");
function getRandomBlockKey(exclude) {
    if (exclude === void 0) { exclude = []; }
    var keys = Object.keys(Types_1.blockColor);
    var filteredKeys = keys.filter(function (key) { return !exclude.includes(key); });
    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных BlockKey после исключений");
    }
    var randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
exports.getRandomBlockKey = getRandomBlockKey;
function getRandomExtraBlockKey(exclude) {
    if (exclude === void 0) { exclude = []; }
    var keys = Object.keys(Types_1.extraBlock);
    var filteredKeys = keys.filter(function (key) { return !exclude.includes(key); });
    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных ExtraBlockKey после исключений");
    }
    var randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
exports.getRandomExtraBlockKey = getRandomExtraBlockKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTBFO0FBRTFFLFNBQWdCLGlCQUFpQixDQUFDLE9BQXdCO0lBQXhCLHdCQUFBLEVBQUEsWUFBd0I7SUFDdEQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFlLENBQUM7SUFDbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBRWhFLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFWRCw4Q0FVQztBQUNELFNBQWdCLHNCQUFzQixDQUFDLE9BQTZCO0lBQTdCLHdCQUFBLEVBQUEsWUFBNkI7SUFDaEUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFvQixDQUFDO0lBQ3hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUVoRSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTtJQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBVkQsd0RBVUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja0tleSwgRXh0cmFCbG9ja0tleSwgZXh0cmFCbG9jaywgYmxvY2tDb2xvciB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21CbG9ja0tleShleGNsdWRlOiBCbG9ja0tleVtdID0gW10pOiBCbG9ja0tleSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGJsb2NrQ29sb3IpIGFzIEJsb2NrS2V5W107XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICFleGNsdWRlLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgaWYgKGZpbHRlcmVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSBCbG9ja0tleSDQv9C+0YHQu9C1INC40YHQutC70Y7Rh9C10L3QuNC5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsdGVyZWRLZXlzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkS2V5c1tyYW5kb21JbmRleF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShleGNsdWRlOiBFeHRyYUJsb2NrS2V5W10gPSBbXSk6IEV4dHJhQmxvY2tLZXkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHRyYUJsb2NrKSBhcyBFeHRyYUJsb2NrS2V5W107XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICFleGNsdWRlLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgaWYgKGZpbHRlcmVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSBFeHRyYUJsb2NrS2V5INC/0L7RgdC70LUg0LjRgdC60LvRjtGH0LXQvdC40LlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZEtleXMubGVuZ3RoKTtcbiAgICByZXR1cm4gZmlsdGVyZWRLZXlzW3JhbmRvbUluZGV4XTtcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Types.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '062b3hgWxhCUI4RelELqNcX', 'Types');
// scripts/Types.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExtraBlockKey = exports.isBlockKey = exports.extraBlock = exports.blockColor = void 0;
exports.blockColor = {
    blue: 'block_blue',
    green: 'block_green',
    purpure: 'block_purpure',
    red: 'block_red',
    yellow: 'block_yellow'
};
exports.extraBlock = {
    bomb: 'block_bomb',
    bomb_max: 'block_bomb_max',
    rockets_vertical: 'block_rakets',
    rockets_horizontal: 'block_rockets_horisontal'
};
function isBlockKey(type) {
    return type in exports.blockColor;
}
exports.isBlockKey = isBlockKey;
function isExtraBlockKey(type) {
    return type in exports.extraBlock;
}
exports.isExtraBlockKey = isExtraBlockKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWEsUUFBQSxVQUFVLEdBQUc7SUFDdEIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsT0FBTyxFQUFFLGVBQWU7SUFDeEIsR0FBRyxFQUFFLFdBQVc7SUFDaEIsTUFBTSxFQUFFLGNBQWM7Q0FDaEIsQ0FBQztBQUlFLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLElBQUksRUFBRSxZQUFZO0lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxrQkFBa0IsRUFBRSwwQkFBMEI7Q0FDeEMsQ0FBQztBQVlYLFNBQWdCLFVBQVUsQ0FBQyxJQUFlO0lBQ3RDLE9BQU8sSUFBSSxJQUFJLGtCQUFVLENBQUM7QUFDOUIsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLElBQWU7SUFDM0MsT0FBTyxJQUFJLElBQUksa0JBQVUsQ0FBQztBQUM5QixDQUFDO0FBRkQsMENBRUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGNvbnN0IGJsb2NrQ29sb3IgPSB7XG4gICAgYmx1ZTogJ2Jsb2NrX2JsdWUnLFxuICAgIGdyZWVuOiAnYmxvY2tfZ3JlZW4nLFxuICAgIHB1cnB1cmU6ICdibG9ja19wdXJwdXJlJyxcbiAgICByZWQ6ICdibG9ja19yZWQnLFxuICAgIHllbGxvdzogJ2Jsb2NrX3llbGxvdydcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBCbG9ja0tleSA9IGtleW9mIHR5cGVvZiBibG9ja0NvbG9yO1xuZXhwb3J0IHR5cGUgQmxvY2tWYWx1ZSA9IHR5cGVvZiBibG9ja0NvbG9yW0Jsb2NrS2V5XTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhQmxvY2sgPSB7XG4gICAgYm9tYjogJ2Jsb2NrX2JvbWInLFxuICAgIGJvbWJfbWF4OiAnYmxvY2tfYm9tYl9tYXgnLFxuICAgIHJvY2tldHNfdmVydGljYWw6ICdibG9ja19yYWtldHMnLFxuICAgIHJvY2tldHNfaG9yaXpvbnRhbDogJ2Jsb2NrX3JvY2tldHNfaG9yaXNvbnRhbCdcbn0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBFeHRyYUJsb2NrS2V5ID0ga2V5b2YgdHlwZW9mIGV4dHJhQmxvY2s7XG5leHBvcnQgdHlwZSBFeHRyYUJsb2NrVmFsdWUgPSB0eXBlb2YgZXh0cmFCbG9ja1tFeHRyYUJsb2NrS2V5XTtcblxuZXhwb3J0IHR5cGUgQmxvY2tDbGlja0V2ZW50ID0ge1xuICAgIHJvdzogbnVtYmVyO1xuICAgIGNvbDogbnVtYmVyO1xuICAgIGJsb2NrVHlwZTogQmxvY2tUeXBlO1xufVxuZXhwb3J0IHR5cGUgQmxvY2tUeXBlID0gQmxvY2tLZXkgfCBFeHRyYUJsb2NrS2V5O1xuZXhwb3J0IHR5cGUgQm9hcmRUeXBlID0gQmxvY2s8QmxvY2tLZXk+IHwgQmxvY2s8RXh0cmFCbG9ja0tleT47XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jsb2NrS2V5KHR5cGU6IEJsb2NrVHlwZSk6IHR5cGUgaXMgQmxvY2tLZXkge1xuICAgIHJldHVybiB0eXBlIGluIGJsb2NrQ29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4dHJhQmxvY2tLZXkodHlwZTogQmxvY2tUeXBlKTogdHlwZSBpcyBFeHRyYUJsb2NrS2V5IHtcbiAgICByZXR1cm4gdHlwZSBpbiBleHRyYUJsb2NrO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5759aozpf9DHrKg04Tf4B1h', 'Block');
// scripts/Block.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("./Types");
var EventBus_1 = require("./EventBus");
var GridConfig_1 = require("./GridConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.blockSpriteNode = null;
        _this.smokeNode = null;
        _this.row = 0;
        _this.col = 0;
        _this.blockType = 'blue';
        _this.width = GridConfig_1.GridConfig.width;
        _this.height = GridConfig_1.GridConfig.height;
        return _this;
    }
    Block.prototype.onLoad = function () {
        this.blockSpriteNode.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    };
    Block.prototype.start = function () { };
    Block.prototype.getRow = function () {
        return this.row;
    };
    Block.prototype.getCol = function () {
        return this.col;
    };
    Block.prototype.getType = function () {
        return this.blockType;
    };
    Block.prototype.setRowCol = function (row, col) {
        this.row = row;
        this.col = col;
    };
    Block.prototype.init = function (row, col, blockType, size) {
        this.row = row;
        this.col = col;
        this.blockType = blockType;
        this.setSize(size);
        this.updateVisual();
    };
    Block.prototype.setSize = function (size) {
        var scaleX = size.x / GridConfig_1.GridConfig.width;
        var scaleY = size.y / GridConfig_1.GridConfig.height;
        this.node.setScale(scaleX, scaleY);
    };
    Block.prototype.updateVisual = function () {
        var key = this.blockType;
        var spriteFrame = this.atlas.getSpriteFrame(Types_1.blockColor[key]);
        var sprite = this.blockSpriteNode.getComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
    };
    Block.prototype.updateScale = function () {
    };
    Block.prototype.destroyYourself = function () {
        var _this = this;
        var anim = this.blockSpriteNode.getComponent(cc.Animation);
        var particle = this.smokeNode.getComponent(cc.ParticleSystem);
        anim.once('finished', function () {
            _this.node.destroy();
        }, this);
        anim.play();
        particle.resetSystem();
    };
    Block.prototype.fallTo = function (targetPos, time) {
        cc.tween(this.node)
            .to(time, { position: targetPos }, { easing: "sineOut" })
            .start();
    };
    Block.prototype.fallAnimation = function (startPos, targetPos) {
        this.node.setPosition(startPos);
        this.fallTo(targetPos, 0.5);
    };
    Block.prototype.onTouch = function () {
        EventBus_1.EventBus.emit('block-clicked', { blockType: this.blockType, row: this.row, col: this.col });
    };
    Block.prototype.onDestroy = function () {
        this.blockSpriteNode.off(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], Block.prototype, "atlas", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "blockSpriteNode", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "smokeNode", void 0);
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQStDO0FBQy9DLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0UseUJBQVk7SUFBNUU7UUFBQSxxRUEyRUM7UUF6RUcsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUNoQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFNLE1BQVcsQ0FBQztRQUMzQixXQUFLLEdBQVcsdUJBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsWUFBTSxHQUFXLHVCQUFVLENBQUMsTUFBTSxDQUFDOztJQWdFakQsQ0FBQztJQS9EYSxzQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRS9FLENBQUM7SUFDRCxxQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUNKLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHNCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNNLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNNLHlCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcs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QUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUF4RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3Q0FDSTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1E7SUFOVCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMkV6QjtJQUFELFlBQUM7Q0EzRUQsQUEyRUMsQ0EzRStELEVBQUUsQ0FBQyxTQUFTLEdBMkUzRTtrQkEzRW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBibG9ja0NvbG9yLCBCbG9ja0tleSB9IGZyb20gXCIuL1R5cGVzXCI7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSBcIi4vRXZlbnRCdXNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrPFQgZXh0ZW5kcyBzdHJpbmcgPSBCbG9ja0tleT4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgYXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmxvY2tTcHJpdGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc21va2VOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCByb3c6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgY29sOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIGJsb2NrVHlwZTogVCA9ICdibHVlJyBhcyBUO1xyXG4gICAgcHJvdGVjdGVkIHdpZHRoOiBudW1iZXIgPSBHcmlkQ29uZmlnLndpZHRoO1xyXG4gICAgcHJvdGVjdGVkIGhlaWdodDogbnVtYmVyID0gR3JpZENvbmZpZy5oZWlnaHQ7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmxvY2tTcHJpdGVOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkgeyB9XHJcbiAgICBwdWJsaWMgZ2V0Um93KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENvbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrVHlwZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRSb3dDb2wocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XHJcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGJsb2NrVHlwZTogVCwgc2l6ZT86IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdyA9IHJvdztcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgICB0aGlzLnNldFNpemUoc2l6ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXN1YWwoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRTaXplKHNpemU6IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBzaXplLnggLyBHcmlkQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHNpemUueSAvIEdyaWRDb25maWcuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmlzdWFsKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuYmxvY2tUeXBlIGFzIEJsb2NrS2V5XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLmF0bGFzLmdldFNwcml0ZUZyYW1lKGJsb2NrQ29sb3Jba2V5XSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlU2NhbGUoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3Ryb3lZb3Vyc2VsZigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhbmltID0gdGhpcy5ibG9ja1Nwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFydGljbGUgPSB0aGlzLnNtb2tlTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGFuaW0ub25jZSgnZmluaXNoZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBhbmltLnBsYXkoKTtcclxuICAgICAgICBwYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZhbGxUbyh0YXJnZXRQb3M6IGNjLlZlYzMsIHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRpbWUsIHsgcG9zaXRpb246IHRhcmdldFBvcyB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZmFsbEFuaW1hdGlvbihzdGFydFBvczogY2MuVmVjMywgdGFyZ2V0UG9zOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLmZhbGxUbyh0YXJnZXRQb3MsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uVG91Y2goKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRCdXMuZW1pdCgnYmxvY2stY2xpY2tlZCcsIHsgYmxvY2tUeXBlOiB0aGlzLmJsb2NrVHlwZSwgcm93OiB0aGlzLnJvdywgY29sOiB0aGlzLmNvbCB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ibG9ja1Nwcml0ZU5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba6edbmLBRJW6xC4s4aq4Bn', 'AudioManager');
// scripts/AudioManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundMusicId = null;
        _this.backgroundMusicClip = null;
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.prototype.onLoad = function () {
        if (AudioManager_1.instance) {
            this.node.destroy();
            return;
        }
        AudioManager_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    AudioManager.prototype.start = function () {
        this.playBGM(true);
    };
    AudioManager.prototype.playBGM = function (loop) {
        if (loop === void 0) { loop = true; }
        if (this.backgroundMusicClip && !this.backgroundMusicId) {
            this.backgroundMusicId = cc.audioEngine.play(this.backgroundMusicClip, loop, 0.06);
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (this.backgroundMusicId) {
            cc.audioEngine.stop(this.backgroundMusicId);
            this.backgroundMusicId = null;
        }
    };
    var AudioManager_1;
    AudioManager.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "backgroundMusicClip", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUNDO1FBL0JXLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUd6Qyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDOztJQTRCN0MsQ0FBQztxQkFqQ29CLFlBQVk7SUFPbkIsNkJBQU0sR0FBaEI7UUFDSSxJQUFJLGNBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVPLDhCQUFPLEdBQWYsVUFBZ0IsSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxXQUFvQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUM7SUFFTSw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUNqQztJQUNMLENBQUM7O0lBL0JjLHFCQUFRLEdBQWlCLElBQUksQ0FBQztJQUk3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZEQUNrQjtJQUx4QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBaUNoQztJQUFELG1CQUFDO0NBakNELEFBaUNDLENBakN5QyxFQUFFLENBQUMsU0FBUyxHQWlDckQ7a0JBakNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kTXVzaWNJZDogbnVtYmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYmFja2dyb3VuZE11c2ljQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmIChBdWRpb01hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBsYXlCR00odHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5QkdNKGxvb3A6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRNdXNpY0NsaXAgJiYgIXRoaXMuYmFja2dyb3VuZE11c2ljSWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmFja2dyb3VuZE11c2ljQ2xpcCwgbG9vcCwgMC4wNik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZE11c2ljSWQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iYWNrZ3JvdW5kTXVzaWNJZCk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0lkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LimitNodeSize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '421e9W0DTpFYI/QjB8ikRPz', 'LimitNodeSize');
// scripts/LimitNodeSize.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus_1 = require("./EventBus");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LimitNodeSize = /** @class */ (function (_super) {
    __extends(LimitNodeSize, _super);
    function LimitNodeSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        _this.maxWidth = 300;
        _this.maxHeight = 300;
        _this.marginX = 50;
        return _this;
    }
    LimitNodeSize.prototype.onLoad = function () {
        cc.view.on('canvas-resize', this.onResize, this);
    };
    LimitNodeSize.prototype.start = function () {
        this.adjustSize();
    };
    LimitNodeSize.prototype.adjustSize = function () {
        if (!this.targetNode)
            return;
        var node = this.targetNode;
        var aspectRatio = node.height / node.width;
        if (cc.winSize.width < node.width) {
            node.width = cc.winSize.width - this.marginX * 2;
            node.height = node.width * aspectRatio;
        }
        else {
            node.width = this.maxWidth;
            node.height = this.maxWidth * aspectRatio;
        }
        EventBus_1.EventBus.emit('board-change-size');
        console.log(node.width);
    };
    LimitNodeSize.prototype.onResize = function () {
        this.adjustSize();
    };
    LimitNodeSize.prototype.onDestroy = function () {
        cc.view.off('canvas-resize', this.onResize, this);
    };
    __decorate([
        property(cc.Node)
    ], LimitNodeSize.prototype, "targetNode", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "maxWidth", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "maxHeight", void 0);
    __decorate([
        property
    ], LimitNodeSize.prototype, "marginX", void 0);
    LimitNodeSize = __decorate([
        ccclass
    ], LimitNodeSize);
    return LimitNodeSize;
}(cc.Component));
exports.default = LimitNodeSize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGltaXROb2RlU2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFvQ0M7UUFqQ0csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUV2QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGFBQU8sR0FBVyxFQUFFLENBQUM7O0lBMkJ6QixDQUFDO0lBMUJhLDhCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNTLDZCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNTLGtDQUFVLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzFDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztTQUM3QztRQUNELG1CQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNTLGdDQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyxpQ0FBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUUzQjtRQURDLFFBQVE7bURBQ2M7SUFFdkI7UUFEQyxRQUFRO29EQUNlO0lBRXhCO1FBREMsUUFBUTtrREFDWTtJQVRKLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FvQ2pDO0lBQUQsb0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzBDLEVBQUUsQ0FBQyxTQUFTLEdBb0N0RDtrQkFwQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuL0V2ZW50QnVzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pdE5vZGVTaXplIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAzMDA7XG4gICAgQHByb3BlcnR5XG4gICAgbWF4SGVpZ2h0OiBudW1iZXIgPSAzMDA7XG4gICAgQHByb3BlcnR5XG4gICAgbWFyZ2luWDogbnVtYmVyID0gNTA7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY2Mudmlldy5vbignY2FudmFzLXJlc2l6ZScsIHRoaXMub25SZXNpemUsIHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRqdXN0U2l6ZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWRqdXN0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldE5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudGFyZ2V0Tm9kZTtcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBub2RlLmhlaWdodCAvIG5vZGUud2lkdGg7XG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIDwgbm9kZS53aWR0aCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGggLSB0aGlzLm1hcmdpblggKiAyO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBub2RlLndpZHRoICogYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy5tYXhXaWR0aDtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gdGhpcy5tYXhXaWR0aCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2JvYXJkLWNoYW5nZS1zaXplJylcbiAgICAgICAgY29uc29sZS5sb2cobm9kZS53aWR0aClcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkanVzdFNpemUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY2Mudmlldy5vZmYoJ2NhbnZhcy1yZXNpemUnLCB0aGlzLm9uUmVzaXplLCB0aGlzKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BoardSizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77005lE8T5JDpHIBsEMlK6+', 'BoardSizer');
// scripts/BoardSizer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardSizer = /** @class */ (function () {
    function BoardSizer(container, columns, originalBlockSize) {
        this.container = container;
        this.columns = columns;
        this.originalBlockSize = originalBlockSize;
    }
    BoardSizer.prototype.calculateBlockSize = function () {
        var blockWidth = (this.container.width - 80) / this.columns;
        var blockHeight = blockWidth * (this.originalBlockSize.y / this.originalBlockSize.x);
        return new cc.Vec2(blockWidth, blockHeight);
    };
    BoardSizer.prototype.setBlockSize = function (blockSize) {
        this.blockSize = blockSize;
    };
    BoardSizer.prototype.getBlockSize = function () {
        return this.blockSize;
    };
    return BoardSizer;
}());
exports.default = BoardSizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmRTaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRUksb0JBQ1ksU0FBa0IsRUFDbEIsT0FBZSxFQUNmLGlCQUEwQjtRQUYxQixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVM7SUFDbEMsQ0FBQztJQUNFLHVDQUFrQixHQUF6QjtRQUNJLElBQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5RCxJQUFNLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RixPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUNNLGlDQUFZLEdBQW5CLFVBQW9CLFNBQWtCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDTSxpQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRTaXplciB7XG4gICAgcHJpdmF0ZSBibG9ja1NpemU6IGNjLlZlYzJcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb250YWluZXI6IGNjLk5vZGUsXG4gICAgICAgIHByaXZhdGUgY29sdW1uczogbnVtYmVyLFxuICAgICAgICBwcml2YXRlIG9yaWdpbmFsQmxvY2tTaXplOiBjYy5WZWMyLFxuICAgICkgeyB9XG4gICAgcHVibGljIGNhbGN1bGF0ZUJsb2NrU2l6ZSgpOiBjYy5WZWMyIHtcbiAgICAgICAgY29uc3QgYmxvY2tXaWR0aCA9ICh0aGlzLmNvbnRhaW5lci53aWR0aCAtIDgwKSAvIHRoaXMuY29sdW1ucztcbiAgICAgICAgY29uc3QgYmxvY2tIZWlnaHQgPSBibG9ja1dpZHRoICogKHRoaXMub3JpZ2luYWxCbG9ja1NpemUueSAvIHRoaXMub3JpZ2luYWxCbG9ja1NpemUueClcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KVxuICAgIH1cbiAgICBwdWJsaWMgc2V0QmxvY2tTaXplKGJsb2NrU2l6ZTogY2MuVmVjMik6IHZvaWQge1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICB9XG4gICAgcHVibGljIGdldEJsb2NrU2l6ZSgpOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tTaXplO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
