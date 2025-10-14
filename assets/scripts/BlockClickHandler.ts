import { BoardCommand, DestroyGroup, UpgradeToExtraBlock } from "./Commands";
import { ClickHandler } from "./HandlerInterface";
import MatchFinder from "./MatchFinder";
import { BlockClickEvent, BoardType, isBlockKey } from "./Types";

export class BlockClickHandler extends ClickHandler {
    private matchFinder: MatchFinder;
    constructor(board: BoardType[][]) {
        super(board);
        this.matchFinder = new MatchFinder(board);
    }
    handle(data: BlockClickEvent, commands: BoardCommand[]): BoardCommand[] {
        if (isBlockKey(data.blockType)) {
            let sameBlocks: BoardType[] = [];
            sameBlocks = this.matchFinder.find(data.row, data.col, data.blockType);
            if (sameBlocks.length >= 2) {
                this.emitStep();
                if (sameBlocks.length >= 5) {
                    commands.push(new UpgradeToExtraBlock(data.row, data.col, sameBlocks));
                }
                commands.push(new DestroyGroup(sameBlocks));
                return commands;
            }
        }
        return super.handle(data, commands);
    }
}