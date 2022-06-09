<template>
  <div class="container">
     <CardComponent/>
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