
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
var GridConfig_1 = require("./GridConfig");
var BoardSizer = /** @class */ (function () {
    function BoardSizer(container, columns, originalBlockSize) {
        this.container = container;
        this.columns = columns;
        this.originalBlockSize = originalBlockSize;
    }
    BoardSizer.prototype.calculateBlockSize = function () {
        var blockWidth = (this.container.width - GridConfig_1.GridConfig.marginX * 2) / this.columns;
        var blockHeight = blockWidth * (this.originalBlockSize.y / this.originalBlockSize.x);
        return new cc.Vec2(blockWidth, blockHeight);
    };
    BoardSizer.prototype.getBlockPosition = function (row, col, blockSize) {
        return new cc.Vec3(-(this.container.width / 2 - GridConfig_1.GridConfig.marginX - blockSize.x / 2) + blockSize.x * col, (this.container.height / 2 - GridConfig_1.GridConfig.marginX - blockSize.y / 2) - blockSize.y * row, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmRTaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUUxQztJQUdJLG9CQUNZLFNBQWtCLEVBQ2xCLE9BQWUsRUFDZixpQkFBMEI7UUFGMUIsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO0lBQ2xDLENBQUM7SUFDRSx1Q0FBa0IsR0FBekI7UUFDSSxJQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEYsSUFBTSxXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEYsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDTSxxQ0FBZ0IsR0FBdkIsVUFBd0IsR0FBVyxFQUFFLEdBQVcsRUFBRSxTQUFrQjtRQUNoRSxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3RGLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHVCQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3RGLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNNLGlDQUFZLEdBQW5CLFVBQW9CLFNBQWtCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDTSxpQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZENvbmZpZyB9IGZyb20gXCIuL0dyaWRDb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRTaXplciB7XG4gICAgcHJpdmF0ZSBibG9ja1NpemU6IGNjLlZlYzJcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvbnRhaW5lcjogY2MuTm9kZSxcbiAgICAgICAgcHJpdmF0ZSBjb2x1bW5zOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgb3JpZ2luYWxCbG9ja1NpemU6IGNjLlZlYzIsXG4gICAgKSB7IH1cbiAgICBwdWJsaWMgY2FsY3VsYXRlQmxvY2tTaXplKCk6IGNjLlZlYzIge1xuICAgICAgICBjb25zdCBibG9ja1dpZHRoID0gKHRoaXMuY29udGFpbmVyLndpZHRoIC0gR3JpZENvbmZpZy5tYXJnaW5YICogMikgLyB0aGlzLmNvbHVtbnM7XG4gICAgICAgIGNvbnN0IGJsb2NrSGVpZ2h0ID0gYmxvY2tXaWR0aCAqICh0aGlzLm9yaWdpbmFsQmxvY2tTaXplLnkgLyB0aGlzLm9yaWdpbmFsQmxvY2tTaXplLngpXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMihibG9ja1dpZHRoLCBibG9ja0hlaWdodClcbiAgICB9XG4gICAgcHVibGljIGdldEJsb2NrUG9zaXRpb24ocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBibG9ja1NpemU6IGNjLlZlYzIpOiBjYy5WZWMzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKFxuICAgICAgICAgICAgLSh0aGlzLmNvbnRhaW5lci53aWR0aCAvIDIgLSBHcmlkQ29uZmlnLm1hcmdpblggLSBibG9ja1NpemUueCAvIDIpICsgYmxvY2tTaXplLnggKiBjb2wsXG4gICAgICAgICAgICAodGhpcy5jb250YWluZXIuaGVpZ2h0IC8gMiAtIEdyaWRDb25maWcubWFyZ2luWCAtIGJsb2NrU2l6ZS55IC8gMikgLSBibG9ja1NpemUueSAqIHJvdyxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHNldEJsb2NrU2l6ZShibG9ja1NpemU6IGNjLlZlYzIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRCbG9ja1NpemUoKTogY2MuVmVjMiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrU2l6ZTtcbiAgICB9XG59XG4iXX0=