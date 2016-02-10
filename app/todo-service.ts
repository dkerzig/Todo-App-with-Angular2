import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
    todos: string[];

    constructor() {
        try {
            var savedTodos = JSON.parse(localStorage["todos"]);
            this.todos = savedTodos;
        } catch (e) {
            this.todos = [];
        }

        Object.observe(this.todos, (changes) => {
            localStorage["todos"] = JSON.stringify(this.todos);
        });
    }
}
