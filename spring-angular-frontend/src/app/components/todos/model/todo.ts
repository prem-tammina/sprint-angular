export class Todo {
    public id: number;
    public description: string;
    public completed: boolean;
    public targetDate: Date;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
        this.completed= false;
        this.targetDate = new Date();
    }
}