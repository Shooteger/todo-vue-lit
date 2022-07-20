import { identifier } from '@babel/types'
import { defineStore } from 'pinia'
import { Todo } from '../models/Todo'

export const useTodoListStore = defineStore('todoList', {
  state: () => {
    return {
      todoList: [] as Todo[],
      isFetching: false,
    }
  },
  getters: {
    getTodoList: (state) => state.todoList,
  },
  actions: {
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