<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Todo from "./components/Todo.vue";
</script>

<template>
  <div>
    <header class="bg-gray">
      <Nav />
    </header>
    <main class="min-h-screen container mx-auto">
      <Todo />
    </main>
  </div>
</template>
<style>
</style>
