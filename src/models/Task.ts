import BaseModel from "./BaseModel";

export default class Task extends BaseModel {
    name: string;
    completed: boolean;

    constructor(name: string){
        super();
        this.name = name;
        this.completed = false;
    }
}