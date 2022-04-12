<script>
import { defineComponent } from "vue";

import axios from "axios";

export default defineComponent({
  data() {
    return {
      episodes: [],
      searchbar: 'Pilot'
    };
  },
  mounted() {
    const numbers = [1, 2, 3];
    console.log("in");

    numbers.forEach((number) => {
      axios
        .get("https://rickandmortyapi.com/api/episode?page=" + number)
        .then((result) => {
          console.log(result);
          this.episodes.push(result.data.results);
        })
        .catch((error) => {
          console.log("nope");
        });
    });
  },
});
</script>

<template>

  


  <div style="background-color:white;">

    <div class="search-wrapper panel-heading col-sm-12" :directive="searchbar">
      <input index="searchbar" type="text" v-model="searchbar" placeholder="Search" /> <br> <br>
    </div>



    
    <div
      v-for="episode in episodes"
      v-bind:key="episode['id']"
    >
    <div
      v-for="detailEpisode in episode"
      v-bind:key="detailEpisode['idd']"
    >
    <div v-if="detailEpisode.name==searchbar">
      Episode : {{ detailEpisode.episode }}
      Nom : {{ detailEpisode.name }}
    </div>
    
      
    <br/>
    <br/>
    </div>
    </div>
  </div>

  

</template>



<style>
</style>
