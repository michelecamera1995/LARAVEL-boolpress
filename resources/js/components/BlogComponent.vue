<template>
  <div class="container">
        <div v-if="posts.length>0">
            <CardListComponent :posts='posts' />
        </div>
        <div v-else>Caricamento in corso...</div>
  </div>
</template>

<script>
import CardListComponent from '../components/CardListComponent.vue';
export default {

  data() {
      return {
        posts:[]
    }
    },
    components: {
        CardListComponent,
    },
    mounted() {
        window.axios.get('http://127.0.0.1:8000/api/posts')
            .then(results => {
                console.log(results);
                if (results.status === 200 && results.data.success) {
                    this.posts = results.data.results
                }
            
        })
    }
}
</script>

<style>

</style>