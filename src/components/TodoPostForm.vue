<script setup lang="ts">
  import { ref } from 'vue';
  import type { Todo } from './Todos.vue';

  const inputtingTodo = ref<string>('');
  const inputtingDays = ref<number>(0);

  const emit = defineEmits(['register']);

  const register = () => {
    const partialTodo = {
      content: inputtingTodo.value,
      days: inputtingDays.value,
    };
    emit('register', partialTodo);
  };
</script>

<template>
  <div class="container">
    <div class="container__form">
      <div class="container__input">
        <div class="container__input__column">
          <span>Todo : </span>
          <input type="text" v-model="inputtingTodo" />
        </div>
        <div class="container__input__column">
          <span>Days : </span>
          <input type="number" v-model="inputtingDays" />
        </div>
      </div>
      <button class="container__form__register" @click="register">
        register
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    padding: 30px 0;
    width: 70%;
    margin-bottom: 30px;
    border-radius: 4px;

    &__input {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__column {
        margin-bottom: 8px;
        span {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
</style>
