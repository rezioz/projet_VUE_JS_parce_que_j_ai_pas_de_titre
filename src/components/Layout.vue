<script setup>
</script>

<template>
  <div>
    <img src="../../images/logo.gif"/>
    <div class="test">
        <nav class="content">
          <RouterLink to="/" class="box">Episode</RouterLink>
          <RouterLink to="/personnage" class="box">Perosnnage</RouterLink>
          <RouterLink to="/other" class="box">un autre truc jsp quoi</RouterLink>
          
        </nav>
        <RouterView />
      </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.box {
  padding-left: 50px;
  padding-right: 50px;
  color: white
}

h1 {
  color: white;
}

</style>
