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
    //On boucle sur tous les personnages pour récupérer leurs infos, qu'on stocke dans une list
    const charMax = 300
    let charNumber = 1
    while(charNumber < charMax){
      try {
        let resultChar = await axios.get("https://rickandmortyapi.com/api/character/" + charNumber)
        this.infocharacters.push(resultChar.data)
        charNumber += 1
      } catch(error) {
        console.log(error)
      }
    };
  },
});
</script>

<template>
  <div style="background-color:white">
    <!-- Pour chaque personnage, on affiche certaines de ses infos dans un grid -->
      <div class="gridchar">
        <div class="cardchar" v-for="character in infocharacters" v-bind:key="character.id"> 
            <div class="" ><img :src=character.image></div>
            <div class="" > 
                <a v-bind:href="'/personnage/' + character.id"> {{ character.name }} </a>
                <div>Status : {{character.status}}</div>
                <div>Espèce : {{character.species}}</div>
                <div>Lieu de vie : {{character.location.name}}</div>
            </div>
        </div>
    </div>
  </div>
</template>
