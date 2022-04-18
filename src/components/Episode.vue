<script>
import { defineComponent } from "vue";
import axios from "axios";

//const app = createApp({ "./App.vue" })
//app.use(store)

export default defineComponent({

  data() {
    return {
      episodes: [],
      infocharacters: [],
      searchbar: '',
      upHere : false,
    };
  },

  async mounted() {
    const numbers = [1, 2, 3]
    const charMax = 826
    let charNumber = 1
    numbers.forEach(async (number) => {
      try {
        let resultEpisode = await axios.get("https://rickandmortyapi.com/api/episode?page=" + number)
        this.episodes.push(resultEpisode.data.results)
      } catch(error) {
        console.log(error)
      }
    });
    while(charNumber < charMax){
      try {
        let resultChar = await axios.get("https://rickandmortyapi.com/api/character/" + charNumber)
        this.infocharacters.push(resultChar.data.id)
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
    <div class="search-wrapper panel-heading col-sm-12" :directive="searchbar">
      <input index="searchbar" type="text" v-model="searchbar" placeholder="Search" /> <br> <br>
    </div>
      <div class="grid" v-for="episode in episodes" v-bind:key="episode['id']">
        <div v-for="detailEpisode in episode" :key="detailEpisode['idd']"
          :class=" detailEpisode.name.toLowerCase().includes(searchbar.toLowerCase()) ? 'card' : 'hiddencard'"
          @mouseover="upHere = true" @mouseleave="upHere = false">
          <div > {{ detailEpisode.episode }} </div>
          <br/>
          <div> {{ detailEpisode.name }}</div>
          <div class="cardinfo"> Over me :)
            <div v-show="upHere" v-for="chars in detailEpisode.characters.slice(0, 5)" v-bind:key="chars['iddd']">
              <div v-for="character in infocharacters" v-bind:key="character.id">
                <div v-if="chars == character.url"> 
                  <a v-bind:href="'/personnage/' + character.id"> {{ character.name }} </a>
                </div>  
              </div> 
            </div>
          </div>
        <br/>
        <br/>
      </div>
    </div>
  </div>
</template>
