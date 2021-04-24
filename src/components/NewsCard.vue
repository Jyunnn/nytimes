<template>
    <div class="news-wrap">
        <div class="news-card" v-for="timenews in news" :key="timenews.title">
            <img v-if="timenews['media'][0]" :src="timenews['media'][0]['media-metadata'][0]['url']" alt="">
            <p> {{ timenews.title }} 
                <router-link class="news-card-link" :to="{name:'News', params: { id: timenews.id} }"> ...more </router-link>
            </p>
            {{ msgArr }}
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
    props:{
        msgArr: {
            type: [ String, Number],
            default: ''
        }
    },
    mounted() {
        axios.get('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=9VzOhLWlALZ47LoZ6OzPiecj0Altk7zu').then((response) => {
            this.news = response.data.results;
        });
    },
}
console.log();
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .news-wrap {
        display: grid;
        grid-column-gap: 50px;
        grid-template-columns: auto auto auto auto auto;
    }
    .news-card {
        display: flex;
        img {
            align-self: start;
        }
    }

    .news-card-link {
        text-align: start;
    }

</style>