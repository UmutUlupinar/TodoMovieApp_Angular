export class Model{
    user;
    items;

    constructor() {
        this.user = "Umut";
        this.items = [new TodoItems("Sci-fi",false),new TodoItems("Romance",false),new TodoItems("Action",false)];
    };
}
export class TodoItems{
        description;
        action;

        constructor(description: string,action: boolean){
            this.description= description;
            this.action = action;
        }
}

