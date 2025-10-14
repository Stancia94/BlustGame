import { ClickHandler } from "./HandlerInterface";
import { BlockClickEvent, BoardType, isExtraBlockKey } from "./Types";
import { BoardCommand, DestroyGroup } from "./Commands";

export default class ExtraBlockClickHandler extends ClickHandler {
    constructor(board: BoardType[][]) {
        super(board);
    }
    public handle(data: BlockClickEvent, commands: BoardCommand[]): BoardCommand[] {
        if (isExtraBlockKey(data.blockType)) {
            let groupForDestroy: BoardType[] = [];
            switch (data.blockType) {
                case 'rockets_horizontal':
                    groupForDestroy = this.getHorizontalLine(data.row);
                    break;
                case 'bomb':
                    groupForDestroy = this.getBombArea(data.row, data.col);
                    break;
                case 'rockets_vertical':
                    groupForDestroy = this.getVerticalLine(data.col);
                    break;
                case 'bomb_max':
                    groupForDestroy = this.getAllBlocks();
                    break;
                default:
                    return [];
            }
            if (groupForDestroy.length > 0) {
                commands.push(new DestroyGroup(groupForDestroy));
            }
        }
        return super.handle(data, commands);
    }
    private getHorizontalLine(row: number): BoardType[] {
        return (this.board[row]);
    }
    private getVerticalLine(col: number): BoardType[] {
        const blockForDestroy: BoardType[] = [];
        for (let y = 0; y < this.board[0].length; y++) {
            blockForDestroy.push(this.board[y][col]);
        }
        return blockForDestroy;
    }
    private getBombArea(clickedRow: number, clickedCol: number): BoardType[] {
        const blockForDestroy: BoardType[] = [];
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
