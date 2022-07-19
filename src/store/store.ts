import { identifier } from '@babel/types'
import { defineStore } from 'pinia'

interface Todo {
  id: number;
  todo: string;
  checked: boolean;
}

export const useTodoListStore = defineStore('todoList', {
  state: () => {
    return {
      todoList: [] as Todo[],
      isFetching: false,
    }
  },
  actions: {
    addTodo(newTodo: Todo) {
      this.todoList.push( newTodo )
    },
    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    updateTodoChecked(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
  },
})