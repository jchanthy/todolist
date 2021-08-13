"use strict";
// added by jchanthy and followed by ebook essential typescript
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const todos = [
    new todoItem_1.TodoItem(1, 'Buy Flower'), new todoItem_1.TodoItem(2, 'Get Shoes'),
    new todoItem_1.TodoItem(3, 'Collect Tickets'), new todoItem_1.TodoItem(4, 'Call Joe', true)
];
const collection = new todoCollection_1.TodoCollection('Adam', todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
const newId = collection.addTodo('Go for run');
const todoItem = collection.getTodoById(newId);
todoItem.printDetails();
// collection.addTodo(todoItem);
// tslint:disable-next-line:no-unused-expression
addTodo(task, string);
number;
{
    while (this.getTodoById(this.nextId)) {
        this.nextId++;
    }
    this.todoItems.push(new todoItem_1.TodoItem(this.nextId, task));
}
console.log(JSON.stringify(todoItem));
