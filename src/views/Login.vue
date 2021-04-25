<template>
  <div class="login_box">
    <form class="login" @submit.prevent="login()" >
      <div>
        <label>帳號</label>
        <input class="login_input" type="text" v-model="username">
      </div>
      <div>
        <label>密碼</label>
        <input class="login_input" type="password" v-model="password">
      </div>
        <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    axios.get(process.env.VUE_APP_HEX+"/api/:api_path/products?page=:page").then((response) => {
      console.log(response.data)
    })
    return {
      username, password
    }
  },
  methods: {
    login() {
      let user = {
        "username": this.username,
        "password": this.password
      }
      this.$http.post(process.env.VUE_APP_HEX+"/signin", user).then((response) => {
        console.log(response.data)
        if(response.data.success == true) {
          console.log(this.$router.push('/'));
        }
      })
    }
  }
}
</script>

<style lang="scss" scope>

  .login div {
    margin: 12px 0;
  }

  .login button {
    padding: 12px 36px;
    border: 0px;
    border-radius: 5px;
    background-color:rgb(92, 223, 31);
    color: #FFF;
  }

  .login_input {
    padding: 5px;
  }

  .login_area {

  }
</style>