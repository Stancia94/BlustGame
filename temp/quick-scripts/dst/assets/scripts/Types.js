
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