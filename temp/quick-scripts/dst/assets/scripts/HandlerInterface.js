
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HandlerInterface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSGFuZGxlckludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFTdEM7SUFHSSxzQkFBWSxLQUFvQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sOEJBQU8sR0FBZCxVQUFlLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBQ00sNkJBQU0sR0FBYixVQUFjLElBQXFCLEVBQUUsUUFBd0I7UUFDekQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1NBQ2pEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNTLCtCQUFRLEdBQWxCO1FBQ0ksbUJBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CcUIsb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gXCIuL0V2ZW50QnVzXCI7XG5pbXBvcnQgeyBCbG9ja0NsaWNrRXZlbnQsIEJvYXJkVHlwZSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBCb2FyZENvbW1hbmQgfSBmcm9tIFwiLi9Db21tYW5kc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRsZXIge1xuICAgIHNldE5leHQoaGFuZGxlcjogSGFuZGxlcik6IEhhbmRsZXI7XG4gICAgaGFuZGxlKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCwgY29tbWFuZHM6IEJvYXJkQ29tbWFuZFtdKTogQm9hcmRDb21tYW5kW107XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGlja0hhbmRsZXIgaW1wbGVtZW50cyBIYW5kbGVyIHtcbiAgICBwcml2YXRlIG5leHRIYW5kbGVyOiBIYW5kbGVyO1xuICAgIHByb3RlY3RlZCBib2FyZDogQm9hcmRUeXBlW11bXTtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZDogQm9hcmRUeXBlW11bXSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXROZXh0KGhhbmRsZXI6IEhhbmRsZXIpOiBIYW5kbGVyIHtcbiAgICAgICAgdGhpcy5uZXh0SGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm5leHRIYW5kbGVyO1xuICAgIH1cbiAgICBwdWJsaWMgaGFuZGxlKGRhdGE6IEJsb2NrQ2xpY2tFdmVudCwgY29tbWFuZHM6IEJvYXJkQ29tbWFuZFtdKTogQm9hcmRDb21tYW5kW10ge1xuICAgICAgICBpZiAodGhpcy5uZXh0SGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dEhhbmRsZXIuaGFuZGxlKGRhdGEsIGNvbW1hbmRzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZW1pdFN0ZXAoKSB7XG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ3N0ZXAnKTtcbiAgICB9XG59XG4iXX0=