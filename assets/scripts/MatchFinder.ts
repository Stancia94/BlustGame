import Block from "./Block";

export default class MatchFinder {
    constructor(private board: (Block<string> | null)[][]) { }

    find(row: number, col: number, blockType: string): Block<string>[] {
        const visited = new Set<string>();
        const result: Block<string>[] = [];

        const dfs = (row: number, col: number) => {
            if (row < 0 || col < 0 || row >= this.board.length || col >= this.board[0].length) return;
            const block = this.board[row][col];
            if (!block) return;
            if (block instanceof ExtraBlock) return;
            const key = row + '_' + col;
            if (visited.has(key)) return;
            visited.add(key);
            if (block.getType() !== blockType) return;
            sameBlocks.push(block);
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };
        dfs(row, col);

        return result;
    }
}
