"use strict";
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