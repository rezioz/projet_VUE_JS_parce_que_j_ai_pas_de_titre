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


  methods: {
    changeClass: function(){
      this.width='10000px';
    }
  },

  mounted() {
    const numbers = [1, 2, 3];
    numbers.forEach(async (number) => {
      try {
        let result = await axios.get("https://rickandmortyapi.com/api/episode?page=" + number)
        this.episodes.push(result.data.results)
      } catch(error) {
        console.log(error);
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
        <div class="card" v-for="detailEpisode in episode" v-bind:key="detailEpisode['idd']">
        <div v-if="detailEpisode.name==searchbar">
      
          <div > {{ detailEpisode.episode }} </div><br/>
          <div> {{ detailEpisode.name }} </div>
          <div class="cardinfo"> ---> see more </div>
          
          <br/>
          <br/>
        </div>
        <div v-else>
          <div class="hiddencard"> ---> jsp </div>
          detailEpisode.changeClass();
        </div>
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

.hiddencard {
  flex: 0 0 31%;
  border: 1px solid black;
  width: 300px;
  height: 150px;
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  background-color: red;
}

.cardinfo {
  margin-top: 13%;
  margin-right: 60%;
}

</style>
