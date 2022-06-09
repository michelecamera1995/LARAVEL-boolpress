<template>
  <div class="container">
      <div v-for="(post,index) in posts" :key="index">
          <CardComponent :title='post.title' :content='post.content'/>
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

<style>

</style>