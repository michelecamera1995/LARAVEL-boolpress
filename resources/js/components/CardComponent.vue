<template>
    <div class="card">
      <h3>Titolo: </h3>
      <h2>{{title}}</h2>
      <h4>Contenuto:</h4>
      <h4>{{content}}</h4>
      <h4>{{id}}</h4>
      <router-link :to="{name:'PostDetails', params: { id } }">Dettagli</router-link>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props:['title','content','id']
}
</script>

<style scoped >
.card{
  width: calc(100% / 6);
  background-color: grey;
  border: 1px solid black;
  border-radius:15%;
  text-align: center;
  margin: 1%;
}
</style>