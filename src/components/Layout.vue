<script>
</script>

<template>
  <div>
    <img src="../../images/logo.gif"/>
    <div>
      <!-- Création d'un nav bar -->
        <nav class="content">
          <RouterLink to="/" class="box">Episode</RouterLink>
          <RouterLink to="/personnage" class="box">personnage</RouterLink>
        </nav>
        <RouterView />
      </div>
  </div>
</template>
