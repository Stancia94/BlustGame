"use strict";
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