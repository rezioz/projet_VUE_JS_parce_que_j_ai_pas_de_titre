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
    //const charNumbers = 500
    //const charNumber = 0
    numbers.forEach(async (number) => {
      try {
        let resultEpisode = await axios.get("https://rickandmortyapi.com/api/episode?page=" + number)
        this.episodes.push(resultEpisode.data.results)
      } catch(error) {
        console.log(error)
      }
    });
    numbers.forEach(async (number) => {
      try {
        let resultChar = await axios.get("https://rickandmortyapi.com/api/character/" + number)
        this.infocharacters.push(resultChar.data)
      } catch(error) {
        console.log(error)
      }
    });
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
          @mouseover="upHere = true" @mouseleave="upHere = false" >
      
          <div > {{ detailEpisode.episode }} </div><br/>
          <div> {{ detailEpisode.name }}</div>

          <div class="cardinfo"> Over me :)
            <div v-show="upHere" v-for="chars in detailEpisode.characters.slice(0, 5)" v-bind:key="chars['iddd']">
              <div v-for="character in infocharacters" v-bind:key="character.id">
                <div v-if="chars == character.url"> 
                  <a v-bind:href="'http://localhost:3000/personnage/'+ character.id"> {{ character.name }} </a>
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

<style>
.grid {
  margin: 0px 10% 0px 10%;
	display: flex;
	flex-wrap: wrap;
  width: auto;
  text-align: center;
}

.card {
  flex: 0 0 31%;
  border: 1px solid black;
  width: 300px;
  height: auto;
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  background-color: azure;
}

.hiddencard {
  display: none;
}

.cardinfo {
  margin-top: 13%;
}

</style>