<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import TodoPostForm from './TodoPostForm.vue';
  import TodoList from './TodoList.vue';

  export type Todo = {
    id: number;
    content: string;
    days: number;
  };

  const todos: Ref<Todo[]> = ref([
    {
      id: 0,
      content: 'project1',
      days: 10,
    },
    {
      id: 1,
      content: 'project2',
      days: 20,
    },
  ]);

  const registerTodo = (partialTodo: { content: string; days: number }) => {
    const todo: Todo = {
      id: todos.value.length,
      ...partialTodo,
    };
    todos.value.push(todo);
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);

    setWellOrderId();

    console.log(todos.value);
  };

  function setWellOrderId() {
    let i = 0;

    todos.value.forEach((todo) => {
      todo.id = i++;
    });
  }
</script>

<template>
  <div class="container">
    <h1>Todos</h1>
    <TodoPostForm @register="registerTodo" />
    <TodoList :todos="todos" @delete="deleteTodo" />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
