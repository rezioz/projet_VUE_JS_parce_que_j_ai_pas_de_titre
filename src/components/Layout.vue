<script setup>
</script>

<template>
  <div>
    <h1>Rick & MORTY SHOW</h1>
    <div class="test">
        <nav class="content">
          <RouterLink to="/" class="box">Episode</RouterLink>
          <RouterLink to="/profile" class="box">Perosnnage</RouterLink>
          <RouterLink to="/profile" class="box">un autre truc jsp quoi</RouterLink>
          
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
  color: #2c3e50;
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
}

</style>
