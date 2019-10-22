export class Todo {
    public id: number;
    public description: string;
    public isDone: boolean;
    public targetDate: Date;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
        this.isDone= false;
        this.targetDate = new Date();
    }
}