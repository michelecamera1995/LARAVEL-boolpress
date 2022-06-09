<template>
  <div class="container">
        <div >
            <h1>Post:</h1>
            <CardListComponent :posts='posts' />
        </div>
        <a><router-link :to="{name:'home'}">Torna alla home</router-link></a>
  </div>
</template>

<script>
import CardListComponent from '../components/CardListComponent.vue';
export default {
    name: 'BlogPage',
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
                if (results.status === 200) {
                    this.posts = results.data;
                }
            }).catch(e => {
                console.log(e);
            })
    }
}
</script>

<style>

</style>