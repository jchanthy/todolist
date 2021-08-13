//wrote by jchanthy from ebook essential typescript
export class TodoItem {
    constructor(public id: number,
            public task: string,
            public complete: boolean = false) {
    //no statement required
        //     this.id = id;
        //     this.task = task;
        //     this.complete = complete;
    }

    public printDetails() : void {
        console.log(`${this.id} ${this.task} ${this.complete ? "\t(complete)": ""}`);
    }
}
