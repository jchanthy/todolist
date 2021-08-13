"use strict";
// added by jchanthy and followed by ebook essential typescript
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flower"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoByID(newId);
todoItem.printDetails();
// collection.addTodo(todoItem);
console.log(JSON.stringify(todoItem));
