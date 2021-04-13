<template>
  <p> {{ this.news.title }} </p>
  <p> {{ this.news.abstract }} </p>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: {},
        }
    },
    beforeCreate() {
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