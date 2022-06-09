<template>
  <div class="container">
        <div >
            <CardListComponent :posts='posts' />
        </div>
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