import {Component, Input} from 'angular2/core';

@Component({
	selector: 'todo-item',
    	template: `
        <li><label>
	       <input type="checkbox"><span> {{todo}} </span>
        </label></li>`
})
export class TodoItem {
    @Input() todo;
}
