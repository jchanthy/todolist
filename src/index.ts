
// added by jchanthy and followed by ebook essential typescript

import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";

let todos = [
    new TodoItem(1, "Buy Flower"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoByID(newId);
todoItem.printDetails();

// collection.addTodo(todoItem);


console.log(JSON.stringify(todoItem));
