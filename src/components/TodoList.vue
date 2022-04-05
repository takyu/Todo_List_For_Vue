<script setup lang="ts">
  import { Todo } from './Todos.vue';

  type Props = {
    todos: Todo[];
  };

  defineProps<Props>();

  const emit = defineEmits(['delete']);

  const onClickDelete = (id: number) => {
    emit('delete', id);
  };
</script>

<template>
  <div class="container">
    <li v-for="todo in todos" :key="todo.id" class="container__list">
      <span>{{ todo.content }}</span>
      <span>days: {{ todo.days }}</span>
      <button>
        <span @click="onClickDelete(todo.id)">delete</span>
      </button>
    </li>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    &__list {
      display: flex;
      justify-content: space-between;
      background-color: bisque;
      font-size: 20px;
      font-weight: bold;
      list-style: none;
      margin-bottom: 20px;
      border-radius: 4px;
      padding: 8px 20px;
      width: 100%;
    }
  }
</style>
