import Block from "./Block";

export const blockColor = {
    blue: 'block_blue',
    green: 'block_green',
    purpure: 'block_purpure',
    red: 'block_red',
    yellow: 'block_yellow'
} as const;
export type BlockKey = keyof typeof blockColor;
export type BlockValue = typeof blockColor[BlockKey];

export const extraBlock = {
    bomb: 'block_bomb',
    bomb_max: 'block_bomb_max',
    rockets_vertical: 'block_rakets',
    rockets_horizontal: 'block_rockets_horisontal'
} as const;
export type ExtraBlockKey = keyof typeof extraBlock;
export type ExtraBlockValue = typeof extraBlock[ExtraBlockKey];

export type BlockClickEvent = {
    row: number;
    col: number;
    blockType: BlockType;
}
export type BlockType = BlockKey | ExtraBlockKey;
export type BoardType = Block<BlockKey> | Block<ExtraBlockKey>;

export function isBlockKey(type: BlockType): type is BlockKey {
    return type in blockColor;
}

export function isExtraBlockKey(type: BlockType): type is ExtraBlockKey {
    return type in extraBlock;
}