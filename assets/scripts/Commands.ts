import Board from "./Board";
import { EventBus } from "./EventBus";
import ExtraBlock from "./ExrtaBlock";
import { BoardType } from "./Types";
import { getRandomExtraBlockKey } from "./Utils";

export interface BoardCommand {
    execute(board: Board): void;
}
export abstract class BaseCommand implements BoardCommand {
    abstract execute(board: Board): void;
}
export class DestroyGroup extends BaseCommand {
    constructor(
        private blocks: BoardType[]
    ) {
        super();
    }
    execute(board: Board): void {
        EventBus.emit('blocks-destroy', this.blocks.length);
        this.blocks.forEach((block) => {
            board.board[block.getRow()][block.getCol()] = null;
            block.destroyYourself();
        });
    }
}
export class UpgradeToExtraBlock extends BaseCommand {
    constructor(
        private row: number,
        private col: number,
        private blocksForDestroy: BoardType[]
    ) {
        super();
    }
    execute(board: Board): void {
        board.deleteBlock(this.row, this.col);
        const blockSize = board.blockSizer.getBlockSize()
        let extraBlock: ExtraBlock = null;
        if (this.blocksForDestroy.length >= 8) {
            extraBlock = board.blockFactory.createExtraBlock(this.row, this.col, 'bomb_max', blockSize);
        } else {
            extraBlock = board.blockFactory.createExtraBlock(this.row, this.col, getRandomExtraBlockKey(['bomb_max']), blockSize);
        }
        board.setBlock(this.row, this.col, extraBlock);
        extraBlock.node.setPosition(board.blockSizer.getBlockPosition(this.row, this.col, blockSize))
        const index = this.blocksForDestroy.findIndex(
            (block) => block.getRow() === this.row && block.getCol() === this.col
        );
        if (index >= 0) this.blocksForDestroy.splice(index, 1);
    }
}