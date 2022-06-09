<template>
  <div>
        <h2>{{title}}</h2>
        <p>{{content}}</p>
  </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props:['title','content']
}
</script>

<style>

</style>