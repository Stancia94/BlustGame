"use strict";
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