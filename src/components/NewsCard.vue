<template>
    <div class="news-wrap">
        <div class="news-card" v-for="timenews in news" :key="timenews.title">
            <img v-if="timenews['media'][0]" :src="timenews['media'][0]['media-metadata'][0]['url']" alt="">
            <p> {{ timenews.title }} </p>
            <router-link class="news-card-link" :to="{name:'News', params: { id: timenews.id} }"> 閱讀更多 </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: null,
        }
    },
    mounted() {
        axios.get('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=9VzOhLWlALZ47LoZ6OzPiecj0Altk7zu').then((response) => {
            this.news = response.data.results;
        });
    },
}
</script>

<style lang="scss" scoped>
    .news-wrap {
        display: grid;
        grid-column-gap: 50px;
        grid-template-columns: auto auto auto auto auto;
    }
    .news-card {
        position: relative;
        height: 250px;
    }

    .news-card-link {
        position: absolute;
        bottom: 20px;
        left: 30%;
    }

</style>