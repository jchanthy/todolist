// wroted by jchanthy from ebook essential typescript

import {TodoItem} from './todoItem';

export class TodoCollection {
    private nextId = 1;
    private itemMap = new Map<number, TodoItem>();

    constructor(public userName: string,
                todoItems: TodoItem[] = []) {
                todoItems.forEach(item => this.itemMap.set(item.id, item));
}

  addTodo(task: string): number{
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.Id, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id);

    }

    markComplete(id: number, complete: boolean){
        const todoItem = this.getTodoById(id);
        if (todoItem){
            todoItem.complete = complete;
        }
    }
}
