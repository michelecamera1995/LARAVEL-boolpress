<template>
<div>
     dettagli post!
</div>
</template>

<script>
export default {
    name: 'PostDetails',
  data() {
      return {
        post:[]
    }
    },
    mounted() {
        const id = this.$route.params.id;
        window.axios.get('http://127.0.0.1:8000/api/posts' + id)
            .then(results => {
                console.log(results);
                if (results.status === 200) {
                    this.post = results.data;
                }
            }).catch(e => {
                console.log(e);
            })
    }
}

</script>

<style>

</style>