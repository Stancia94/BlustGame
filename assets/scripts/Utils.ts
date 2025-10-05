import { BlockKey, ExtraBlockKey, extraBlock, blockColor } from "./Types";

export function getRandomBlockKey(exclude: BlockKey[] = []): BlockKey {
    const keys = Object.keys(blockColor) as BlockKey[];
    const filteredKeys = keys.filter(key => !exclude.includes(key));

    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных BlockKey после исключений");
    }

    const randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
export function getRandomExtraBlockKey(exclude: ExtraBlockKey[] = []): ExtraBlockKey {
    const keys = Object.keys(extraBlock) as ExtraBlockKey[];
    const filteredKeys = keys.filter(key => !exclude.includes(key));

    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных ExtraBlockKey после исключений");
    }

    const randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}