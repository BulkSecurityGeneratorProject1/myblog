export interface IPost {
    id?: number;
    title?: string;
    body?: any;
}

export class Post implements IPost {
    constructor(public id?: number, public title?: string, public body?: any) {}
}
