import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { useTodoListStore } from './store/store'
import { Todo } from './models/Todo'

// Registers the element
@customElement('<add-todo>')
export class TodoElement extends LitElement {
    // Creates a reactive property that triggers rendering
    @property()
    newTodo: Todo = {};

    // Render the component's DOM by returning a Lit template
    render() {
        return html`            
            <input
                class="
                revue-form-field
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                pl-10
                p-2.5
                focus:ring-blue-500 focus:border-blue-500
                "
                placeholder="Learn coding..."
                type="text"
                id="todo_add"
            />`;
    }
}