import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import {TodoItem} from './todo-item';

/* Component-Declaration of our Todo-App. */
@Component({
    selector: 'todo-app',
    directives: [TodoItem],
    template: `
        <h1>Todo-App</h1>
		<input (keyup)="addTodo($event)" class="todo-input" placeholder="Add Todo..">
		<ul>
			<todo-item class="todo-item" [todo]="todo" *ngFor="#todo of todos"></todo-item>
		</ul>
		`
})
class TodoApp {
    /* An array of strings containing all todos */
    public todos: string[] = [];

    /* The event which is fired by the input-element and creates a new todo */
    addTodo(event) {
        // Check if Enter (keycode 13) was pressed
        if (event.which == 13) {
            value = event.target.value;
            event.target.value = "";

            // Check for some special keywords ('clear' and '(un)check')
            if (value == "clear") {
                this.todos = [];
            } else if (value == "check" || value == "uncheck") {
                checkboxes = document.querySelectorAll('input[type=checkbox]');
                for (checkbox of checkboxes) {
                    checkbox.checked = (value == "check") ? true : false;
                }

                // Check if the content is not empty, if yes add a new todo
            } else if (value != "") {
                this.todos.push(value);
            }
        }
    }
}

/* This is a Angular-function which initializes the whole app */
bootstrap(TodoApp);
