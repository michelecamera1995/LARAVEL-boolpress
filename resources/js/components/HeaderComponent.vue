<template>
<div>

      <header class="container">

            <!-- Nav Bar -->
            <nav>
                <ul>
                    <li><router-link :to="{name:'home'}">Home</router-link></li>
                    <li><router-link :to="{name:'blog'}">Blog</router-link></li>
                    <li><router-link :to="{name:'contacts'}">Contatti</router-link></li>
                </ul>
            </nav>


      </header>

</div>
</template>

<script>
export default {
    name:'HeaderComponent',

}
</script>

<style scoped>

nav ul{
display:flex;
margin:2%;
list-style-type: none;
}

nav ul li{
margin:5px;
}

nav ul a{
text-decoration: none;
color: black;
}

</style>