<script>
import { defineComponent } from "vue";
import axios from "axios";


export default defineComponent({
  data() {
    return {
      episodes: [],
    };
  },
  mounted() {
    const numbers = [1, 2, 3];

    numbers.forEach((number) => {
      axios
        .get("https://rickandmortyapi.com/api/episode?page=" + number)
        .then((result) => {
          console.log(result)
          this.episodes.push(result.data.results);
        })
        .catch((error) => {
          console.log("Error");
        });
    });
  },
});

</script>

<template>
  <div style="background-color:white">

    <div class="search-wrapper panel-heading col-sm-12">
      <input type="text" v-model="search" placeholder="Search" /> <br> <br>
    </div>

    <div class="grid" v-for="episode in episodes" v-bind:key="episode['id']">
      <div class="card" v-for="detailEpisode in episode" v-bind:key="detailEpisode['id']">
        <div > {{ detailEpisode.episode }} </div><br/>

        <div> {{ detailEpisode.name }} </div>

        <div class="cardinfo"> ---> see more </div>
        
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
  height: 150px;
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  background-color: azure;
}

.cardinfo {
  margin-top: 13%;
  margin-right: 60%;
}

</style>
