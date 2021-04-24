<template>
  <h2>ToDoList</h2>
  <form @submit.prevent="addTodo">
    <input type="text" name="newTodo" v-model="newTodo">
    <button>TODO</button>
  </form>
  <ul>
      <li v-for="(todo, index ) in todoList" :key="todo.id"> <a href="" @click.prevent="delTodo(todo.id)"> [X]</a> {{ index }}. {{ todo.content }} </li>
  </ul>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
      const newTodo = ref('');
      const todoList = reactive([]);

      function addTodo() {
          if (newTodo.value == ''){
              return
          }
          todoList.push({
              id: Date.now(),
              finish: false,
              content: newTodo.value
          });
          newTodo.value = '';
      }

      function delTodo(dateid) {
        let todo = todoList.find((v) => v.id == dateid);
        let index = todoList.indexOf(todo);
        todoList.splice(index, 1);
      }

      return {
        addTodo, delTodo, newTodo, todoList
      }
  }
}
</script>

<style lang="scss" scope>
    * {
        text-decoration: none;
        list-style: none;
    }

    ul {
        margin: 0;
        padding: 0;
        li {
            padding: 10px;
            border-bottom: 1px solid #000;
        }
    }
</style>