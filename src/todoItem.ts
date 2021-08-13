// wrote by jchanthy from ebook essential typescript
export class TodoItem {

    constructor(public id: number,
                public task: string,
                public complete = false) {
    // no statement required
    }

    public printDetails(): void {
        console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`);
    }
}
