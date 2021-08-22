
// added by jchanthy and followed by ebook essential typescript

import {TodoItem} from './todoItem';
import {TodoCollection} from './todoCollection';

const todos: TodoItem = [
    new TodoItem(1, 'Buy Flower'), new TodoItem(2, 'Get Shoes'),
    new TodoItem(3, 'Collect Tickets'), new TodoItem(4, 'Call Joe', true)
];

const collection: TodoCollection = new TodoCollection('Adam', todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

const newId: number = collection.addTodo('Go for run');
const todoItem: TodoItem = collection.getTodoById(newId);
todoItem.printDetails();

// collection.addTodo(todoItem);

// tslint:disable-next-line:no-unused-expression
addTodo(task: string): numer {
  while (this.getTodoById(this.nextId)) {
    this.nextId++;
  }
  this.todoItems.push(new TodoItem(this.nextId, task));

}
console.log(JSON.stringify(todoItem));
