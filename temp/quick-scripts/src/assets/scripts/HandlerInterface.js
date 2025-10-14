"use strict";
cc._RF.push(module, '6bb389aCzxMS5Zz/3hWYMPp', 'HandlerInterface');
// scripts/HandlerInterface.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHandler = void 0;
var EventBus_1 = require("./EventBus");
var ClickHandler = /** @class */ (function () {
    function ClickHandler(board) {
        this.board = board;
    }
    ClickHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    };
    ClickHandler.prototype.handle = function (data, commands) {
        if (this.nextHandler) {
            return this.nextHandler.handle(data, commands);
        }
        return null;
    };
    ClickHandler.prototype.emitStep = function () {
        EventBus_1.EventBus.emit('step');
    };
    return ClickHandler;
}());
exports.ClickHandler = ClickHandler;

cc._RF.pop();