export default class BaseModel {
    constructor() {
        this.created = new Date();
        this.lastUpdated = new Date();
        this.deleted = new Date();
    }
    created: Date;
    lastUpdated: Date;
    deleted: Date;
}