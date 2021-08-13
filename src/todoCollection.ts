// wroted by jchanthy from ebook essential typescript

import {TodoItem} from './todoItem';

export class TodoCollection {
    private nextID = 1;

    constructor(public userName: string,
                public todoItems: TodoItem[] = []) {
            // no statement required
}

  addTodo(task: string): number{
        while (this.getTodoById(this.nextID)) {
            this.nextID++;
        }
        this.todoItems.push(new TodoItem(this.nextID, task));
        return this.nextID;
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
