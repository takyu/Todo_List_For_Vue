<script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { Todo } from './Todos.vue';

  const inputtingContent = ref<string>('');
  const inputtingDays = ref<number>(1);

  const emit = defineEmits(['register']);

  function initializeInputs() {
    inputtingContent.value = '';
    inputtingDays.value = 1;
  }
  const register = () => {
    const partialTodo = {
      content: inputtingContent.value,
      days: inputtingDays.value,
    };
    emit('register', partialTodo);

    initializeInputs();
  };

  const inputContentColor = computed(() =>
    isValidContent.value ? 'white' : 'rgb(255, 192, 203)'
  );

  const inputDaysColor = computed(() =>
    isValidDays.value ? 'white' : 'rgb(255, 192, 203)'
  );

  const contentLengthLimit: number = 15;
  const minimumDays: number = 1;

  const isValidContent = computed(() => {
    if (inputtingContent.value.length >= contentLengthLimit) {
      return false;
    }
    return true;
  });

  const isValidDays = computed(() => {
    if (inputtingDays.value < minimumDays) {
      return false;
    }
    return true;
  });
</script>

<template>
  <div class="container">
    <div class="container__form">
      <div class="container__input">
        <div class="container__input__column">
          <span>Todo : </span>
          <input
            type="text"
            v-model="inputtingContent"
            class="container__input__column__todo"
          />
          <div class="container__input__column__todo__error">
            <span v-if="!isValidContent"
              >{{ contentLengthLimit }} characters or less, please.</span
            >
          </div>
        </div>
        <div class="container__input__column">
          <span>Days : </span>
          <input
            type="number"
            v-model="inputtingDays"
            class="container__input__column__days"
          />
          <div class="container__input__column__todo__error">
            <span v-if="!isValidDays"
              >{{ minimumDays }} characters or more, please.</span
            >
          </div>
        </div>
      </div>
      <button
        :disabled="!isValidContent || !isValidDays"
        class="container__form__register"
        @click="register"
      >
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
        &__todo {
          // 動的に色を変える
          background-color: v-bind(inputContentColor);

          &__error {
            margin-top: 5px;

            span {
              font-size: 16px;
              color: rgb(255, 192, 203);
            }
          }
        }
        &__days {
          background-color: v-bind(inputDaysColor);
        }
      }
    }
  }
</style>
