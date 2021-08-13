"use strict";
//wroted by jchanthy from ebook essential typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextID = 1;
        // no statement required
    }
    addTodo(task) {
        while (this.getTodoById(this.nextID)) {
            this.nextID++;
        }
        this.todoItems.push(new todoItem_1.TodoItem(this.nextID, task));
        return this.nextID;
    }
    getTodoByID(id) {
        return this.todoItems.find(item => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoByID(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
