<template>
  <p> {{ id }} </p>
  <img v-if="news.media" :src="news.media[0]['media-metadata'][2].url" alt="">
  <p> {{ news.title }} </p>
  <p> {{ news.abstract }} </p>
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
        axios.get(process.env.VUE_APP_NYTIMESAPI).then((response) => {
            this.news = response.data.results.find((v) => {
                return v.id == this.$route.params.id 
            });
        });
    },
}
</script>

<style>

</style>