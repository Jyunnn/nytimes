<template>
  <h1> User Page </h1>
  <ul>
      <li v-for="user in userdata" :key="user.id">
          {{ user.name }}
      </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            userdata: []
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((v) => {
            this.userdata = v.data;
        })
    }
}
</script>

<style>

</style>