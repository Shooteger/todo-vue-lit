import { defineStore } from 'pinia'
import { Todo } from '../models/Todo'
// import dataTodos from '../public/data-todos';

export const useTodoListStore = defineStore('todoList', {
  state: () => {
    return {
      todoList: [] as Todo[],
      isFetching: false as boolean,
      error: null as any,
    }
  },
  getters: {
    getTodoList: (state) => state.todoList,
  },
  actions: {
    async fetchTodos() {
      this.todoList = []
      this.isFetching = true
      try {
        //this.todoList = await ""
      } catch (error) {
        this.error = error
      } finally {
        this.isFetching = false
      }
    },
    addTodo(newTodo: Todo) {
      this.todoList.push( newTodo )
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    updateTodoChecked(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
  },
})