<template>
  <NewsCard />
</template>

<script>
// @ is an alias to /src
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Home',
  data() {
      return {

      }
  },
  components: {
    NewsCard
  }
}
</script>
