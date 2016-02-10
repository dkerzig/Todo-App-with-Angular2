import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import {TodoItem} from './todo-item';
import {TodoService} from './todo-service';

/* Component-Declaration of our Todo-App. */
@Component({
    selector: 'todo-app',
    directives: [TodoItem],
    template: `
        <h1>Todo-App</h1>
		<input (keyup.enter)="addTodo()" [(ngModel)]=todoName class="todo-input" placeholder="Add Todo..">
		<ul>
			<todo-item class="todo-item" [todo]="todo" *ngFor="#todo of todoService.todos"></todo-item>
		</ul>
		`
})
class TodoApp {
    todoName: string;
    constructor(public todoService: TodoService) { }

    /* The event which is fired by the input-element and creates a new todo */
    addTodo()
    {
        if (this.todoName == "clear") {
            // Keyword "clear" removes all todos
            this.todoService.todos.length = 0;

        } else if (this.todoName == "check" || this.todoName == "uncheck") {
            // Keyword "(un)check" (un)checks all todo-items
            checkboxes = document.querySelectorAll('input[type=checkbox]');
            for (checkbox of checkboxes) {
                checkbox.checked = (this.todoName == "check") ? true : false;
            }

        } else if (this.todoName != "") {
            // Content isn't empty and doesn't contain keyword, so add a new todo
            this.todoService.todos.push(this.todoName);
        }

        // Reset input field
        this.todoName = "";
    }
}

/* This is a Angular-function which initializes the whole app */
bootstrap(TodoApp, [TodoService]);
