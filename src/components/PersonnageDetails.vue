<script>
import { defineComponent } from "vue";
import axios from "axios";

//const app = createApp({ "./App.vue" })
//app.use(store)
export default defineComponent({

  data() {
    return {
      infocharacters: [],
      id: this.$route.params.id,
    };
  },

  async mounted() {
    // Le fetch est un peu différent que sur les autres pages, on récupère l'id en paramètre de la page, pour fetcher uniquement les infos du personnage concerné
    try {
      let resultChar = await axios.get("https://rickandmortyapi.com/api/character/" + this.$route.params.id)
      this.infocharacters.push(resultChar.data)
    } catch(error) {
    console.log(error)
   }
  },
});
</script>

<template>
  <div>
    <!-- Affichage des infos sur le personnage de la page -->
    <div v-for="character in infocharacters" v-bind:key="character.id"> 
      <div>
        <img class="imageStyle" :src=character.image>
        <div>{{character.name}}</div>
        <div>Statut : {{character.status}}</div>
        <div>{{character.species}}</div>
        <div>From ? {{character.location.name}}</div>
      </div>
    </div>
  </div>
</template>
