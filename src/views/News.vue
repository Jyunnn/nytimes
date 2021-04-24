<template>
  <p> {{ id }} </p>
  <p> {{ this.news.title }} </p>
  <p> {{ this.news.abstract }} </p>
  <div id="nav">
    <router-link :to="{name: 'News-User'}">User</router-link> |
    <router-link :to="{name: 'News-Usercenter'}" custom v-slot="{ navigate }">
        <button @click="navigate" role="lick"> About us </button>
    </router-link>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: {},
        }
    },
    props: ['id'],
    mounted() {
        axios.get('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=9VzOhLWlALZ47LoZ6OzPiecj0Altk7zu').then((response) => {
            this.news = response.data.results.find((v) => {
                return v.id == this.$route.params.id 
            });
        });
    },
}
</script>

<style>

</style>