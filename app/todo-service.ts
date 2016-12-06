import {Component, Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
    todos: string[] = [];

    constructor() {
        // Auslesen
        try {
            savedTodos = localStorage["abc"];
            this.todos = JSON.parse(savedTodos);
        } catch (e) {}

        // Abspeichern
        Object.observe(this.todos, (changes) => {
            if (this.todos !== null && this.todos !== undefined) {
                localStorage["abc"] = JSON.stringify(this.todos);
            }
        })


    }
}
