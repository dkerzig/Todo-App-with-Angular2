import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

/* Component-Declaration of our Todo-App. */
@Component({
    selector: 'todo-app',
    template: ``
})
class TodoApp {}

/* This is a Angular-function which initializes the whole thing */
bootstrap(TodoApp);
