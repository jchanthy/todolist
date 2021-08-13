//wroted by jchanthy from ebook essential typescript


import {TodoItem} from "./todoItem";

export class TodoCollection {
    private nextID: number = 1;

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

    getTodoByID(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id);

    }

    markComplete(id: number, complete: boolean){
        const todoItem = this.getTodoByID(id);
        if (todoItem){
            todoItem.complete = complete;
        }
    }
}
