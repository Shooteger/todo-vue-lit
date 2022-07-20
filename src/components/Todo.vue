<script lang="ts">
import { mapState, mapActions } from "pinia";
import { storeToRefs } from 'pinia'
import { useTodoListStore } from "../store/store";

const { todoList, isFetching, error } = storeToRefs(useTodoListStore())
const { fetchTodos } = useTodoListStore()

fetchTodos()
/*
export default {
  data() {
    return {
        newTodoText: '' as string,
    }
  },
};
*/
</script>

<template>
  <div class="py-6 w-full h-full bg-gray-200">
    <div class="container mx-auto">
      <div class="py-6 w-full h-full bg-gray-200">
        <div
          class="
            w-11/12
            mx-auto
            mb-4
            my-6
            md:w-5/12
            shadow
            sm:px-10 sm:py-6
            py-4
            px-4
            bg-white
            rounded-md
          "
        >
          <p class="text-lg text-gray-800 font-semibold pb-3">
            Todo List with <b>Vue 3.x + Vite + Lit</b>
          </p>
          <div class="flex items-end mb-3">
            <div class="relative mr-3 w-full revue-form-group">
              <div
                class="
                  flex
                  absolute
                  inset-y-0
                  left-0
                  items-center
                  pl-3
                  pointer-events-none
                "
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: rgb(0%, 0%, 0%);
                      fill-opacity: 1;
                    "
                    d="M 19.867188 6.964844 L 16.035156 5.203125 C 15.828125 5.097656 15.75 5.25 15.722656 5.304688 L 12.039062 13.179688 C 12.011719 13.234375 12.003906 13.328125 12.015625 13.386719 L 12.8125 16.867188 C 12.828125 16.925781 12.882812 16.953125 12.9375 16.925781 L 16.113281 15.296875 C 16.167969 15.269531 16.230469 15.199219 16.257812 15.144531 L 19.921875 7.273438 C 19.945312 7.21875 20.023438 7.066406 19.867188 6.964844 Z M 15.085938 15.144531 C 15.03125 15.171875 14.945312 15.21875 14.890625 15.246094 C 14.890625 15.246094 14.011719 15.699219 13.683594 15.863281 C 13.519531 15.949219 13.191406 15.816406 13.148438 15.636719 C 13.066406 15.273438 12.839844 14.292969 12.839844 14.292969 C 12.828125 14.234375 12.808594 14.136719 12.792969 14.074219 C 12.769531 13.957031 12.824219 13.855469 12.976562 13.886719 C 13.035156 13.898438 13.121094 13.949219 13.179688 13.976562 L 14.914062 14.785156 C 14.972656 14.8125 15.0625 14.851562 15.113281 14.882812 C 15.207031 14.941406 15.257812 15.046875 15.085938 15.144531 Z M 15.085938 15.144531 "
                  />
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: rgb(0%, 0%, 0%);
                      fill-opacity: 1;
                    "
                    d="M 18.160156 13.285156 C 18.003906 13.625 17.808594 14.039062 17.589844 14.519531 C 17.527344 14.65625 17.457031 14.75 17.457031 15.105469 C 17.457031 16.023438 17.457031 18.777344 17.457031 18.777344 C 17.457031 18.945312 17.3125 19.089844 17.144531 19.089844 L 1.226562 19.089844 C 1.054688 19.089844 0.914062 18.945312 0.914062 18.777344 L 0.914062 1.207031 C 0.914062 1.035156 1.054688 0.894531 1.226562 0.894531 L 17.144531 0.894531 C 17.316406 0.894531 17.457031 1.035156 17.457031 1.207031 C 17.457031 1.207031 17.457031 3.308594 17.457031 3.976562 C 17.457031 4.164062 17.539062 4.269531 17.628906 4.308594 C 17.761719 4.363281 18.023438 4.46875 18.15625 4.519531 C 18.234375 4.550781 18.351562 4.476562 18.351562 4.25 C 18.351562 3.488281 18.351562 1.207031 18.351562 1.207031 C 18.351562 0.542969 17.808594 0 17.144531 0 L 1.226562 0 C 0.5625 0 0.0195312 0.542969 0.0195312 1.207031 L 0.0195312 18.777344 C 0.0195312 19.441406 0.5625 19.984375 1.226562 19.984375 L 17.144531 19.984375 C 17.808594 19.984375 18.351562 19.441406 18.351562 18.777344 C 18.351562 18.777344 18.351562 14.726562 18.351562 13.378906 C 18.351562 13.128906 18.199219 13.203125 18.160156 13.285156 Z M 18.160156 13.285156 "
                  />
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: rgb(0%, 0%, 0%);
                      fill-opacity: 1;
                    "
                    d="M 13.964844 6.242188 L 13.964844 5.789062 C 13.964844 5.667969 13.863281 5.570312 13.742188 5.570312 L 3.914062 5.570312 C 3.792969 5.570312 3.695312 5.667969 3.695312 5.789062 L 3.695312 6.242188 C 3.695312 6.363281 3.792969 6.464844 3.914062 6.464844 L 13.742188 6.464844 C 13.863281 6.464844 13.964844 6.363281 13.964844 6.242188 Z M 13.964844 6.242188 "
                  />
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: rgb(0%, 0%, 0%);
                      fill-opacity: 1;
                    "
                    d="M 12.058594 10.207031 L 12.058594 9.753906 C 12.058594 9.632812 11.960938 9.535156 11.839844 9.535156 L 3.914062 9.535156 C 3.792969 9.535156 3.695312 9.632812 3.695312 9.753906 L 3.695312 10.207031 C 3.695312 10.328125 3.792969 10.429688 3.914062 10.429688 L 11.839844 10.429688 C 11.960938 10.429688 12.058594 10.328125 12.058594 10.207031 Z M 12.058594 10.207031 "
                  />
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: rgb(0%, 0%, 0%);
                      fill-opacity: 1;
                    "
                    d="M 4.761719 15.933594 C 4.664062 15.933594 4.582031 16.015625 4.582031 16.113281 L 4.582031 16.648438 C 4.582031 16.746094 4.664062 16.828125 4.761719 16.828125 L 11.550781 16.828125 C 11.648438 16.828125 11.730469 16.746094 11.730469 16.648438 L 11.730469 16.113281 C 11.730469 16.015625 11.648438 15.933594 11.550781 15.933594 Z M 4.761719 15.933594 "
                  />
                </svg>
              </div>
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
              />
            </div>
            <div>
              <input
                type="submit"
                value="Add"
                class="
                  cursor-pointer
                  text-white
                  bg-blue-700
                  hover:bg-blue-800
                  focus:ring-4 focus:ring-blue-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 w-full h-full bg-gray-200">
        <p v-if="isFetching">Loading posts...</p>
        <div class="container mx-auto">
          <div
            class="
              xl:w-7/12
              w-11/12
              mx-auto
              mb-4
              my-6
              md:w-2/3
              shadow
              sm:px-10
              px-4
              py-6
              bg-white
              rounded-md
            "
          >
            <p v-if="todoList" class="text-lg text-gray-800 font-semibold mb-4">Your todo's</p>
            <div class="flex bg-indigo-100 rounded-md relative" v-for="todo in todos" :key="todo.id">
              <div class="flex items-center justify-center w-2/12 h-16">
                <input type="checkbox" class="w-4 h-4 rounded" />
              </div>
              <div class="flex items-center justify-left w-8/12 h-16">
                Lit learning
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.checkbox:checked {
  /* Apply class right-0*/
  right: 0;
}
.checkbox:checked + .toggle-label {
  /* Apply class bg-indigo-700 */
  background-color: #4c51bf;
}
</style>