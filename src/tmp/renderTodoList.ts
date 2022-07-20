import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { useTodoListStore } from '../store/store'

// Registers the element
@customElement('<render-todo-list>')
export class TodoElement extends LitElement {
    // Creates a reactive property that triggers rendering
    @property()
    todoText: string = "";
    
    setup() {
        const todo = ref('')
        // use Pinia store:
        const store = useTodoListStore()

        return { todo }
    }

    // Render the component's DOM by returning a Lit template
    render() {
        return html`            
            <div class="flex bg-indigo-100 rounded-md relative">
                <div class="flex items-center justify-center w-2/12 h-16">
                    <input type="checkbox" class="w-4 h-4 rounded" />
                </div>
                <div class="flex items-center justify-left w-8/12 h-16">
                    ${this.todoText}
                </div>
                <div class="flex items-center justify-center w-2/12 h-16">
                    <input
                        type="submit"
                        value="Remove"
                        class="
                        cursor-pointer
                        text-white
                        bg-red-700
                        hover:bg-red-800
                        focus:ring-4 focus:ring-black-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        text-center
                        "
                    />
                </div>
            </div>`;
    }
}