export class Todo {
    public id: number;
    public description: string;
    public isCompleted: boolean;
    public targetDate: Date;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
        this.isCompleted= false;
        this.targetDate = new Date();
    }
}