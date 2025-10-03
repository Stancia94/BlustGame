
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
function getRandomBlockKey() {
    var keys = Object.keys(Types_1.blockColor);
    var randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
exports.getRandomBlockKey = getRandomBlockKey;
function getRandomExtraBlockKey() {
    var keys = Object.keys(Types_1.extraBlock);
    var randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTBFO0FBRTFFLFNBQWdCLGlCQUFpQjtJQUM3QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFVLENBQWUsQ0FBQztJQUNuRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUpELDhDQUlDO0FBQ0QsU0FBZ0Isc0JBQXNCO0lBQ2xDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQVUsQ0FBb0IsQ0FBQztJQUN4RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUpELHdEQUlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2tLZXksIEV4dHJhQmxvY2tLZXksIGV4dHJhQmxvY2ssIGJsb2NrQ29sb3IgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQmxvY2tLZXkoKTogQmxvY2tLZXkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhibG9ja0NvbG9yKSBhcyBCbG9ja0tleVtdO1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpO1xuICAgIHJldHVybiBrZXlzW3JhbmRvbUluZGV4XTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21FeHRyYUJsb2NrS2V5KCk6IEV4dHJhQmxvY2tLZXkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHRyYUJsb2NrKSBhcyBFeHRyYUJsb2NrS2V5W107XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBrZXlzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGtleXNbcmFuZG9tSW5kZXhdO1xufSJdfQ==