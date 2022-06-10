<template>
  <div class="container">
      <div class="card-container">
          <CardComponent  v-for="(post,index) in posts" :key="index" :title='post.title' :content='post.content'/>
      </div> 
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
export default {
    name: 'CardListComponent',
    props: ['posts'],
    components: {
        CardComponent
    }
}
</script>

<style scoped>
.card-container{
  display:flex;
  width: (100%/4);
  margin: 1%;
  flex-wrap: wrap;
  width: 100%;
}

</style>