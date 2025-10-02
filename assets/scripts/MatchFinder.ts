import ExtraBlock from "./ExrtaBlock";
import { BlockType, BoardType } from "./Types";

export default class MatchFinder {
    constructor(private board: BoardType[][]) {
    }
    find(row: number, col: number, blockType: BlockType): BoardType[] {
        const visited = new Set<string>();
        const result: BoardType[] = [];
        const dfs = (row: number, col: number) => {
            if (row < 0 || col < 0 || row >= this.board.length || col >= this.board[0].length) return;
            const block = this.board[row][col];
            if (!block) return;
            if (block instanceof ExtraBlock) return;
            const key = row + '_' + col;
            if (visited.has(key)) return;
            visited.add(key);
            if (block.getType() !== blockType) return;
            result.push(block);
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };
        dfs(row, col);
        return result;
    }
}
