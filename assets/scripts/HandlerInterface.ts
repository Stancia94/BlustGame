import { EventBus } from "./EventBus";
import { BlockClickEvent, BoardType } from "./Types";
import { BoardCommand } from "./Commands";

export interface Handler {
    setNext(handler: Handler): Handler;
    handle(data: BlockClickEvent, commands: BoardCommand[]): BoardCommand[];
}

export abstract class ClickHandler implements Handler {
    private nextHandler: Handler;
    protected board: BoardType[][];
    constructor(board: BoardType[][]) {
        this.board = board;
    }
    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return this.nextHandler;
    }
    public handle(data: BlockClickEvent, commands: BoardCommand[]): BoardCommand[] {
        if (this.nextHandler) {
            return this.nextHandler.handle(data, commands)
        }
        return null;
    }
    protected emitStep() {
        EventBus.emit('step');
    }
}
