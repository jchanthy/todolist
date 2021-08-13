"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//wrote by jchanthy from ebook essential typescript
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        //no statement required
        //     this.id = id;
        //     this.task = task;
        //     this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id} ${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
