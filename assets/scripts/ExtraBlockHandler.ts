import { BlockClickEvent, BoardType } from "./Types";

export default class ExtraBlockHandler {
    constructor(private board: BoardType[][]) { }
    public handle(data: BlockClickEvent): BoardType[] {
        switch (data.blockType) {
            case 'rockets_horizontal':
                return this.getHorizontalLine(data.row);
                break;
            case 'bomb':
                return this.getBombArea(data.row, data.col);
                break;
            case 'rockets_vertical':
                return this.getVerticalLine(data.col);
                break;
            case 'bomb_max':
                return this.getAllBlocks();
                break;
            default:
                return [];
        }
        return;
    }
    private getHorizontalLine(row: number): BoardType[] {
        return this.board[row]
    }
    private getVerticalLine(col: number): BoardType[] {
        const blockForDestroy = [];
        for (let y = 0; y < this.board[0].length; y++) {
            blockForDestroy.push(this.board[y][col]);
        }
        return blockForDestroy;
    }
    private getBombArea(clickedRow: number, clickedCol: number): BoardType[] {
        const blockForDestroy = [];
        for (let row = clickedRow - 1; row <= clickedRow + 1; row++) {
            for (let col = clickedCol - 1; col <= clickedCol + 1; col++) {
                if (row >= 0 && row < this.board.length &&
                    col >= 0 && col < this.board[row].length) {
                    blockForDestroy.push(this.board[row][col]);
                }
            }
        }
        return blockForDestroy;
    }
    private getAllBlocks(): BoardType[] {
        return [].concat(...this.board)
    }
}
