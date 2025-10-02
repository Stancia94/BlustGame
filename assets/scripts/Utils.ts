import { BlockKey, ExtraBlockKey, extraBlock, blockColor } from "./Types";

export function getRandomBlockKey(): BlockKey {
    const keys = Object.keys(blockColor) as BlockKey[];
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
export function getRandomExtraBlockKey(): ExtraBlockKey {
    const keys = Object.keys(extraBlock) as ExtraBlockKey[];
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}