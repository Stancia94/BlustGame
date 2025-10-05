"use strict";
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