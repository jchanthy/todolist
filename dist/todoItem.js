"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// wrote by jchanthy from ebook essential typescript
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statement required
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`);
    }
}
exports.TodoItem = TodoItem;
